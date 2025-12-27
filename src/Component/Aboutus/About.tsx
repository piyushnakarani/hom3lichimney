import Container from "@/Custom/Container";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function AboutSection() {
  return (
    <section className="py-20" id="aboutus">
      <Container>
        <div className="grid grid-cols-1 items-center gap-4 xl:gap-16 xl:grid-cols-5">
          {/* LEFT IMAGE */}
          <div className="relative order-2 xl:order-1 col-span-2 justify-center">
            <div className="overflow-hidden">
              <Image
                src="/Hero/About1.png" // replace with your image
                alt="Chimney installation"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-3 order-1 xl:order-2">
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

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 items-center">
              {/* IMAGE — 2 columns */}
              <div className="hidden xl:flex order-1 xl:order-2 xl:col-span-2  justify-center">
                <div className="overflow-hidden rounded-[28px]">
                  <Image
                    src="/Hero/About2.png"
                    alt="Chimney"
                    width={320}
                    height={460}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT — 3 columns */}
              <div className="order-2 xl:order-1 xl:col-span-3">
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
                <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition">
                  DOWNLOAD APP
                  <MdArrowOutward height={10} width={10}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
