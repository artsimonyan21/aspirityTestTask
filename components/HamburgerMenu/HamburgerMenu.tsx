"use client";

import Hamburger from "hamburger-react";

const HamburgerMenu = () => {
  return (
    <div className="w-[18px] h-3 text-white">
      <Hamburger onToggle={() => true} />
    </div>
  );
};

export default HamburgerMenu;
