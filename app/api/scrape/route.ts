import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { supabase } from '@/lib/supabase';
import os from 'os';

interface ScrapedPost {
  title: string;
  content: string;
  url: string;
}

function normalizeDate(dateText: string): string | null {
  const match = dateText.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (!match) {
    return null;
  }

  const year = match[1];
  const month = match[2].padStart(2, '0');
  const day = match[3].padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isAuthorizedRequest(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return true;
  }

  const authorizationHeader = request.headers.get('authorization');
  if (!authorizationHeader) {
    return false;
  }

  const [scheme, token] = authorizationHeader.split(' ');
  return scheme.toLowerCase() === 'bearer' && token === cronSecret;
}

export async function GET(request: Request) {
  if (!isAuthorizedRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized request' }, { status: 401 });
  }

  console.log(`[DOM Scraping Started] Time: ${new Date().toISOString()}`);

  let browser = null;

  try {
    const isMac = os.platform() === 'darwin';
    const executablePath = isMac
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : await chromium.executablePath();

    browser = await puppeteer.launch({
      args: isMac ? [] : chromium.args,
      defaultViewport: null,
      executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    );

    const url = 'https://oia.gachon.ac.kr/international/a/m/graduateInfo.do';
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#admissioninfo', { timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const posts: ScrapedPost[] = await page.evaluate(() => {
      const baseUrl = 'https://oia.gachon.ac.kr';
      const items = Array.from(document.querySelectorAll('#admissioninfo ul li'));

      return items
        .map((li) => {
          const p = li.querySelector('.col_3 p');
          const category = li.querySelector('.col_2')?.textContent?.trim() || '';
          const title = p?.childNodes[0]?.textContent?.trim() || '입학 정보';
          const author = li.querySelector('.col_4')?.textContent?.trim() || '';
          const date = li.querySelector('.col_5')?.textContent?.trim() || '';

          const onclick = p?.getAttribute('onclick') || '';
          const match = onclick.match(/fnGoBoardDetail\('([^']+)',\s*'([^']+)'\)/);
          const postUrl = match ? `${baseUrl}${match[1]}?borKey=${match[2]}` : '';

          return {
            title,
            content: `분류: ${category}, 작성자: ${author}, 날짜: ${date}`,
            url: postUrl,
          };
        })
        .filter((post) => post.url !== '');
    });

    console.log(`[Scraping Success] Processed ${posts.length} posts`);

    const rows = posts.map((post) => {
      const dateMatch = post.content.match(/날짜:\s*([^\s,]+)/);
      const postedAt = normalizeDate(dateMatch?.[1] ?? '');
      return {
        university_name: '가천대학교',
        title: post.title,
        content: post.content,
        url: post.url,
        posted_at: postedAt,
      };
    });

    const { error } = await supabase
      .from('university_info')
      .upsert(rows, { onConflict: 'url' });

    if (error) {
      console.error('[DB Upsert Error]', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success', count: posts.length });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown scraping error';
    console.error('[Scraping Error]', error);
    return NextResponse.json({ error: message }, { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
