import fs from 'fs';
import path from 'path';

export async function generateStaticParams(props:string) {
  const contentDir = path.join(process.cwd(), 'src/content/${props}');
  const files = fs.readdirSync(contentDir);

  const slugs = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({
      slug: file.replace(/\.mdx$/, '')
    }));
console.log(generateStaticParams("code"))
  return slugs;
}
