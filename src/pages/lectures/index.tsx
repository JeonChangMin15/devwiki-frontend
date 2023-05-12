import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_LECTURES_LIST } from "@/common/graphql/queries";
import { Lists } from "@/common/types/queries";
import { Category } from "@/common/components/lectures/Category";
import { Classes } from "@/common/components/lectures/Classes";

const Lecture = () => {
  const router = useRouter();
  const { main, sub, mainCategory } = router.query;

  const { data } = useQuery<Lists>(GET_LECTURES_LIST, {
    variables: {
      main,
      sub,
      page: 1,
    },
  });
  console.log("data:", data);
  return (
    <div>
      <Category main={main} mainCategory={mainCategory} />
      <Classes data={data} />
    </div>
  );
};

export default Lecture;
