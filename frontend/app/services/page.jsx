import React from "react";
import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export const metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <section className="text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <div className="text-center mb-14">
          <h1 className="text-blue-900 text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-900">Services</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We provide high-quality digital solutions to help your business grow,
            scale, and succeed in the modern digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.long_description}
              Icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}