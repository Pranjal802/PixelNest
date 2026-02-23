import React from "react";

// export default function Portfolio(){
//     return(
//         <h1>Portfolio</h1>
//     );
// }
export const metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <div className="text-center mb-20 mt-20">
      <h1 className="text-blue-900 text-4xl md:text-5xl font-bold mb-4">
        Our <span className="text-blue-900">Portfolio</span>
      </h1>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">
        Explore our latest projects and creative work. We build modern,
        scalable, and performance-driven digital solutions that deliver real
        results.
      </p>
    </div>
  );
}
