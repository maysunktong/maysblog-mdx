import Link from "next/link";

const PageNav = ({ links }: PageNavProps) => {
  return (
    <nav aria-label="Page Navigation">
      <ul className="space-y-2">
        {links.map((link) => (
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

export default PageNav;
