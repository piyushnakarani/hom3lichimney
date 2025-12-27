import HeroTitle from "@/Custom/HeroTitle";
import Image from "next/image";
import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const ServiceHero = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center justify-center flex flex-col"
    style={{ backgroundImage: "url('/ServiceDetails/ChimneyCap.png')" }}>
      <div className=" w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols- gap-10 ">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4">
            {/* Left line */}
            <span className="h-[2px] w-12 bg-primary"></span>

            {/* Text */}
            <p className="text-sm md:text-lg font-bold tracking-[0.2em] text-primary uppercase">
            Service Details
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl my-6 uppercase  font-extralight text-white leading-[2.5rem] md:leading-[3.5rem]">
            <span className="text-primary font-bold uppercase">
            Chimney Cap{" "}
            </span>
            Installation
          </h1>
          <div>
            <p className="text-base md:text-sm lg:w-[50%] lg:text-lg">
            The #1 Way to Stop Animals, Rain, and Debris from Destroying Your Chimney. An open flue is an open invitation: squirrels, birds, raccoons, leaves, and gallons of rainwater pour straight in.
            </p>
          </div>
        </div>
      </div>
      {/* Bottom shape image */}
      <div className="absolute bottom-0 right-0 w-full pointer-events-none">
        <Image
          src="/Hero/bottom.png"
          alt="Hero bottom shape"
          width={1200}
          height={100}
          className="ml-auto w-1/2 h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default ServiceHero;
