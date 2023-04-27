import Link from "next/link";
import { BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import { LectureData } from "@/common/types/queries";

import React from "react";

interface InfoProps {
  info: LectureData;
}

export const Info = ({ info }: InfoProps) => {
  const RATING = [0, 1, 2, 3, 4];

  return (
    <>
      <div className="flex flex-col bg-gray-800 text-white pt-2 px-2 pb-4">
        {info.url ? (
          <Link
            className="text-2xl font-semibold pb-2"
            href={info.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {info.title}
          </Link>
        ) : (
          <div className="text-2xl font-semibold pb-2">{info.title}</div>
        )}

        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {RATING.map((rating) => (
              <AiFillStar
                key={rating}
                fill={info.averageRating >= rating ? "yellow" : "white"}
              />
            ))}
          </div>
          <span>({info.averageRating}점)</span>
          <span>{info.comments.length}개의 수강평</span>
        </div>
        <div className="flex items-center space-x-1">
          <BsPerson size={25} />
          <span>{info.writer}</span>
        </div>
        <span className="text-lg">{info.price}원</span>
        <span className="text-lg">
          강의시간: {Math.floor(info.duration / 60)}시간 {info.duration % 60}분
        </span>
        <div className="flex space-x-1 pt-1">
          {info.tags.map(({ name }, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-full h-36 bg-green-500 text-white text-3xl justify-center items-center">
        {info.subCategory.name}
      </div>
      <div>{info.description}</div>
    </>
  );
};
