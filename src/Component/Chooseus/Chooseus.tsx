"use client";

import Image from "next/image";
import Container from "@/Custom/Container";
import WhyChooseAccordion from "./WhychooseItem";
import HeroTitle from "@/Custom/HeroTitle";

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-[95%] mx-auto rounded-3xl overflow-hidden bg-choose bg-cover"
      id="whychoose"
    >
      {/* Blue overlay (BACKGROUND ONLY) */}
      <div className="absolute inset-0 bg-[#071824]/90"></div>

      {/* CONTENT */}
      <Container className="relative z-10 py-10 lg:py-20 !w-[85%]">
        {/* Heading */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-2">
            <p className="text-sm md:text-lg font-bold tracking-[0.25em] text-primary uppercase">
              Why Choose Us
            </p>
            <span className="h-[2px] w-12 bg-primary" />
          </div>

          <h2 className="text-xl md:text-2xl lg:text-4xl my-6 uppercase font-extralight text-white leading-[2.5rem] md:leading-[3.5rem]">
            <span className="text-primary font-bold">
              Modern Chimney Installation & Insulation <br />
            </span>
            Designed for Long-Lasting Performance
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(7,24,36,0.9)]">
            <Image
              src="/Chooseus/Chooseright.png"
              alt="Chimney Installation"
              width={500}
              height={700}
              className="w-full h-full object-cover"
            />

            {/* Optional image overlay (nice depth) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Accordion */}
          <div className="py-6">
            <WhyChooseAccordion />
          </div>
        </div>
      </Container>
      <HeroTitle
        title="Choose us"
        className="absolute right-0 -top-3 lg:-top-38 w-full z-[0] pointer-events-none flex justify-end"
        TextclassName="text-right text-[60px] md:text-[150px] lg:text-[250px] lg:leading-[60vh]"
      />
    </section>
  );
}
