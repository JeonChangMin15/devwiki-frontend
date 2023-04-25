import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useColorModeContext } from "../context/ColorModeProvider";

interface NavBarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavBar = ({ setIsSidebarOpen }: NavBarProps) => {
  const { colorMode, setColorMode } = useColorModeContext();

  return (
    <nav className="fixed top-0 left-0 right-0 py-5 px-5 dark:bg-black bg-white shadow-xl shadow-gray-100 lg:px-80">
      <div className="flex items-center justify-between">
        <div className="w-6 h-6">
          <GiHamburgerMenu
            size={30}
            color={colorMode === "dark" ? "white" : "black"}
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          />
        </div>
        <Image src={"/images/logo.png"} alt="logo" width={120} height={50} />
        <div
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          className="w-6 h-6"
        >
          <MdOutlineDarkMode
            color={colorMode === "dark" ? "white" : "black"}
            size={30}
          />
        </div>
      </div>
    </nav>
  );
};
