export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    /* ES module dynamic import  */
    const module = await import(`@/content/stay/${slug}.mdx`);
    const MDXFile = module.default; /* or {default: Post} = module */
    return <MDXFile />;
  } catch (error) {
    console.warn(`MDX file not found for slug: ${slug}`);
    return null;
  }
}
