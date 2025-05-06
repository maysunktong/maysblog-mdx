import type { Metadata } from "next";
import { Open_Sans, Lato } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "400"
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lato.variable} antialiased font-lato`}
      >
        {children}
      </body>
    </html>
  );
}
