import React from "react";
import { useQuery } from "@apollo/client";
import { GiTrophyCup } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

import { TopThreeLecturesType } from "@/common/types/queries";
import { GET_TOP_THREE_LECTURES } from "@/common/graphql/queries";
import { Field } from "./Field";

export const TopThreeLectures = () => {
  const { data, error, loading } = useQuery<TopThreeLecturesType>(
    GET_TOP_THREE_LECTURES
  );

  const frontendLectures = data?.fetchTopThreeLectures
    .filter((lecture) => lecture.subCategory.mainCategory.name === "frontend")
    .sort((a, b) => b.averageRating - a.averageRating);

  const backendLectures = data?.fetchTopThreeLectures
    .filter((lecture) => lecture.subCategory.mainCategory.name === "backend")
    .sort((a, b) => b.averageRating - a.averageRating);

  const computerScienceLectures = data?.fetchTopThreeLectures
    .filter((lecture) => lecture.subCategory.mainCategory.name === "cs")
    .sort((a, b) => b.averageRating - a.averageRating);

  return (
    <div className="pt-3 space-y-3">
      <Field lecture={frontendLectures ?? []} mainField="Frontend" />
      <Field lecture={backendLectures ?? []} mainField="Backend" />
      <Field
        lecture={computerScienceLectures ?? []}
        mainField="Computer Science"
      />
    </div>
  );
};
