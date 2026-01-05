"use client";

import { useState } from "react";
import { HiBadgeCheck, HiShieldCheck, HiCog } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";

const DATA = [
  {
    id: 1,
    title: "Quality Assurance",
    icon: <HiBadgeCheck className="h-6 w-6" />,
    description:
      "Fusce ligula elit, vulputate quis diam vel, consectetur blandit quam. Suspendisse malesuada tincidunt eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 2,
    title: "Reliable and Punctual",
    icon: <HiShieldCheck className="h-6 w-6" />,
    description:
      "Fusce ligula elit, vulputate quis diam vel, consectetur blandit quam. Suspendisse malesuada tincidunt eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 3,
    title: "Reliable and Punctual",
    icon: <HiCog className="h-6 w-6" />,
    description:
      "Fusce ligula elit, vulputate quis diam vel, consectetur blandit quam. Suspendisse malesuada tincidunt eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
];

export default function WhyChooseAccordion() {
  const [openId, setOpenId] = useState<number>(1);

  const toggle = (id: number) => {
    setOpenId(id); // always switch, never close all
  };

  return (
    <div>
      {DATA.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b border-white/20 py-5 lg:ml-5">
            <div className="flex items-start gap-5">
              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-[#071824]">
                {item.icon}
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-md lg:text-lg font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </h4>

                  {/* ONLY + / − clickable */}
                  <span
                    onClick={() => toggle(item.id)}
                    className="cursor-pointer select-none text-2xl text-white transition hover:opacity-70"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "max-h-[200px] opacity-100 mt-3 translate-y-0"
                        : "max-h-0 opacity-0 translate-y-[-4px]"
                    }`}
                  >
                    <p className="max-w-[92%] text-xs lg:text-sm leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* BUTTON */}
      <div className="flex justify-start">
        <button className="mt-8 inline-flex items-center justify-start gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition uppercase hover:bg-[#FED824] hover:scale-[1.03]">
        Download App
          <MdArrowOutward height={10} width={10} />
        </button>
      </div>
    </div>
  );
}
