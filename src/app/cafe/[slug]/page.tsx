import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const { default: Post } = await import(`@/content/cafe/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    console.warn(`MDX file not found for slug: ${slug}`);
    return notFound();
  }
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content/cafe");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}
