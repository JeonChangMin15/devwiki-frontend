import React from "react";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";

import { Lists } from "@/common/types/queries";

interface ListProps {
  data?: Lists;
}

export const Classes = ({ data }: ListProps) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-4 pb-5 lg:pb-20">
      {data?.fetchLectures.lists.map(
        ({ id, writer, price, title, averageRating }, index) => {
          return (
            <div
              className="mb-6 lg:mb-10 shadow-sm lg:shadow-none lg:hover:shadow hover:cursor-pointer max-h-[200px] lg:max-h-[250px]"
              onClick={() => {
                router.push({
                  pathname: "/detail",
                  query: {
                    lectureId: id,
                  },
                });
              }}
              key={id}
            >
              <div className="w-full h-16 lg:h-32 bg-emerald-300 text-white">
                hello
              </div>
              <div className="flex flex-col">
                <div className="h-12">{title}</div>
                <div className="text-zinc-500	text-sm">{writer}</div>
                <div className="flex space-x-1 items-center">
                  <AiFillStar fill="orange" size={16} />
                  <span className="text-sm">{averageRating}</span>
                </div>
                <div className="font-medium text-blue-700 text-lg">
                  {price === 0
                    ? "무료"
                    : price.toLocaleString("ko-KR", {
                        style: "currency",
                        currency: "KRW",
                      })}
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
