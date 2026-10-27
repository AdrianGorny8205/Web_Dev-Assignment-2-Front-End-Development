import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "New Gen High",
  description: "CPRG 306 Assignment",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-slate-100 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;