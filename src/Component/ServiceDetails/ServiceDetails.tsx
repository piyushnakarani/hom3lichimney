import Container from "@/Custom/Container";
import { HiCheck } from "react-icons/hi";

export default function ServiceDetails() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT CARD */}
          <div className="rounded-[28px] border-2 border-[#FFD83D] bg-white p-8 lg:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#9C7A12] leading-snug">
              Hom3li installs only heavy-duty, American-made stainless steel
              or <span className="font-normal text-gray-900"> copper caps </span>
              built to last a lifetime:
            </h3>

            <ul className="mt-8 space-y-5">
              {[
                "Custom-measured and fabricated for your exact flue size and shape (single-flue, multi-flue, oval, or round)",
                "Animal-proof ¾\" mesh that still allows perfect drafting",
                "Lifetime warranty caps available",
                "Includes professional mounting with stainless screws and sealant—no cheap clamps that loosen in the wind",
                "Same-day or next-day installation in most cases",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-700 leading-relaxed">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#9C7A12] text-white">
                    <HiCheck className="h-4 w-4" />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[28px] border-2 border-[#FFD83D] bg-white p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-900">
              What We Served?
            </h3>

            <ul className="mt-8 space-y-5">
              {[
                "We serve Lakewood, Brick, Toms River, Howell, Jackson, Manalapan, and all of Ocean & Monmouth Counties.",
                "CSIA-Certified Installers",
                "Fully Licensed & Insured",
                "10-Year Installation Warranty",
                "One small investment today prevents thousands in damage tomorrow.",
                "Call Hom3li or book online — open 7 days.",
                "Keep wildlife out, keep water out, keep your chimney safe.",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-700 leading-relaxed">
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
