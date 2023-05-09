import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_LECTURE_INFO } from "@/common/graphql/queries";
import { DetailLecture } from "@/common/types/queries";
import { Info } from "@/common/components/detail/Info";
import { Comment } from "@/common/components/detail/Comment";
import { Input } from "@/common/components/detail/Input";

const DetailPage = () => {
  const RATING = [0, 1, 2, 3, 4];
  const router = useRouter();
  const { lectureId } = router.query;
  console.log("lectureId", lectureId);

  const { data, error, loading } = useQuery<DetailLecture>(GET_LECTURE_INFO, {
    variables: {
      lectureId,
    },
  });

  console.log("lecturedata: ", data);

  if (!data) return;

  return (
    <div className="pt-5">
      <Info info={data.fetchLecture ?? []} />
      <Comment
        comments={data.fetchLecture.comments ?? []}
        averageRating={data.fetchLecture.averageRating}
      />
      <Input lectureId={lectureId} />
    </div>
  );
};

export default DetailPage;
