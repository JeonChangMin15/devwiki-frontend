import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SIDEBAR_MENU = [
  { main: "프론트엔드", side: ["html/css", "react", "Js/Ts"] },
  { main: "백엔드", side: ["node", "spring", "python"] },
  { main: "CS", side: ["데이터베이스", "네트워크"] },
];

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const [openMenu, setOpenMenu] = useState(SIDEBAR_MENU.map(() => false));

  const handleMenuClick = (index: number) => {
    setOpenMenu((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="absolute top-0 left-0 z-[5] w-full h-full bg-slate-700 opacity-50"
      ></div>
      <div
        className={`absolute top-0 left-0 z-10 w-72 bg-white shadow-lg transition-all duration-500 ${
          isSidebarOpen ? "sidebar-show" : "sidebar-hide"
        }`}
      >
        <div className="relative px-5 py-2 border-b border-slate-200">
          <input
            className="w-full py-2 px-2 bg-slate-100 text-base text-slate-500 focus:outline-none placeholder:text-sm"
            placeholder="강의 강사명의 입력해주세요"
          />
          <div className="absolute top-[18px] left-[240px]">
            <AiOutlineSearch size={20} className="text-slate-500" />
          </div>
        </div>
        <div>
          <div className="px-6 py-2 border-b border-slate-200">
            <div className="text-lg">ALL</div>
          </div>
          {SIDEBAR_MENU.map((side, index) => {
            return (
              <div
                key={index}
                className="px-6   py-2 border-b border-slate-200"
              >
                <div
                  className="flex items-center justify-between text-lg cursor-pointer"
                  onClick={() => handleMenuClick(index)}
                >
                  <span>{side.main}</span>
                  <BsChevronDown />
                </div>
                {openMenu[index] && (
                  <div className="px-4 space-y-2">
                    {side.side.map((category) => (
                      <div key={category}>{category}</div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
