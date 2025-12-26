"use client";

import Image from "next/image";
import Container from "@/Custom/Container";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail, MdCall } from "react-icons/md";

export default function ContactUs() {
  return (
    <section className="relative w-[95%] mx-auto rounded-3xl overflow-hidden bg-contact bg-cover">
      {/* Blue overlay (BACKGROUND ONLY) */}
      <div className="absolute inset-0 bg-[#071824]/90"></div>

      {/* CONTENT */}
      <Container className="relative z-10 py-5 lg:py-10 !w-[85%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <form className="space-y-5 p-6 md:p-8">
              {/* Full name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-white uppercase">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/60 
        outline-none border border-white/10 focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-white uppercase">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/60 
        outline-none border border-white/10 focus:border-primary transition"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-white uppercase">
                  Phone Number*
                </label>

                <div
                  className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3
    border border-white/10 focus-within:border-primary transition"
                >
                  {/* USA Flag */}
                  <span className="text-xl">🇺🇸</span>

                  {/* Country code */}
                  <span className="text-white/80 text-sm font-medium">+1</span>

                  {/* Input */}
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full bg-transparent text-white placeholder-white/60 
      outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-white uppercase">
                  Your Subject*
                </label>
                <select
                  className="w-full rounded-full bg-white/10 px-5 py-3 text-white 
      outline-none border border-white/10 focus:border-primary transition"
                >
                  <option className="text-black">Select</option>
                  <option className="text-black">General Inquiry</option>
                  <option className="text-black">Get a Quote</option>
                  <option className="text-black">Schedule Service</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-white uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter some comments / notes"
                  className="w-full rounded-2xl bg-white/10 px-5 py-4 text-white placeholder-white/60 
      outline-none border border-white/10 focus:border-primary transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 
    font-semibold text-black hover:bg-yellow-400 transition"
              >
                Submit →
              </button>
            </form>
          </div>

          {/* Accordion */}
          <div className="py-4">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl my-6 uppercase font-extralight text-white leading-[2rem] md:leading-[2.5rem]">
                Ready to{" "}
                <span className="text-primary font-bold">
                  get in touch with Hom3li <br />
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base md:text-sm lg:text-lg">
                Have a question, need a quote, or want to schedule service? Our
                team is here to help! Whether it’s a quick fix, a full system
                upgrade, or routine maintenance, we’re just a call or click
                away.
              </p>
            </div>
            <div className="space-y-6 mt-4">
              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <HiLocationMarker className="text-2xl text-black" />
                </div>
                <p className="text-lg text-white font-medium">
                  Toms River, New Jersey 08757
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <MdEmail className="text-2xl text-black" />
                </div>
                <p className="text-lg text-white font-medium">
                  safehomes26@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <MdCall className="text-2xl text-black" />
                </div>
                <p className="text-lg text-white font-medium">+1 8887435883</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
