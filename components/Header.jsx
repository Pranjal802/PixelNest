// // import Link from "next/link";
// // import React from "react";

// // export default function Footer(){
// //     return (
// //        <>
// //         <Link href="/">
// //             Home
// //         </Link>       
// //         <Link href="/services">
// //             Services
// //         </Link>       
// //         <Link href="/portfolio">
// //             Portfolio
// //         </Link>       
// //         <Link href="/about">
// //             About Us
// //         </Link>       
// //         <Link href="/contact">
// //             Contact Us
// //         </Link>       
// //        </>
// //     );
// // }

// "use client";

// import Link from "next/link";

// export default function Header() {
//   return (
//     <nav className="w-full bg-blue-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
//         {/* Logo Section */}
//         <div className="text-2xl font-bold tracking-wide">
//           <Link
//             href="/"
//             className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
//           >
//             PixelNest
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex gap-8 text-sm font-medium">
//           {[
//             { name: "Home", path: "/" },
//             { name: "Services", path: "/services" },
//             { name: "Portfolio", path: "/portfolio" },
//             { name: "About Us", path: "/about" },
//             { name: "Contact Us", path: "/contact" },
//           ].map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               className="
//                 relative
//                 after:absolute after:left-0 after:-bottom-1
//                 after:h-[2px] after:w-0 after:bg-cyan-400
//                 after:transition-all after:duration-300
//                 hover:after:w-full
//                 hover:text-cyan-300
//                 transition-colors duration-300
//               "
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-center mt-6">
      <nav className="
        w-[95%] max-w-7xl
        bg-slate-900/90 backdrop-blur
        text-slate-100
        rounded-full
        shadow-lg shadow-black/20
        px-8 py-4
        transition-all duration-300
      ">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            {/* Logo Container (SVG goes here) */}
            <div className="
              w-10 h-10
              flex items-center justify-center
              rounded-full
              bg-indigo-500/20
              group-hover:bg-indigo-500/30
              transition-all duration-300
            ">
              {/* Replace this with your SVG */}
              <span className="text-indigo-400 font-bold text-lg">◎</span>
            </div>

            {/* Company Name */}
            <span className="
              text-xl font-semibold tracking-wide
              text-slate-100
              group-hover:text-indigo-400
              transition-colors duration-300
            ">
              PixelNest
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="
                  relative
                  px-1 py-1
                  text-white
                  text-lg
                  transition-all duration-300
                  hover:text-indigo-400
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0
                  after:bg-indigo-400
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
}
