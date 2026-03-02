"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const [role, setRole] = useState("client");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [clientData, setClientData] = useState({
    clientEmail: "",
    clientPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await axios.post(
        `${base_url}/auth/client-login`,
        clientData,
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Login successful!");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;

        if (message.includes("verify")) {
          toast.warning("Please verify your email before logging in.");
        } else if (message.includes("Invalid")) {
          toast.error("Invalid email or password.");
        } else {
          toast.error(message);
        }
      } else {
        toast.error("Server error. Please try again later.");
      }
    }

    setLoading(false);
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

      <div className="flex bg-gray-100 rounded-full p-1 mb-8">
        <button
          type="button"
          onClick={() => setRole("client")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "client" ? "bg-blue-900 text-white" : "text-gray-600"
          }`}
        >
          Client
        </button>

        <button
          type="button"
          onClick={() => setRole("admin")}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "admin" ? "bg-blue-900 text-white" : "text-gray-600"
          }`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-8">
        <div className="relative">
          <input
            name="clientEmail"
            type="email"
            required
            value={clientData.clientEmail}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
            Email Address
          </label>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="clientPassword"
            required
            value={clientData.clientPassword}
            onChange={handleChange}
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
        <div className="flex justify-end -mt-4">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-900 hover:underline hover:text-blue-800 transition"
          >
            Forgot Password?
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="py-3 rounded-full font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:shadow-lg"
        >
          {loading ? "Logging in..." : "Login →"}
        </motion.button>

        <p className="text-center text-sm text-gray-600">
          Not registered?{" "}
          <Link
            href="/register"
            className="text-blue-900 font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
