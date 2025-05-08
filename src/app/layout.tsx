import type { Metadata } from "next";
import { Open_Sans, Lato } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar";

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
    <html lang="en" className="h-screen">
      <body
        className={`${openSans.variable} ${lato.variable} antialiased font-lato flex flex-col grow h-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
