import React from "react";
import { useRouter } from "next/router";
import { GiTrophyCup } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

import { TopThreeLecture } from "@/common/types/queries";

interface FieldProps {
  lecture: TopThreeLecture[];
  mainField: string;
}

export const Field = ({ lecture, mainField }: FieldProps) => {
  const router = useRouter();
  const colors = ["orange", "silver", "brown"];

  return (
    <div>
      <div className="text-lg font-semibold">{mainField} Top 3</div>
      <div className="w-full flex pt-3 space-x-10 lg:justify-between">
        {lecture?.map((info, index) => {
          return (
            <div
              key={index}
              className="hover:cursor-pointer lg:hover:shadow active:shadow-lg dark:hover:shadow-gray-500"
              onClick={() =>
                router.push({
                  pathname: "/detail",
                  query: {
                    lectureId: info.id,
                  },
                })
              }
            >
              <div className="flex items-center space-x-3 pb-1 lg:space-x-6">
                <GiTrophyCup color={colors[index]} size={35} />
                <span>Top{index + 1}</span>
              </div>
              <div className="flex w-24 lg:w-60 lg:h-32 h-16 bg-green-500 text-white lg:text-2xl font-semibold justify-center items-center">
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
