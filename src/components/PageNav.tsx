import Link from "next/link";

  type PageNavProps = {
    links: PageNavItem[];
  };

const PageNav = ({ links }:PageNavProps) => {

  return (
    <nav>
      {links.map((link) => (
        <Link key={link.slug} href={`/code/${link.slug}`} className="capitalize text-blue-600 hover:underline">
          {link.slug}
        </Link>
      ))}
    </nav>
  );
};

export default PageNav;
