import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SIDEBAR_MENU = [
  {
    main: { name: "프론트엔드", category: "frontend" },
    side: [
      { name: "All", category: "all" },
      { name: "Html/Css", category: "html/css" },
      { name: "React", category: "react" },
      { name: "Js/Ts", category: "js/ts" },
    ],
  },
  {
    main: { name: "백엔드", category: "backend" },
    side: [
      { name: "All", category: "all" },
      { name: "Node Js", category: "nodejs" },
      { name: "Spring", category: "spring" },
      { name: "Python", category: "python" },
    ],
  },
  {
    main: { name: "Computer Science", category: "cs" },
    side: [
      { name: "All", category: "all" },
      { name: "데이터베이스", category: "database" },
      { name: "네트워크", category: "network" },
    ],
  },
];

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const router = useRouter();
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
        className={`absolute top-0 left-0 z-[5] w-full h-full bg-slate-700 opacity-50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`absolute top-0 left-0 z-10 w-72 bg-white shadow-lg duration-300 ${
          isSidebarOpen ? "sidebar-show block" : "sidebar-hide invisible"
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
            <div
              className="text-lg cursor-pointer hover:text-emerald-400"
              onClick={() => {
                router.push({
                  pathname: "/lectures",
                  query: {
                    main: "all",
                    sub: "all",
                    mainCategory: "전체강의",
                  },
                });
                setIsSidebarOpen(false);
              }}
            >
              ALL
            </div>
          </div>
          {SIDEBAR_MENU.map((menu, index) => {
            return (
              <div
                key={index}
                className="px-6   py-2 border-b border-slate-200"
              >
                <div
                  className="flex items-center justify-between text-lg cursor-pointer"
                  onClick={() => handleMenuClick(index)}
                >
                  <div className="hover:text-emerald-400">{menu.main.name}</div>
                  <BsChevronDown />
                </div>
                {openMenu[index] && (
                  <div className="px-4 space-y-2">
                    {menu.side.map((sub) => (
                      <div
                        className="cursor-pointer hover:text-emerald-400"
                        key={sub.name + menu.main.name}
                        onClick={() => {
                          router.push({
                            pathname: "/lectures",
                            query: {
                              main: menu.main.category,
                              sub: sub.category,
                              mainCategory: menu.main.name,
                            },
                          });
                          setIsSidebarOpen(false);
                        }}
                      >
                        {sub.name}
                      </div>
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
