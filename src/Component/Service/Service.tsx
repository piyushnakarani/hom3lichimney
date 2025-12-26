import Container from "@/Custom/Container";
import ServiceCard from "./ServiceCard";
import { services } from "@/Constant/constant";
import HeroTitle from "@/Custom/HeroTitle";
import { MdArrowOutward } from "react-icons/md";

export default function ServiceSection() {
  return (
    <section className="py-20 bg-service relative">
      <Container>
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
        <div className=" flex justify-center text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl my-6 uppercase  font-extralight text-black leading-[2.5rem] md:leading-[3.5rem]">
            Trusted services for{" "}
            <span className="text-secondary font-bold uppercase">
              homes <br />& businesses
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-black transition uppercase">
            Load more services
            <MdArrowOutward height={10} width={10} />
          </button>
        </div>
      </Container>
    </section>
  );
}
