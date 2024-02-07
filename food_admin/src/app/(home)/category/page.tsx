"use client";
import CategoryView from "@/components/sections/categoryView";
import * as React from "react";

const CategoryPage = () => {
  return (
    <React.Suspense fallback={<p>Loading Category Page...</p>}>
      <CategoryView />
    </React.Suspense>
  );
};

export default CategoryPage;
