"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`mx-auto w-[90%] md:w-[80%]  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
