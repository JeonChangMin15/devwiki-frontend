import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

import { GET_LECTURES_LIST } from "@/common/graphql/queries";
import { Lists } from "@/common/types/queries";
import { Category } from "@/common/components/lectures/Category";
import { List } from "@/common/components/lectures/List";

const Lecture = () => {
  const router = useRouter();
  const { main, sub, mainCategory } = router.query;

  const { data } = useQuery<Lists>(GET_LECTURES_LIST, {
    variables: {
      main,
      sub,
    },
  });

  return (
    <div>
      <Category main={main} mainCategory={mainCategory} />
      <List data={data} />
    </div>
  );
};

export default Lecture;
