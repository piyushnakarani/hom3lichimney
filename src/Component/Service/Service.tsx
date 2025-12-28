"use client";

import { useEffect, useState } from "react";
import Container from "@/Custom/Container";
import ServiceCard from "./ServiceCard";
import { services } from "@/Constant/constant";
import HeroTitle from "@/Custom/HeroTitle";
import { MdArrowOutward, MdArrowBack } from "react-icons/md";

export default function ServiceSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /* 🔹 Detect screen size */
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(6); // desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerView(4); // tablet
      } else {
        setItemsPerView(3); // mobile
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.ceil(services.length / itemsPerView);

  const visibleServices = services.slice(
    currentPage * itemsPerView,
    currentPage * itemsPerView + itemsPerView
  );

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1);
    }
  };

  return (
    <section className="py-20 bg-[#F9FAFD] relative" id="work">
      <Container className="relative z-10">
        {/* Small title */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-secondary" />
            <p className="text-sm md:text-lg font-bold tracking-[0.25em] text-secondary uppercase">
              What we offer
            </p>
            <span className="h-[2px] w-12 bg-secondary" />
          </div>
        </div>

        {/* Main heading */}
        <div className="flex justify-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 uppercase font-extralight text-black leading-[2.5rem] md:leading-[3.5rem]">
            Trusted services for{" "}
            <span className="text-secondary font-bold uppercase">
              homes <br />& businesses
            </span>
          </h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleServices.map((item, i) => (
            <ServiceCard key={currentPage + "-" + i} item={item} />
          ))}
        </div>

        {/* PAGINATION BUTTONS */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-4 text-sm font-semibold uppercase transition disabled:opacity-40"
          >
            <MdArrowBack size={14} />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black uppercase transition disabled:opacity-40"
          >
            View More
            <MdArrowOutward size={14} />
          </button>
        </div>
      </Container>

      {/* Background Title */}
      <HeroTitle
        title="What we offer"
        className="absolute -bottom-3 lg:-bottom-50 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none"
        TextclassName="text-center text-[60px] md:text-[150px] lg:text-[250px] lg:leading-[60vh] !bg-gradient-to-t"
      />
    </section>
  );
}
