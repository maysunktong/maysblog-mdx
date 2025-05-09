import { eatSlugs } from "../../../lib/slugs"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/eat/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return eatSlugs;
}

export const dynamicParams = false
