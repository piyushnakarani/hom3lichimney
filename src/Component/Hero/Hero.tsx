import { PlayStoreIcon } from "@/Custom/Custom";
import HeroTitle from "@/Custom/HeroTitle";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh] sm:h-screen bg-hero bg-cover bg-center justify-center flex flex-col overflow-hidden">
      {/* <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(11,18,23,0)_0%,rgba(11,18,23,0.5)_65%)]" /> */}
      <div className=" w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        <div data-aos="fade-up">
          <div className="flex items-center gap-4">
            {/* Left line */}
            <span className="h-[2px] w-12 bg-primary"></span>

            {/* Text */}
            <p className="text-sm md:text-lg font-bold tracking-[0.2em] text-primary uppercase">
              Safety First
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl my-6 uppercase  font-extralight text-white leading-[2.5rem] md:leading-[3.5rem]">
            <span className="text-primary font-bold uppercase">
              Efficient Chimney Installation{" "}
            </span>
            for Better Performance
          </h1>
          <div>
            <p className="text-base text-white md:text-sm lg:text-lg">
              Our chimney installation services are designed to ensure safe
              operation, efficient airflow, and long-lasting performance. We use
              high-quality materials and proven installation methods to meet
              safety standards and improve energy efficiency.
            </p>
          </div>
          {/* Button */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="items-center justify-center flex gap-2">
              {/* Google Play */}
              <Link
                href="https://play.google.com/store/apps/details?id=absolute.com.homeservice.oren&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2 shadow-md transition hover:scale-[1.02]"
              >
                <PlayStoreIcon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                <div className="leading-tight">
                  <p className="text-xs uppercase text-gray-600">Get it on</p>
                  <p className="text-sm md:text-lg font-semibold text-black">
                    Google Play
                  </p>
                </div>
              </Link>

              {/* App Store */}
              <Link
                href="https://apps.apple.com/in/app/hom3li/id6748115471"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-5 py-2 shadow-md transition hover:scale-[1.02]"
              >
                <FaApple className="h-8 w-8 text-black" />

                <div className="leading-tight">
                  <p className="text-xs text-gray-600">Download on the</p>
                  <p className="text-sm lg:text-lg font-semibold text-black">
                    App Store
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom shape image */}
      <div className="absolute bottom-0 right-0 z-10 w-full pointer-events-none">
        <Image
          src="/Hero/bottom.png"
          alt="Hero bottom shape"
          width={1200}
          height={100}
          className="ml-auto w-1/2 h-auto"
          priority
        />
      </div>
      <HeroTitle
        title="HOM3LI"
        className="absolute -bottom-10 left-4 lg:-bottom-70 2xl:-bottom-40 w-full lg:left-10 z-[0] pointer-events-none"
        TextclassName="text-[110px] md:text-[150px] lg:text-[250px] lg:leading-[60vh]"
      />
    </div>
  );
};

export default Hero;
