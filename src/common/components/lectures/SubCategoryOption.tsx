import React from "react";
import { useRouter } from "next/router";

import { MainCategory } from "@/common/types/queries";

interface SubCategoryOptionProps {
  sub?: string | string[];
  main?: string | string[];
  mainCategory?: string | string[];
}

const OPTIONS = {
  frontend: ["react", "html/css", "js/ts"],
  backend: ["spring", "nodejs", "python"],
  cs: ["database", "network"],
};

export const SubCategoryOption = ({
  sub,
  main,
  mainCategory,
}: SubCategoryOptionProps) => {
  const router = useRouter();
  const mainOption = main as MainCategory;

  return (
    <div className="flex space-x-3 pb-5">
      {mainOption &&
        OPTIONS[mainOption].map((val) => {
          return (
            <div
              key={val}
              className={`flex items-center py-2 px-4 border-2 rounded text-sm hover:bg-slate-200/30 cursor-pointer ${
                sub === val
                  ? "bg-emerald-200/30 text-emerald-500 font-medium border-none"
                  : "bg-white text-black"
              }`}
              onClick={() => {
                router.push({
                  pathname: "/lectures",
                  query: {
                    sub: val,
                    main,
                    mainCategory,
                  },
                });
              }}
            >
              {val}
            </div>
          );
        })}
    </div>
  );
};
