// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <section className="p-10 text-center">
//       <h1 className="font-heading text-4xl font-bold text-blue-900">
//         Design, Video, Web - Under One Roof
//       </h1>
//       <p className="font-sans mt-4 text-gray-600 text-2xl">
//       Building Fast & Reliable Digital Solutions.
//       </p>
//     </section>

    
//     </>
//   );
// }


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Palette, Video } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable and high-performance websites built with latest technologies.",
      icon: Code,
      link: "/services",
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, user-focused and engaging designs that improve customer experience.",
      icon: Palette,
      link: "/services",
    },
    {
      title: "Video Editing",
      description:
        "Professional video production and editing for brands and businesses.",
      icon: Video,
      link: "/services",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="p-10 text-center">
        <h1 className="font-heading text-4xl font-bold text-blue-900">
          Design, Video, Web - Under One Roof
        </h1>
        <p className="font-sans mt-4 text-gray-600 text-2xl">
          Building Fast & Reliable Digital Solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-heading font-semibold text-center text-blue-900 mb-16">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
  {services.map((service, index) => {
    const Icon = service.icon;

    return (
      <Link key={index} href={service.link} className="group">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {/* Hover Gradient Border */}
          <div className="absolute -inset-0.5 
            bg-gradient-to-r 
            from-blue-800 
            to-blue-600 
            rounded-2xl 
            blur 
            opacity-0 
            group-hover:opacity-60 
            transition duration-500">
          </div>

          {/* White Card */}
          <div className="relative 
            bg-white 
            rounded-2xl 
            p-8 
            shadow-lg 
            transition-all duration-300
            hover:shadow-2xl
          ">
            
            {/* Icon */}
            <div className="
  w-14 h-14 
  flex items-center justify-center 
  rounded-full 
  bg-blue-900
  text-white
  mb-6 
  shadow-md 
  transition-all duration-300
  group-hover:bg-blue-800
  group-hover:scale-110
">
              <Icon size={28} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4 transition duration-300">
              {service.title}
            </h3>

            <p className="text-slate-600">
              {service.description}
            </p>

          </div>
        </motion.div>
      </Link>
    );
  })}
</div>

        {/* View All Services Button */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="
              inline-block
              bg-blue-900
              text-white
              px-8 py-3
              rounded-full
              font-semibold
              shadow-md
              transition
              duration-300
              hover:bg-blue-800
              hover:shadow-lg
              hover:-translate-y-1
            "
          >
            View All Services →
          </Link>
        </div>
      </section>
    </>
  );
}
