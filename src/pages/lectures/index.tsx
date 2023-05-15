import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useQuery } from "@apollo/client";

import { GET_LECTURES_LIST } from "@/common/graphql/queries";
import { Lists } from "@/common/types/queries";
import { Category } from "@/common/components/lectures/Category";
import { Classes } from "@/common/components/lectures/Classes";

const Lecture = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { main, sub, mainCategory } = router.query;

  const { data } = useQuery<Lists>(GET_LECTURES_LIST, {
    variables: {
      main,
      sub,
      page,
    },
  });
  const pageCount = Math.ceil((data?.fetchLectures.count ?? 0) / 8);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1);
  };

  // console.log("data:", data);
  useEffect(() => {
    setPage(1);
  }, [main, sub]);
  return (
    <div>
      <Category main={main} mainCategory={mainCategory} />
      <Classes data={data} />
      <div className="flex justify-center min-h-[300px] lg:min-h-[400px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={6}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          activeClassName="page-selection"
        />
      </div>
    </div>
  );
};

export default Lecture;
