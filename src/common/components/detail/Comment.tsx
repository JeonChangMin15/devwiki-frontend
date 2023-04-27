import React from "react";
import { AiFillStar } from "react-icons/ai";

import { Comments } from "@/common/types/queries";
import { writer } from "repl";

interface Commentprops {
  comments: Comments[];
  averageRating: number;
}

export const Comment = ({ comments, averageRating }: Commentprops) => {
  const RATING = [0, 1.5, 2.5, 3.5, 4.5];

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-semibold">수강평</span>
        <span className="text-base text-gray-400">총 {comments.length}개</span>
      </div>
      <div className="py-2 text-slate-700">
        수강생분들이 직접 작성하신 수강평입니다.
      </div>
      <div className="flex flex-col justify-center items-center w-full h-44 border rounded border-gray-300 space-y-4">
        <span className="text-4xl font-bold">{averageRating}</span>
        <div className="flex items-center">
          {RATING.map((rating) => (
            <AiFillStar
              key={rating}
              fill={averageRating >= rating ? "orange" : "gray"}
              size={20}
            />
          ))}
        </div>
        <span className="text-gray-300">{comments.length}개의 수강평</span>
      </div>
      <div className="pt-5 space-y-2 divide-y">
        {comments.map(({ writer, rating, description, id }, index) => {
          return (
            <div className="flex flex-col space-y-1" key={index}>
              <div className="flex items-center space-x-1">
                {RATING.map((value) => (
                  <AiFillStar
                    key={rating}
                    fill={rating >= value ? "orange" : "gray"}
                    size={15}
                  />
                ))}
                <span className="text-sm font-semibold pl-2">{rating}</span>
              </div>
              <span className="text-sm text-gray-400">{writer}</span>
              <div className="text-sm text-gray-600">{description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
