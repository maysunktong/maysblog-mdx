import Articles from "../../components/Articles/Articles";
import { eatSlugs } from "../../lib/slugs";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-700 grow">
      <Articles page="eat" slugs={eatSlugs} />
      <div>{children}</div>
    </div>
  );
}
