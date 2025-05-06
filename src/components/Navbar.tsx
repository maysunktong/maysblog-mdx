import Link from "next/link"

const navItems: NavItem[] = [
  { href: "/blog", label: "Blog" }
]

export default function Navbar() {
  return (
    <nav>
      <ul>
        {navItems.map((item) =>
        (<li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>)
        )}
      </ul>
    </nav>
  )
}
