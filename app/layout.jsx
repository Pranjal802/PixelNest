import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PixelNest",
  description: "It company which provides best services for Web Development, Video Editing and Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-50 to-slate-200">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
