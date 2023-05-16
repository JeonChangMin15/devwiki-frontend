import React from "react";
import { Cost } from "@/common/types/state";

interface CostOptionProps {
  cost: Cost;
  setCost: React.Dispatch<React.SetStateAction<Cost>>;
}

export const CostOption = ({ cost, setCost }: CostOptionProps) => {
  return (
    <div className="flex pb-5 space-x-3">
      <div
        onClick={() => setCost("all")}
        className={`flex items-center py-2 px-4 border-2 rounded text-sm hover:bg-slate-200/30 cursor-pointer ${
          cost === "all"
            ? "bg-emerald-200/30 text-emerald-500 font-medium border-none"
            : "bg-white text-black"
        }`}
      >
        전체
      </div>
      <div
        onClick={() => setCost("pay")}
        className={`flex items-center py-2 px-4 border-2 rounded text-sm hover:bg-slate-200/30 cursor-pointer ${
          cost === "pay"
            ? "bg-emerald-200/30 text-emerald-500 font-medium border-none"
            : "bg-white text-black"
        }`}
      >
        유료
      </div>
      <div
        onClick={() => setCost("free")}
        className={`flex items-center py-2 px-4 border-2 rounded text-sm hover:bg-slate-200/30 cursor-pointer ${
          cost === "free"
            ? "bg-emerald-200/30 text-emerald-500 font-medium border-none"
            : "bg-white text-black"
        }`}
      >
        무료
      </div>
    </div>
  );
};
