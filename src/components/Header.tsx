import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full">
      {/* Background color refined to match footer */}
      <div className="bg-[#F4EFE6] w-full">
        <header className="container py-5 relative z-10 flex items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#A28E66]">
              Qwik <span className="text-[#3c3422]">Interior</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex gap-6 z-10">
            <Nav />
          </nav>

          {/* Mobile Navigation */}
          <div className="block xl:hidden z-10">
            <MobileNav />
          </div>

          {/* Contact Button */}
          <div className="z-10 xl:flex hidden">
            <MobileNav />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
