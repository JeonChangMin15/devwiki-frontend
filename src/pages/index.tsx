import React from "react";

const Home = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
    <div
      className="lg:bg-amber-500 text-red-700 lg:text-green-600 p-20"
      key={index}
    >
      <div>01</div>
      <div>02</div>
      <div>03</div>
    </div>
  ));
};

export default Home;
