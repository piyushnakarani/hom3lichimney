import Image from "next/image";
import Container from "@/Custom/Container";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceAbout() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT — Images */}
          <div className="relative w-full flex justify-center lg:justify-start">
            
            {/* Main image */}
            <div className="relative z-10 rounded-[32px] overflow-hidden w-[320px] sm:w-[380px] lg:w-[420px]">
              <Image
                src="/chimney/chimney-cap-1.jpg"
                alt="Chimney cap"
                width={500}
                height={650}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay image */}
            <div className="absolute -bottom-16 right-0 lg:right-12 rounded-[28px] overflow-hidden w-[220px] sm:w-[260px] shadow-xl">
              <Image
                src="/chimney/chimney-cap-2.jpg"
                alt="Chimney vent"
                width={350}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 uppercase  font-extralight text-black leading-[2.5rem] md:leading-[3.5rem]">
          The #1 Way to Stop Animals, Rain, and {" "}
            <span className="text-secondary font-bold uppercase">
             Debris from Destroying Your Chimney
            </span>
          </h1>

          <div className="text-black">
            <p className="text-base  mb-3 md:text-sm lg:text-lg">
            An open flue is an open invitation: squirrels, birds, raccoons, leaves, and gallons of rainwater pour straight in. That means ruined dampers, rusted liners, cracked crowns, and thousands in repairs.
            </p>
            <p className="text-base md:text-sm lg:text-lg">
            A properly fitted chimney cap ends all of that—permanently.
            </p>
          </div>

            {/* CTA */}
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition">
                              Contact Us
                              <MdArrowOutward height={10} width={10}/>
                            </button>
          </div>

        </div>
      </Container>
    </section>
  );
}
