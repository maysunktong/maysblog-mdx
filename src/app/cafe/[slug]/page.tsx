import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), 'src/content/cafe')
  const files = fs.readdirSync(contentDirectory)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/cafe/${slug}.mdx`)

  return <Post />
}


export const dynamicParams = false
