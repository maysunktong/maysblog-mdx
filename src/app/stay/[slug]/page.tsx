import { staySlugs } from "../../../lib/slugs"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/stay/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return  staySlugs;
}

export const dynamicParams = false
