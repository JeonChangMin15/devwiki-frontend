import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";

import { useColorModeContext } from "../context/ColorModeProvider";

interface BottomNavProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomNav = ({ setIsSidebarOpen }: BottomNavProps) => {
  const { colorMode, setColorMode } = useColorModeContext();

  return (
    <div className="flex fixed bottom-0 left-0 right-0 w-full px-5 py-5 bg-white dark:bg-black z-10 shadow-2xl shadow-slate-700 lg:hidden">
      <div
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="flex-1 flex justify-center"
      >
        <GiHamburgerMenu
          size={40}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </div>
      <div className="flex-1 flex justify-center">
        <AiOutlineHome
          size={40}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </div>
      <div
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className="flex-1 flex justify-center"
      >
        <MdOutlineDarkMode
          size={40}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </div>
    </div>
  );
};
