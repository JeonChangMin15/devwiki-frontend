import React from "react";
import { useQuery } from "@apollo/client";

import { Field } from "./Field";
import { TopThreeLecturesType } from "@/common/types/queries";
import { GET_TOP_THREE_LECTURES } from "@/common/graphql/queries";
import { filteringLecture } from "@/common/utils/filterLecture";

export const TopThreeLectures = () => {
  const { data, error, loading } = useQuery<TopThreeLecturesType>(
    GET_TOP_THREE_LECTURES
  );

  const frontendLectures = filteringLecture(data, "frontend");

  const backendLectures = filteringLecture(data, "backend");

  const computerScienceLectures = filteringLecture(data, "cs");

  return (
    <div className="pt-3 pb-2 space-y-3 lg:space-y-6">
      <Field lecture={frontendLectures ?? []} mainField="Frontend" />
      <Field lecture={backendLectures ?? []} mainField="Backend" />
      <Field
        lecture={computerScienceLectures ?? []}
        mainField="Computer Science"
      />
    </div>
  );
};
