import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_LECTURE_INFO } from "@/common/graphql/queries";
import { DetailLecture } from "@/common/types/queries";
import { Info } from "@/common/components/detail/Info";
import { EmptyComment } from "@/common/components/detail/EmptyComment";
import { Comment } from "@/common/components/detail/Comment";
import { Input } from "@/common/components/detail/Input";

const DetailPage = () => {
  const router = useRouter();
  const { lectureId } = router.query;

  const { data, error, loading } = useQuery<DetailLecture>(GET_LECTURE_INFO, {
    variables: {
      lectureId,
    },
  });

  if (!data) return;

  return (
    <div className="pt-5 py-5">
      <Info info={data.fetchLecture ?? []} />
      {data.fetchLecture.comments.length === 0 ? (
        <EmptyComment />
      ) : (
        <Comment
          comments={data.fetchLecture.comments ?? []}
          averageRating={data.fetchLecture.averageRating}
        />
      )}
      <Input lectureId={lectureId} />
    </div>
  );
};

export default DetailPage;
