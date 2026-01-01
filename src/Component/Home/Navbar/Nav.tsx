import { NavLinks } from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  opennav: () => void;
};

const Nav = ({ opennav }: Props) => {
  const [Navbg, setNavbg] = useState(false);
  // State to track the active hash
  const [activeHash, setActiveHash] = useState("");

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
            // Check if the link is active
            const isActive = activeHash === links.url;

            return (
              <Link
                key={links.id}
                href={links.url}
                onClick={() => setActiveHash(links.url)} // Update state on click
                className={`relative group font-semibold ${Navbg ? 'text-black' : 'text-white'}`}
              >
                <p>{links.name}</p>
                
                {/* Underline logic */}
                <span className={`
                  absolute bottom-[-2px] left-0 h-[2px] bg-yellow-400 
                  transition-all duration-300 origin-left
                  ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                `}></span>
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