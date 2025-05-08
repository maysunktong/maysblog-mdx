interface Props {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  try {
    const { default: Post } = await import(`@/content/stay/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    console.warn(`MDX file not found for slug: ${slug}`);
    return null;
  }
}
