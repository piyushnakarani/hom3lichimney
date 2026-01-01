"use client";
import AOS from "aos";

import "aos/dist/aos.css";

import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import AboutSection from "../Aboutus/About";
import ServiceSection from "../Service/Service";
import WhyChooseUs from "../Chooseus/Chooseus";
import HowItWorks from "../Works/Work";
import ContactUs from "../Contactus/Contact";
import DownloadAppSection from "../Download/Download";

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
    <div>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUs />
      <HowItWorks />
      <ContactUs />
      <DownloadAppSection />
    </div>
  );
};

export default Home;
