import PopularCar from "@/components/PopularCar";
import RecommendationCar from "@/components/RecommendationCar";
import React from "react";

const Page = () => {
  return (
    <div>
      <PopularCar heading={"Popular Cars"} />
      <RecommendationCar />
    </div>
  );
};

export default Page;
