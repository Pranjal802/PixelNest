"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePageInView } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full flex justify-center mt-6 relative z-50">
      <nav
        className="
          w-[95%] max-w-7xl
          bg-slate-900/90 backdrop-blur
          text-slate-100
          rounded-full
          shadow-lg shadow-black/20
          px-6 py-4
        "
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500/20 group-hover:bg-indigo-500/30 transition">
              <span className="text-indigo-400 font-bold text-lg">◎</span>
            </div>
            <span className="text-xl font-semibold tracking-wide group-hover:text-indigo-400 transition">
              PixelNest
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`
                    relative transition
                    hover:text-indigo-400
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px]
                    after:bg-indigo-400
                              after:transition-all
                  ${
                    isActive
                      ? "text-indigo-400 after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-indigo-400"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          absolute top-24
          w-[90%] max-w-md
          bg-slate-900/95 backdrop-blur
          rounded-2xl
          shadow-xl
          p-6
          md:hidden
        "
        >
          <div className="flex flex-col gap-5 text-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setOpen(false)}
                className="
                  text-white
                  hover:text-indigo-400
                  transition
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
