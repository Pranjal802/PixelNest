"use client";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";

const iconMap = {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
};

function ServiceCard({ title, description, Icon}) {
  const IconComponent = iconMap[Icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="
    relative
    bg-white
    p-8
    rounded-2xl
    shadow-lg
    text-center
    transition-all
    duration-300
    hover:shadow-2xl
  "
    >
      {/* Hover Gradient Border */}
      <div
        className="
    absolute -inset-0.5    
    from-blue-800
    to-blue-600
    rounded-2xl
    blur
    opacity-0
    hover:opacity-60
    transition duration-500
  "
      ></div>

      <div className="relative">
        <div className="flex justify-center mb-6">
          {IconComponent && (
            <div
              className="
        w-16 h-16
        flex items-center justify-center
        rounded-full
        bg-blue-900
        text-white
        shadow-md
        transition-all duration-300
        hover:scale-110
      "
            >
              <IconComponent size={40} />
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-3 text-slate-900">{title}</h2>

        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
