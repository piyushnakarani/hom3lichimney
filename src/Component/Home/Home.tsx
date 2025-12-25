"use client";
import AOS from "aos";

import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../Aboutus/About";
import ServiceSection from "../Service/Service";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};

export default Home;
