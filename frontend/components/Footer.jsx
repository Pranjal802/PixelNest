"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center mt-24 mb-6">
      <div
        className="
          w-[95%] max-w-7xl
          bg-slate-900/90 backdrop-blur
          text-slate-300
          rounded-3xl
          shadow-lg shadow-black/20
          px-8 py-10
        "
      >
        <div className="flex flex-col gap-10">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* Logo + Company */}
            <div className="flex items-center gap-4 group">
              <div
                className="
                  w-12 h-12
                  rounded-full
                  bg-indigo-500/20
                  flex items-center justify-center
                  group-hover:bg-indigo-500/30
                  transition-all duration-300
                "
              >
                {/* Replace with your SVG */}
                <span className="text-indigo-400 text-xl font-bold">◎</span>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  PixelNest
                </h2>
                <p className="text-sm text-slate-400">
                  Design, Video, Web - Under One Roof
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12 text-sm">
              <div className="flex flex-col gap-3">
                <h3 className="text-slate-100 font-medium">Company</h3>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Home    
                </Link>
                <Link
                  href="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/portfolio"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/services"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Services
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-slate-100 font-medium">Support</h3>
                <Link
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  FAQs
                </Link>
                <Link
                  href="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-400">
              © {new Date().getFullYear()} PixelNest. All rights reserved.
            </p>

            <p className="text-slate-500">
              Crafted with care for modern businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
