import { NavLinks } from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { GrTechnology } from "react-icons/gr";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  opennav: () => void;
};
const Nav = ({ opennav }: Props) => {
  const [Navbg, setNavbg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavbg(true);
      } else {
        setNavbg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        Navbg ? "bg-white shadow-md" : "fixed"
      } h-[10vh] w-full z-[100]  fixed duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2 ">
            <Image
              src="/Hero/logo.png" // or /logo.svg
              alt="Hom3li Logo"
              width={80}
              height={80}
              priority
            />
        </div>
        {/* menus */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((links) => {
            return (
              <Link
                key={links.id}
                href={links.url}
                className={`${Navbg ? 'text-black' : 'text-white'} hover:text-yellow-400 font-semibold`}
              >
                <p>{links.name}</p>
              </Link>
            );
          })}
        </div>

        {/* button */}
        <div className="flex items-center lg:hidden">
          <HiBars3BottomRight
            onClick={opennav}
            className={`h-8 w-8 cursor-pointer ${Navbg ? 'text-black' : 'text-white'} `}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
