"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [role, setRole] = useState("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      role,
      email,
      password,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
    >
      <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
        {role === "client" ? "Client Login" : "Admin Login"}
      </h2>

      {/* Role Toggle */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-8">
        <button
          type="button"
          onClick={() => setRole("client")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "client"
              ? "bg-blue-900 text-white"
              : "text-gray-600"
          }`}
        >
          Client
        </button>

        <button
          type="button"
          onClick={() => setRole("admin")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "admin"
              ? "bg-blue-900 text-white"
              : "text-gray-600"
          }`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-8">
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
            Email Address
          </label>
        </div>

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />

          <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
            Password
          </label>

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500 hover:text-blue-900 transition"
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="py-3 rounded-full font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:shadow-lg"
        >
          Login →
        </motion.button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Not registered?{" "}
          <Link
            href={"/register"}
            className="text-blue-900 font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </motion.div>
  );
}