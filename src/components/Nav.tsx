"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex text-black gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`capitalize font-bold transition-all text-[#A28E66] ${
            link.href === pathname
              ? "text-[#746B5F] border-b-2 border-[#3c3422]"
              : "hover:text-[#3c3422]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
