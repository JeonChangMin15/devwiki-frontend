import router from "next/router";
import React from "react";

interface CategroyProps {
  main?: string | string[];
  mainCategory?: string | string[];
}

export const Category = ({ main, mainCategory }: CategroyProps) => {
  return (
    <div className="flex mb-5 items-center">
      <span
        className={`text-xl ${
          main === "all" ? "font-bold" : "font-normal text-slate-500"
        } cursor-pointer`}
        onClick={() => {
          router.push({
            pathname: "/lectures",
            query: {
              main: "all",
              sub: "all",
              mainCategory: "전체강의",
            },
          });
        }}
      >
        전체강의{" "}
      </span>
      <span
        className={`text-xl font-normal text-slate-500 ${
          main === "all" ? "hidden" : "inline"
        }`}
      >
        &nbsp;{`/`}&nbsp;
      </span>
      <span className="text-xl font-bold">
        {main !== "all" && `${mainCategory}`}
      </span>
    </div>
  );
};
