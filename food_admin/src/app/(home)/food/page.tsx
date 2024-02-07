"use client";
import FoodView from "@/components/sections/foodView";
import * as React from "react";

const FoodPage = () => {
  return (
    <React.Suspense fallback={<p>Loading Food Page...</p>}>
      <FoodView />
    </React.Suspense>
  );
};

export default FoodPage;
