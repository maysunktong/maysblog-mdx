import { cafeSlugs } from "@/lib/slugs";
import Articles from "@/components/Articles/Articles";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-700 grow">
      <Articles page="cafe" slugs={cafeSlugs} />
      <div>{children}</div>
    </div>
  );
}
