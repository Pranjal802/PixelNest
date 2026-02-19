import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "PixelNest",
  description: "It company which provides best services for Web Development, Video Editing and Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-slate-200">
        <Header />
        <ToastContainer
  position="top-right"
  autoClose={3000}
  closeOnClick
  pauseOnHover
  draggable
  hideProgressBar={false}
  newestOnTop
  className="toast-container"
  toastClassName="toast-card"
  bodyClassName="toast-body"
  progressClassName="toast-progress"
  closeButton={false}
/>

        {children}
        <Footer />
      </body>
    </html>
  );
}
