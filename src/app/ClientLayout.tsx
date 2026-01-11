"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ResponsiveNav from "@/Component/Home/Navbar/ResponsiveNav";
import Footer from "@/Component/Home/Footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <ResponsiveNav />
      {children}
      <Footer />
    </>
  );
}
