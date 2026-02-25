"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";

export default function RegisterForm() {
  const [role, setRole] = useState("client");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;

  const [clientData, setClientData] = useState({
    clientName: "",
    clientEmail: "",
    clientPassword: "",
  });
  const [adminData, setAdminData] = useState({
    adminName: "",
    adminEmail: "",
    adminPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setClientData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const clearClientData = () => {
    setClientData({
      clientName: "",
      clientEmail: "",
      clientPassword: "",
    });
    setConfirmPassword("");
    setAcceptedTerms(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (clientData.clientPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (role === "client" && !acceptedTerms) {
      toast.error("You must accept Terms & Conditions");
      return;
    }

    if (loading) return;
    setLoading(true);

    try {
      await axios.post(`${base_url}/auth/client-register`, clientData);

      toast.success("Registration successful!");
      clearClientData();
    } catch (error) {
      toast.error("Registration failed. Please try again.");
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
        {role === "client" ? "Client Register" : "Admin Register"}
      </h2>

      {/* Role Toggle */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-8">
        <button
          type="button"
          onClick={() => {
            setRole("client");
            setAcceptedTerms(false);
          }}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "client" ? "bg-blue-900 text-white" : "text-gray-600"
          }`}
        >
          Client
        </button>

        <button
          type="button"
          onClick={() => {
            setRole("admin");
            setAcceptedTerms(false);
          }}
          className={`flex-1 py-2 rounded-full text-sm font-medium transition ${
            role === "admin" ? "bg-blue-900 text-white" : "text-gray-600"
          }`}
        >
          Admin
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* Name */}
        <div className="relative">
          <input
            name="clientName"
            type="text"
            required
            value={clientData.clientName}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
            Full Name
          </label>
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="relative">
          <input
            name="clientPassword"
            type={showPassword ? "text" : "password"}
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

        {/* Confirm Password */}
        <div className="relative">
          <input
            name="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
          />
          <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
            Confirm Password
          </label>
        </div>

        {/* Terms */}
        {role === "client" && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className="mt-1 accent-blue-900"
            />
            <p>
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-blue-900 font-medium hover:underline"
              >
                Terms & Conditions
              </Link>
            </p>
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={loading}
          className="py-3 rounded-full font-semibold text-white bg-blue-900 hover:bg-blue-800 transition-all duration-300 hover:shadow-lg disabled:opacity-70"
        >
          {loading ? "Registration in progress..." : "Register →"}
        </motion.button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-900 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </form>
    </motion.div>
  );
}