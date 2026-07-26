import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { PostCard } from "@/components/post-card";

export const revalidate = 3600;

async function getUniversity(slug: string) {
  const { data, error } = await supabase
    .from("universities")
    .select("id, name, region, address, description, logo_url, site_url")
    .eq("slug", slug)
    .single();

  if (error) return null;
  return data;
}

async function getPosts(universityId: string) {
  const { data, error } = await supabase
    .from("university_posts")
    .select("id, title, url, published_at")
    .eq("university_id", universityId)
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data;
}

export default async function UniversityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = await getUniversity(slug);

  if (!university) {
    notFound();
  }

  const posts = await getPosts(university.id);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* 학교소개 */}
      <section className="rounded-lg border border-border bg-surface p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
            <Image
              src={university.logo_url}
              alt={`${university.name} 로고`}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-h2 font-bold text-text-primary">
              {university.name}
            </h1>
            <p className="mt-1 text-sm text-text-secondary">
              {university.region}
            </p>
          </div>
        </div>

        {university.description && (
          <p className="mt-4 text-body-lg text-text-primary">
            {university.description}
          </p>
        )}

        <div className="mt-4 flex flex-col gap-1 text-sm text-text-secondary">
          {university.address && <p>주소: {university.address}</p>}
          <a
            href={university.site_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            학교 홈페이지 바로가기
          </a>
        </div>
      </section>

      {/* 게시물 리스트 */}
      <section className="mt-8">
        <h2 className="text-h3 font-semibold text-text-primary">공지사항</h2>

        {posts.length === 0 ? (
          <div className="mt-4 rounded-lg border border-border bg-surface p-8 text-center text-text-secondary">
            아직 등록된 게시물이 없습니다.
          </div>
        ) : (
          <ul className="mt-4 flex flex-col gap-3">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard
                  title={post.title}
                  url={post.url}
                  publishedAt={post.published_at}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}