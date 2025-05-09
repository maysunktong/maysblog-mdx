import { use } from 'react'
import { cafeSlugs } from "../../../lib/slugs"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug }: { slug: string[] } = use(params)
  const { default: Post } = await import(`@/content/cafe/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return cafeSlugs;
}

export const dynamicParams = false
