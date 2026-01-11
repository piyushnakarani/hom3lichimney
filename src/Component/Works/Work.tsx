import Container from "@/Custom/Container";
import HeroTitle from "@/Custom/HeroTitle";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const steps = [
  "Download the App",
  "Choose Your Service",
  "Pick a Schedule",
  "Relax While We Work",
  "Pay Securely on the App",
];

export default function HowItWorks() {
  return (
    <section className="py-10 lg:pb-20 relative" id="howwork">
      <Container className="relative z-10">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-6 lg:mb-12">
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center">
              <p className="text-sm md:text-lg font-bold tracking-[0.25em] text-secondary uppercase">
                Process
              </p>
              <span className="h-[2px] w-12 bg-secondary" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl lg:text-4xl my-4 md:my-6 uppercase  font-extralight text-black leading-[1rem] md:leading-[2rem]">
                How{" "}
                <span className="text-primary font-bold uppercase text-secondary">
                  does it works?
                </span>
              </h1>
            </div>
          </div>

          <div className="hidden lg:block lg:text-right">
            <Link
              href="/#download" // or external app page
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FED824] px-8 py-4 text-sm font-semibold text-black transition hover:bg-black hover:text-white hover:scale-[1.03]"
            >
              DOWNLOAD APP
              <MdArrowOutward className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-10 items-center">
          {/* LEFT - STEPS */}
          <div className="space-y-4 col-span-2" data-aos="fade-up-right">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex items-center justify-between rounded-xl px-5 py-6 pl-12 shadow-primary transition
        ${i === 0 ? "bg-[#1F586E] text-white hover:bg-[#233840]" : "bg-white text-gray-500 hover:bg-gray-300 hover:text-gray-700"}
      `}
              >
                {/* Number circle (half outside) */}
                <span
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
        flex h-10 w-10 items-center justify-center rounded-full bg-primary
        text-black font-bold shadow-md border-3 border-white"
                >
                  {i + 1}
                </span>

                {/* Text */}
                <p className="font-bold uppercase text-xl">{step}</p>

                {/* Arrow */}
                {/* <span
                  className={`font-semibold ${
                    i === 0 ? "text-2xl text-primary" : "text-xl text-gray-400"
                  }`}
                >
                  →
                </span> */}
              </div>
            ))}
          </div>

          {/* RIGHT - IMAGE */}
          <div className="relative rounded-3xl overflow-hidden col-span-4" data-aos="fade-left">
            <Image
              src="/Work/WorkRight.png" // replace with your image
              alt="How it works"
              width={850}
              height={500}
              className=" object-cover"
            />
          </div>
        </div>
      </Container>
      <HeroTitle
        title="How it works"
        className="
    absolute
    top-0
    lg:top-auto
    lg:-bottom-45
     2xl:-bottom-55
    left-1/2
    -translate-x-1/2
    w-full
    z-0
    pointer-events-none
  "
        TextclassName="
    text-center
    text-[60px]
    md:text-[150px]
    lg:text-[150px]
    2xl:text-[200px]
    lg:leading-[60vh]
    !bg-gradient-to-t
  "
      />
    </section>
  );
}
