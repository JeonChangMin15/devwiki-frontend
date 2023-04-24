import React from "react";
import { useQuery } from "@apollo/client";

import { TopThreeLecturesType } from "@/common/types/queries";
import { GET_TOP_THREE_LECTURES } from "@/common/graphql/queries";

export const TopThreeLectures = () => {
  const { data, error, loading } = useQuery<TopThreeLecturesType>(
    GET_TOP_THREE_LECTURES
  );

  const frontendLectures = data?.fetchTopThreeLectures
    .filter((lecture) => lecture.subCategory.mainCategory.name === "frontend")
    .sort((a, b) => b.averageRating - a.averageRating);

  console.log(frontendLectures);
  return <div className="pt-5">TopThreeLectures</div>;
};
