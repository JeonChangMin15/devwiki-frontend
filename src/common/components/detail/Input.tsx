import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { AiFillStar } from "react-icons/ai";

import { CREATE_COMMENT } from "@/common/graphql/mutations";
import { GET_LECTURE_INFO } from "@/common/graphql/queries";

interface Comment {
  writer: string;
  password: string;
  description: string;
}

interface InputProps {
  lectureId?: string | string[];
}

const RATING = [1, 2, 3, 4, 5];

export const Input = ({ lectureId }: InputProps) => {
  const [rating, setRating] = useState(0);
  const [isRatingRegister, setIsRatingRegister] = useState(true);

  const [addComment, { data, loading, error }] = useMutation(CREATE_COMMENT, {
    refetchQueries: [
      {
        query: GET_LECTURE_INFO,
        variables: {
          lectureId,
        },
      },
    ],
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Comment>();

  const onSubmit = (data: Comment) => {
    if (rating === 0) {
      setIsRatingRegister(false);
      return;
    }

    addComment({
      variables: {
        lectureId,
        commentInput: { ...data, rating },
      },
    });
    setIsRatingRegister(true);
    setRating(0);
    reset({
      writer: "",
      password: "",
      description: "",
    });
  };

  return (
    <form
      className="flex flex-col bg-slate-200 py-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-center items-center space-x-1">
        <input
          className={`w-2/5 border-solid border-gray-400 border-2 outline-none ${
            errors.writer && "border-emerald-400"
          }`}
          type="text"
          placeholder="아이디"
          {...register("writer", { required: true, minLength: 1 })}
        />
        <input
          className={`w-2/5 border-solid border-gray-400 border-2 outline-none ${
            errors.password && "border-emerald-400"
          }`}
          type="password"
          placeholder="비밀번호"
          {...register("password", { required: true, minLength: 1 })}
        />
      </div>
      <div className="flex space-x-1 items-center pt-3 px-8 lg:px-32 lg:cursor-pointer">
        {RATING.map((score, index) => (
          <AiFillStar
            key={index}
            onClick={() => setRating(score)}
            fill={rating >= score ? "orange" : "gray"}
          />
        ))}
        {!isRatingRegister && (
          <p className="text-emerald-400">평점을 등록해주세요 </p>
        )}
      </div>
      <div className="flex justify-center items-center py-3 space-x-2">
        <textarea
          className={`w-4/5 h-20 border-solid border-gray-400 border-2 outline-none ${
            errors.description && "border-emerald-400"
          }`}
          {...register("description", { required: true, minLength: 1 })}
        />
      </div>
      <div className="flex flex-row-reverse px-8 lg:px-32">
        <input
          className="w-20 border-solid border-gray-400 border-2 text-center lg:cursor-pointer hover:bg-gray-400 active:bg-gray-300 rounded"
          type="submit"
        />
      </div>
    </form>
  );
};
