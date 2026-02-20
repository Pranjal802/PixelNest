import React from "react";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";
// import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

// const iconMap = {
//   FaCode: FaCode,
//   FaMobileAlt: FaMobileAlt,
//   FaPaintBrush: FaPaintBrush,
// };

// export default function Services(){
//     return(
//         <h1>Services</h1>
//     );
// }
export const metadata = {
  title: "Services",
};
export default function Services() {
    return (
      <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-8
      ">
        {services.map((service) => {
          // const IconComponent = iconMap[service.icon];

          return (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          );
        })}
      </div>
    </div>
    );
  }
  