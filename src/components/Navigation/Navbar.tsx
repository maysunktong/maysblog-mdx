'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/eat", label: "Eat" },
  { href: "/code", label: "Code" },
  { href: "/stay", label: "Stay" },
  { href: "/cafe", label: "Cafe" },
]

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map((item, index) =>
        <Link key={item.href} href={item.href} className={pathname === `${item.href}` ? "text-blue-600 font-semibold" : "text-gray-600"}>
          {item.label}
          {index < navItems.length - 1 && "•"}
        </Link>
      )}
    </nav>
  )
}
