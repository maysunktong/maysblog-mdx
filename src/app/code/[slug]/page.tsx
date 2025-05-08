interface PageProps {
  params: { slug: string };
  searchParams?: Record<string, string | string[]>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  try {
    const { default: Post } = await import(`@/content/code/${slug}.mdx`);
    return <Post />;
  } catch (error) {
    console.warn(`MDX file not found for slug: ${slug}`);
    return null;
  }
}
