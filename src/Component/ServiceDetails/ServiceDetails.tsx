import Container from "@/Custom/Container";
import { HiCheck } from "react-icons/hi";

export default function ServiceDetails({ service }: any) {
  const { details } = service;
  return (
    <section className="py-5 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT CARD */}
          <div className="rounded-[28px] border-2 border-[#FFD83D] bg-white p-8 lg:p-10 shadow-xl" data-aos="zoom-in">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#9C7A12] leading-snug">
              {details.leftCard.title}
            </h3>

            <ul className="mt-8 space-y-5">
              {details.leftCard.points.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-4 text-gray-700 leading-relaxed"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9C7A12] text-white">
                    <HiCheck className="w-4 h-4" />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[28px] border-2 border-[#FFD83D] bg-white p-8 lg:p-10 shadow-xl" data-aos="zoom-in">
            <h3 className="text-2xl font-semibold text-gray-900">
            {details.rightCard.title}
            </h3>

            <ul className="mt-8 space-y-5">
              {details.rightCard.points.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-2 lg:gap-4 text-gray-700 leading-relaxed justify-start"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9C7A12] text-white">
                    <HiCheck className="h-4 w-4" />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
