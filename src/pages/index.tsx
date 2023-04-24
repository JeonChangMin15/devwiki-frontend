import React from "react";

import { TopThreeLectures } from "@/common/components/main/TopThreeLectures";
import { Advertisement } from "@/common/components/main/Advertisement";

const Home = () => {
  return (
    <div>
      <Advertisement />
      <TopThreeLectures />
    </div>
  );
};

export default Home;
