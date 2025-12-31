import Container from "@/Custom/Container";
import HeroTitle from "@/Custom/HeroTitle";
import Image from "next/image";

const ServiceHero = ({ service }: any) => {
  const { hero } = service;
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] bg-cover bg-center justify-center flex flex-col overflow-hidden"
    style={{ backgroundImage: `url('${service?.hero?.bgImage || "/ServiceDetails/ChimneyCapInstall/ChimneyCap.png"}')` }}>
      <Container className="items-center grid grid-cols-1 xl:grid-cols- gap-10 relative z-10">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4">
            {/* Left line */}
            <span className="h-[2px] w-12 bg-primary"></span>

            {/* Text */}
            <p className="text-sm md:text-lg font-bold tracking-[0.2em] text-primary uppercase">
            Service Details
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl my-6 uppercase  font-extralight text-white leading-[2.5rem] md:leading-[3.5rem]">
            <span className="text-primary font-bold uppercase">
            {hero.headingPrimary}{" "}
            </span>
            {hero.headingSecondary}
          </h1>
          <div>
            <p className="text-base text-white md:text-sm lg:w-[50%] lg:text-lg">
            {hero.shortDesc}
            </p>
          </div>
        </div>
      </Container>
      {/* Bottom shape image */}
      <div className="absolute bottom-0 right-0 w-full pointer-events-none z-11">
        <Image
          src="/Hero/bottom.png"
          alt="Hero bottom shape"
          width={1200}
          height={100}
          className="ml-auto w-1/2 h-auto"
          priority
        />      
      </div>
      <div className="absolute bottom-0 right-0 w-full pointer-events-none z-9">
        <Image
          src="/Hero/Yellowborder.png"
          alt="Hero bottom shape"
          width={1200}
          height={100}
          className="ml-auto w-full h-auto"
          priority
        />
      </div>
       <HeroTitle
          title={hero.bigText}
          className="absolute -bottom-5 lg:-bottom-45 left-1/2 -translate-x-1/2 w-full z-0 pointer-events-none"
          TextclassName="text-center text-[60px] md:text-[110px] lg:text-[150px] lg:leading-[40vh] !from-gray-200/20"
        />
    </div>
  );
};

export default ServiceHero;
