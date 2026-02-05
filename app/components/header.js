'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Search } from 'lucide-react';

const navLinks = [
  { href: "/collection", label: "Collections" },
  { href: "/essence", label: "Essences" },
  { href: "/", label: "ATTAR", isCenter: true },
  { href: "/heritage", label: "Heritage" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();

  // To match "/" to home and highlight ATTAR when home
  // For "/essence", "/heritage", "/collection", "/contact" we highlight respective links
  const isActive = (href) => {
    // Center ATTAR is only "active" on "/"
    if (href === "/") return pathname === "/";
    // All others: exact match to href
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e6e6e6]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Expanded header height */}
        <div className="flex h-28 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./logo.png"
              alt="Logo"
              className="h-20 w-20 object-contain"
            />
          </div>

          {/* Navigation Items - Centered */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center space-x-10">
              {navLinks.map((navItem, idx) => {
                const isCenter = !!navItem.isCenter;
                return (
                  <li
                    key={navItem.href}
                    className={`relative${isCenter ? " " : ""}`}
                  >
                    {/* Show decorative line above ALL active nav items */}
                    {isActive(navItem.href) && (
                      <div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-transparent via-black to-transparent rounded"
                      />
                    )}

                    <Link
                      href={navItem.href}
                      className={
                        isCenter
                          ? "text-black hover:text-black/70 transition-colors duration-300 font-serif text-lg tracking-widest font-bold"
                          : "text-black/90 hover:text-black transition-colors duration-300 font-bold tracking-wide text-sm uppercase"
                      }
                    >
                      <span className="font-bold">
                        {navItem.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <button className="text-black/90 hover:text-black transition-colors duration-300 cursor-pointer">
              {/* Replace old search icon with Lucide's Search */}
              <Search className="w-6 h-6" />
            </button>
            <button className="text-black/90 hover:text-black transition-colors duration-300 cursor-pointer">
              {/* Replace old user icon with Lucide's CircleUserRound */}
              <CircleUserRound className="w-6 h-6" />
            </button>
            <button className="relative text-black/90 hover:text-black transition-colors duration-300 cursor-pointer">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-black text-xs flex items-center justify-center text-white border border-black/50 font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;