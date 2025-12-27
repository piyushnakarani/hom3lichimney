"use client";
import { NavLinks } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  shownav: boolean;
  closenav: () => void;
};

const MobileNav = ({ shownav, closenav }: Props) => {
  const navopen = shownav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <>
      <div
        className={`fixed  ${navopen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      >
        {/* Navlink */}
      </div>
      <div
        className={`text-white  ${navopen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-yellow-500 space-y-6 z-[1050]`}
      >
        {NavLinks.map((links) => (
          <Link key={links.id} href={links.url} onClick={closenav}>
            <p className="text-white w-fit border-b-[1.5px] transition-all transform space-x-6 border-white ml-12 text-[20px]">
              {links.name}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closenav}
          className="absolute top-5 right-5 sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </>
  );
};

export default MobileNav;
