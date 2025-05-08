export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { default: Post } = await import(`@/content/cafe/${slug}.mdx`);

  return <Post />;
}
