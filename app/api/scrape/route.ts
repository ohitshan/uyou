import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { supabase } from '@/lib/supabase';
import os from 'os';

export async function GET() {
  console.log(`[DOM Scraping Started] Time: ${new Date().toISOString()}`);
  
  let browser = null;

  try {
    const isMac = os.platform() === 'darwin';
    const executablePath = isMac 
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : await chromium.executablePath();

    browser = await puppeteer.launch({
      args: isMac ? [] : chromium.args,
      defaultViewport: isMac ? null : (chromium as any).defaultViewport,
      executablePath: executablePath,
      headless: isMac ? 'new' : (chromium as any).headless,
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    const url = 'https://oia.gachon.ac.kr/international/a/m/graduateInfo.do';
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    
    await page.waitForSelector('#admissioninfo', { timeout: 30000 });
    await new Promise(r => setTimeout(r, 5000)); 

    // DOM 구조에 기반한 정확한 파싱
    const posts = await page.evaluate(() => {
        const baseUrl = 'https://oia.gachon.ac.kr';
        const items = Array.from(document.querySelectorAll('#admissioninfo ul li'));
        
        return items.map(li => {
            const p = li.querySelector('.col_3 p');
            const category = li.querySelector('.col_2')?.textContent?.trim() || '';
            const title = p?.childNodes[0].textContent?.trim() || '입학 정보';
            const author = li.querySelector('.col_4')?.textContent?.trim() || '';
            const date = li.querySelector('.col_5')?.textContent?.trim() || '';
            
            const onclick = p?.getAttribute('onclick') || '';
            const match = onclick.match(/fnGoBoardDetail\('([^']+)',\s*'([^']+)'\)/);
            const postUrl = match ? baseUrl + match[1] + '?borKey=' + match[2] : '';
            
            return {
                title,
                content: `분류: ${category}, 작성자: ${author}, 날짜: ${date}`,
                url: postUrl
            };
        }).filter(p => p.url !== '');
    });

    console.log(`[Scraping Success] Processed ${posts.length} posts`);

    // 개별 저장
    for (const post of posts) {
        const { error } = await supabase
          .from('university_info')
          .insert([
            { 
              university_name: '가천대학교', 
              title: post.title, 
              content: post.content, 
              url: post.url 
            }
          ]);
        
        if (error) {
            console.error(`[DB Error for ${post.title}]`, error.toString(), JSON.stringify(error));
        } else {
            console.log(`[DB Success for ${post.title}]`);
        }
    }
    
    return NextResponse.json({ message: 'Success', count: posts.length });
  } catch (error: any) {
    console.error(`[Scraping Error]`, error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
