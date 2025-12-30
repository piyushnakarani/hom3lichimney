import StoreButton from "@/Custom/Button";
import Container from "@/Custom/Container";
import CornerShape from "@/Custom/Custom";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="py-20" id="aboutus">
      <Container>
        <div className="grid grid-cols-1 items-center gap-4 lg:gap-16 lg:grid-cols-5">
          {/* LEFT IMAGE */}
          <div className="relative order-2 mt-10 lg:mb-0 lg::order-1 col-span-2 justify-center">
            <div className="relative mx-auto rounded-[32px] overflow-hidden w-80 h-90  md:w-125 md:h-140">
              <Image
                src="/Hero/About1.png"
                alt="about"
                fill
                className="object-cover"
              />
              <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden z-20">
                <CornerShape className="h-full w-full" color="white" />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-3 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              {/* Left line */}

              {/* Text */}
              <p className="text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-secondary uppercase">
                About Us
              </p>
              <span className="h-[2px] w-12 bg-[#A98C00]"></span>
            </div>

            <h1 className="text-xl md:text-2xl lg:text-4xl my-4 md:my-6 uppercase  font-extralight text-black leading-[2rem] md:leading-[3.5rem]">
              Expert installation for reliable{" "}
              <span className="text-primary font-bold uppercase text-secondary">
                chimney performance
              </span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              {/* IMAGE — 2 columns */}
              <div className="hidden lg:flex order-1 lg:order-2 lg:col-span-2  justify-center">
                <div className="relative rounded-[32px] overflow-hidden w-113 h-95">
                  <Image
                    src="/Hero/About2.png"
                    alt="about"
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-20 w-20 overflow-hidden z-20">
                    <CornerShape
                      className="h-full w-full"
                      color="white"
                      IsBottom
                    />
                  </div>
                </div>
              </div>

              {/* TEXT — 3 columns */}
              <div className="order-2 lg:order-1 lg:col-span-3">
                <div className="space-y-4 text-gray-600">
                  <p>
                    Hom3li is your local, family-focused team keeping homes warm
                    and safe.
                  </p>

                  <p>
                    We’re CSIA-certified, fully licensed, and insured, with
                    master technicians who handle everything: sweeps,
                    inspections, repairs, liners, caps, masonry, gas logs,
                    pellet stoves, and full installations.
                  </p>

                  <p>
                    We show up on time, work clean, explain everything honestly
                    (no upsell pressure), and stand behind our work with real
                    warranties.
                  </p>

                  <p>
                    Your safety and comfort come first — every job, every time.
                  </p>

                  <p className="font-medium text-gray-800">
                    Hom3li: Professional. Local. Reliable.
                  </p>

                  <p className="font-semibold text-gray-900">
                    Call us 7 days a week for worry-free fires.
                  </p>
                </div>

                {/* CTA */}
                {/* <StoreButton /> */}
                <Link
                  href="/#download" // or external app page
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
                >
                  DOWNLOAD APP
                  <MdArrowOutward className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
