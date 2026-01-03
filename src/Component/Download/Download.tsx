import Container from "@/Custom/Container";
import { PlayStoreIcon } from "@/Custom/Custom";
import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadAppSection() {
  return (
    <section className="relative h-[100vh] lg:h-auto w-full py-10 md:py-20" id="download">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12">
          {/* House pattern background */}
          <div className="absolute top-0 right-0 h-full w-[70%] bg-no-repeat bg-right bg-cover" />

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <p className="text-sm md:text-lg font-bold tracking-[0.2em] text-secondary uppercase">
                Safety First
              </p>
              <span className="h-[2px] w-12 bg-secondary"></span>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl my-6 uppercase font-extralight text-black leading-[2rem] md:leading-[2.5rem]">
                <span className="text-secondary font-bold">Download </span>
                Our App
              </h2>
            </div>

            <div>
              <p className="text-base md:text-sm lg:text-lg text-black">
                Our chimney installation services are designed to ensure safe
                operation, efficient airflow, and long-lasting performance. We
                use high-quality materials and proven installation methods to
                meet safety standards and improve energy efficiency.
              </p>
            </div>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="items-center justify-center flex gap-2">
                {/* Google Play */}
                <Link
                  href="https://play.google.com/store/apps/details?id=absolute.com.homeservice.oren&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-black px-5 py-2 shadow-md transition hover:scale-[1.02]"
                >
                  <PlayStoreIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  <div className="leading-tight">
                    <p className="text-xs text-white">Get it on</p>
                    <p className="text-sm md:text-lg font-semibold text-white">
                      Google Play
                    </p>
                  </div>
                </Link>

                {/* App Store */}
                <Link
                  href="https://apps.apple.com/in/app/hom3li/id6748115471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-black px-5 py-2 shadow-md transition hover:scale-[1.02]"
                >
                  <FaApple className="h-8 w-8 text-white" />

                  <div className="leading-tight">
                    <p className="text-xs text-gray-100">Download on the</p>
                    <p className="text-sm lg:text-lg font-semibold text-white">
                      App Store
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative grid grid-cols-2">
            <div>
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/Download/download.png"
                  alt="App Preview"
                  width={320}
                  height={500}
                  className="drop-shadow-2xl absolute w-100 -top-20 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-top-60"
                />
              </div>
            </div>
            <div className="hidden lg:flex h-full items-center justify-center">
              <Image
                src="/Download/cartoon.png"
                alt="App Preview"
                width={420}
                height={900}
                className="drop-shadow-2xl absolute w-100 top-0 lg:-top-65"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
