import BackButton from "@/components/Buttons/BackButton";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-amber-700 grow">
      <BackButton />
      <div>{children}</div>
    </div>
  );
}
