import React from "react";
import { BiCommentAdd } from "react-icons/bi";

export const EmptyComment = () => {
  return (
    <div className="my-5 flex items-center justify-center w-full h-40 lg:h-60 bg-gray-100">
      <div className="flex flex-col items-center">
        <BiCommentAdd size={50} fill="" />
        <p className="pt-3 text-gray-400 lg:text-xl">강의평이 아직 없네요</p>
        <p className="text-gray-400 lg:text-xl">첫번째 후기를 입력해주세요</p>
      </div>
    </div>
  );
};
