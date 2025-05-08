import Articles from "../../components/Articles/Articles";
import { staySlugs } from "../../lib/slugs";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-700 grow">
      <Articles page="stay" slugs={staySlugs} />
      <div>{children}</div>
    </div>
  );
}
