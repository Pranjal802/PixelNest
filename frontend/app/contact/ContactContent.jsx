"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";  
import axios from "axios";

// const react_app_backend_port = process.env.NEXT_PUBLIC_BACKEND_PORT;

export default function ContactContent() {
  // console.log(process.env.NEXT_PUBLIC_BACKEND_PORT)
  const base_url = process.env.NEXT_PUBLIC_BASE_URL
  console.log(base_url) 

  const [formData, setFormData] = useState({
    f_name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    console.log(e.target.value);
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function clearFormData(){
    setFormData("");


  }
  async function handleSubmit(e) {   
    e.preventDefault();
    console.log(formData);
    // console.log(process.env.NEXT_PUBLIC_BACKEND_PORT)
    try {
      const res = await axios.post(base_url+"/contact",formData);
      alert(res.data);
      
    } catch (error) {
      console.log(error);
    }
    console.log("Data sent to the backend");
  }
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">

      {/* Hero Section */}
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl font-bold text-blue-900"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-sans mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Let’s build something great together. Reach out and we’ll respond as soon as possible.
        </motion.p>
      </section>

      {/* Contact Info Cards */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Mail,
            title: "Email Us",
            value: "info@pixelnest.com",
          },
          {
            icon: Phone,
            title: "Call Us",
            value: "+1 234 567 890",
          },
          {
            icon: MapPin,
            title: "Visit Us",
            value: "New York, USA",
          },
        ].map((item, index) => {
          const Icon = item.icon;

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

              <h3 className="text-lg font-heading font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Contact Form */}
      <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 mb-20">
        <h2 className="text-2xl font-heading font-semibold text-blue-900 mb-8 text-center">
          Send Us a Message
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
            name="f_name"
            onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
            <input
            name="email"
            onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <input
          name="subject"
          onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          />

          <textarea
          name="message"
          onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Send Message →
          </button>
        </form>
      </section>

      {/* Map Section */}
      <section className="mb-20 text-center">
        <h2 className="text-2xl font-heading font-semibold text-blue-900 mb-6">
          Our Location
        </h2>

        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
          Google Map Integration Here
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-blue-900 text-white py-14 rounded-2xl">
        <h2 className="text-3xl font-heading font-semibold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="mb-6 text-gray-200">
          Let’s create something innovative and impactful.
        </p>
        <a
          href="mailto:info@pixelnest.com"
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Email Us →
        </a>
      </section>

    </div>
  );
}
