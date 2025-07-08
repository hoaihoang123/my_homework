import React from "react";
import StatsCard from "../Components/StatsCard";
import ChartsRow1 from "../Components/ChartsRow1";
import ChartsRow2 from "../Components/ChartRows2";

const Overview = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <StatsCard />
      <ChartsRow1 />
      <ChartsRow2 />
    </div>
  );
};

export default Overview;
