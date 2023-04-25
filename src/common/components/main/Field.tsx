import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

import { LectureData } from "@/common/types/queries";

interface FieldProps {
  lecture: LectureData[];
  mainField: string;
}

export const Field = ({ lecture, mainField }: FieldProps) => {
  const colors = ["orange", "silver", "brown"];

  return (
    <div>
      <div className="text-lg font-semibold">{mainField} Top 3</div>
      <div className="w-full flex pt-3 space-x-10 lg:justify-between">
        {lecture?.map((info, index) => {
          return (
            <div key={index} className="hover:cursor-pointer hover:shadow">
              <div className="flex items-center space-x-3 pb-1 lg:space-x-6">
                <GiTrophyCup color={colors[index]} size={35} />
                <span>Top{index + 1}</span>
              </div>
              <div className="flex w-24 lg:w-60 lg:h-32  h-16 bg-green-500 text-white font-semibold justify-center items-center">
                {info.subCategory.name}
              </div>
              <div className="flex flex-col space-y-1">
                <div className="h-8 text-sm">{info.title}</div>
                <span className="text-sm">{info.writer}</span>
                <div className="flex items-center space-x-1">
                  <AiFillStar color="orange" />
                  <span className="text-sm">{info.averageRating}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
