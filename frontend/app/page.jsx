import Link from "next/link";
import ServiceCard from "@/components/ServiceCard"; // adjust path if needed
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";
import service from "@/data/services";

export default function Home() {
  const homeServices = service.slice(0, 3);
  // const services = [
  //   {
  //     title: "Web Development",
  //     description:
  //       "Modern, scalable and high-performance websites built with latest technologies.",
  //     icon: "FaCode",
  //     link: "/services",
  //   },
  //   {
  //     title: "UI/UX Design",
  //     description:
  //       "Clean, user-focused and engaging designs that improve customer experience.",
  //     icon: "FaPaintBrush",
  //     link: "/services",
  //   },
  //   {
  //     title: "Video Editing",
  //     description:
  //       "Professional video production and editing for brands and businesses.",
  //     icon: "FaMobileAlt",
  //     link: "/services",
  //   },
  // ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 text-center">
        <h1 className="font-heading text-4xl font-bold text-blue-900">
          Design, Video, Web - Under One Roof
        </h1>
        <p className="font-sans mt-4 text-gray-600 text-2xl">
          Building Fast & Reliable Digital Solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="pt-20 px-6">
        <h2 className="text-4xl font-heading font-semibold text-center text-blue-900 mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {homeServices.map((service, index) => (
            <Link key={index} href={service.link}>
              <ServiceCard
                title={service.title}
                description={service.short_description}
                Icon={service.icon}
              />
            </Link>
          ))}
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