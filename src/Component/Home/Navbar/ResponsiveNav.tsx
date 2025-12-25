"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [Shownav, setShownav] = useState(false);

  const handleopennav = () => setShownav(true);
  const handleclosenav = () => setShownav(false);

  return (
    <div className="">
      <Nav opennav={handleopennav} />
      <MobileNav shownav={Shownav} closenav={handleclosenav} />
    </div>
  );
};

export default ResponsiveNav;
