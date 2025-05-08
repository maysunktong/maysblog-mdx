import Link from "next/link";

type ArticleProps = {
  slugs: SlugType[]
}

const Articles = ({ slugs }: ArticleProps) => {

  return (
    <nav aria-label="Page Navigation">
      <ul className="space-y-2">
        {slugs.map((link) => (
          <li key={link.slug}>
            <Link
              href={`/code/${link.slug}`}
              className="capitalize text-blue-600 hover:underline"
              aria-label={`Navigate to ${link.slug} page`}
            >
              {link.slug}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Articles;
