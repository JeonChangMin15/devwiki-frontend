import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-xl shadow-gray-100">
      <div className="flex items-center justify-between h-10 py-10 px-5">
        <div className="w-6 h-6">
          <GiHamburgerMenu size={20} />
        </div>
        <Image src={"/images/logo.png"} alt="logo" width={120} height={50} />
        <div className="w-6 h-6">
          <MdOutlineDarkMode size={20} />
        </div>
      </div>
    </nav>
  );
};
