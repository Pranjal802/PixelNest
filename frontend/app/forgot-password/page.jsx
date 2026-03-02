"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  console.log("Base URL:", base_url);

  const [clientEmail, setClientEmail] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (loading) return;

//     setLoading(true);

//     try {
//         console.log("Submitting forgot password for email:", email);
//       const res = await axios.post(
//         `${base_url}/auth/forgot-password`,
//         { clientEmail },
//         { withCredentials: true }
//       );

//       console.log("Forgot password request successful for email:", email);
//       console.log("Response:", res.data);

//       toast.success(
//         "If this email exists, a reset link has been sent."
//       );

//       setTimeout(() => {
//         router.push("/login");
//       }, 2000);

//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }finally{
//         setLoading(false);
//     }

//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
  
    setLoading(true);
  
    try {
      const res = await axios.post(
        `${base_url}/auth/forgot-password`,
        { clientEmail },
        { withCredentials: true }
      );
  
      toast.success(res.data.message);
  
      setTimeout(() => {
        router.push("/login");
      }, 2000);
  
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-10"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          Forgot Password
        </h2>

        <p className="text-sm text-gray-600 text-center mb-8">
          Enter your registered email address and we’ll send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-8">
          <div className="relative">
            <input
              type="email"
              required
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 pt-6 pb-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition"
            />
            <label className="absolute left-4 top-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-900">
              Email Address
            </label>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`py-3 rounded-full font-semibold text-white transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-900 hover:bg-blue-800 hover:shadow-lg"
            }`}
          >
            {loading ? "Sending..." : "Send Reset Link →"}
          </motion.button>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-blue-900 font-medium hover:underline"
            >
              Back to Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}