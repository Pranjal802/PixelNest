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
      <div className="text-center p-10">
        <h1 className="font-heading text-3xl font-bold text-blue-900">Portfolio</h1>
        <p className="font-sans mt-3 text-gray-600">
          Some of our successful projects.
        </p>
      </div>
    );
  }
  