"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Button className="bg-[#A28E66] hover:bg-[#746B5F] p-2 rounded-md">
          <CiMenuFries className="text-[36px] text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col bg-[#F5F0E8] p-6 shadow-lg"
      >
        <div className="mb-8 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-[#746B5F]">
              Qwik <span className="text-[#A28E66]">Interior</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`capitalize font-bold text-[#746B5F] transition-all text-lg ${
                link.href === pathname
                  ? "border-b-2 border-[#A28E66] pb-1"
                  : "hover:text-[#A28E66]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
