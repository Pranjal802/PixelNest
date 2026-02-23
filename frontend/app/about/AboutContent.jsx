"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";
import Link from "next/link";

export default function AboutContent() {
  const features = [
    {
      title: "Quality First",
      description:
        "We prioritize clean architecture, scalable systems and performance-driven solutions.",
      icon: ShieldCheck,
    },
    {
      title: "Fast Delivery",
      description:
        "Agile development process ensuring rapid yet reliable project completion.",
      icon: Zap,
    },
    {
      title: "Client Focused",
      description:
        "We build long-term partnerships through transparency and trust.",
      icon: Users,
    },
  ];

  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="flex justify-center gap-5">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-900 text-4xl md:text-5xl font-bold mb-4"
        >
          About 
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-900 text-4xl md:text-5xl font-bold mb-4"
        >
          PixelNest
        </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 max-w-2xl mx-auto text-lg"
        >
          We are passionate about building innovative digital experiences. Our
          mission is to deliver high-quality solutions that empower businesses
          and create meaningful impact.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans mt-6 text-slate-400 text-lg max-w-3xl mx-auto"
        >
          We are a passionate IT team delivering modern web solutions, creative
          design and digital innovation for businesses worldwide.
        </motion.p>
      </section>

      

      {/* Why Choose Us */}
      <section className="text-center mb-20">
       
        <div className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-900 text-4xl md:text-5xl font-bold mb-4"
          >
            Why choose us?
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-900 text-white mb-6">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-heading font-semibold text-blue-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-blue-900 text-white py-14 rounded-2xl">
        <h2 className="text-3xl font-heading font-semibold mb-6">
          Let’s Build Something Great Together
        </h2>

        <Link
          href="/contact"
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold transition hover:bg-gray-100"
        >
          Contact Us →
        </Link>
      </section>
    </div>
  );
}
