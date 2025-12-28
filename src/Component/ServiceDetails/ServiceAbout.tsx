import Image from "next/image";
import Container from "@/Custom/Container";
import { MdArrowOutward } from "react-icons/md";
import CornerShape from "@/Constant/constant";

export default function ServiceAbout({ service }: any) {
  const { about } = service;
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT — Images */}
          <div className="relative w-full flex justify-center lg:justify-start">
            {/* Main image */}
            <div className="relative  rounded-[32px] overflow-hidden w-113 h-125">
              <Image
                src={about.images.main}
                alt={about.titleHighlight}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden rounded-tr-[28px] z-20">
                <CornerShape className="h-full w-full" color="white" />
              </div>
            </div>

            {/* Overlay image */}
            <div className="absolute -bottom-20 border-6 border-white z-10 right-0 lg:right-12 w-[250px] h-[270px] rounded-[34px] overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={about.images.overlay}
                  alt={about.titleHighlight}
                  width={300}
                  height={1000}
                  className="object-cover"
                />

                {/* Bottom Right Corner Cut */}
                <div className="absolute bottom-3 right-0 h-20 w-20 overflow-hidden z-20">
                  <CornerShape
                    className="h-full w-full"
                    color="white"
                    IsBottom={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-6 uppercase  font-extralight text-black leading-[2.5rem] md:leading-[3.5rem]">
              {about.titlePrimary}{" "}
              <span className="text-secondary font-bold uppercase">
                {about.titleHighlight}
              </span>
            </h1>

            <div className="text-black">
              {about.paragraphs.map((text: string, i: number) => (
                <p key={i} className="text-base md:text-sm lg:text-lg">
                  {text}
                </p>
              ))}
            </div>

            {/* CTA */}
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition">
              Contact Us
              <MdArrowOutward height={10} width={10} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
