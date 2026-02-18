import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "PixelNest",
  description:
    "It company which provides best services for Web Development, Video Editing and Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-slate-200">
        <Header />
        <ToastContainer
          toastClassName={() =>
            "relative flex p-4 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer bg-slate-900 text-white shadow-xl"
          }
          bodyClassName={() => "text-sm font-semibold"}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
