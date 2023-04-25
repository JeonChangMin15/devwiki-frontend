import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_LECTURE_INFO } from "@/common/graphql/queries";
import { DetailLecture } from "@/common/types/queries";

const DetailPage = () => {
  const router = useRouter();
  const { lectureId } = router.query;
  console.log("lectureId", lectureId);

  const { data, error, loading } = useQuery<DetailLecture>(GET_LECTURE_INFO, {
    variables: {
      lectureId,
    },
  });

  console.log("lecturedata: ", data);

  return <div>index</div>;
};

export default DetailPage;
