import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { AiFillStar } from "react-icons/ai";

import { GET_LECTURES_LIST } from "@/common/graphql/queries";
import { Lists } from "@/common/types/queries";

const Lecture = () => {
  const router = useRouter();
  const { main, sub } = router.query;

  const { data } = useQuery<Lists>(GET_LECTURES_LIST, {
    variables: {
      main,
      sub,
    },
  });

  return (
    <div className="grid grid-cols-2 gap-x-4 lg:grid-cols-4 pb-5 lg:pb-20 min-h-[550px] lg:min-h-[700px]">
      {data?.fetchLectures.map(
        ({ id, writer, price, title, averageRating }, index) => {
          return (
            <div
              className="mb-6 lg:mb-20 shadow-sm lg:shadow-none lg:hover:shadow hover:cursor-pointer max-h-[200px] lg:max-h-[250px]"
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
                  {price.toLocaleString("ko-KR", {
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

export default Lecture;
