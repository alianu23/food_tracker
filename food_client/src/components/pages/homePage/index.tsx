import { FoodContext } from "@/context";

import { Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DashImage } from "./dashImage";
import { DashInfo } from "./dashInfo";
import { DashFood } from "./dashFood";
import { CategoryContext } from "@/context/category";
import CategorySkeleton from "@/components/ui";

export const Dashboard = () => {
  const { foods, isLoading, getFoods } = useContext(FoodContext);
  const { categories } = useContext(CategoryContext);

  return (
    <main>
      <DashImage />
      <Container>
        <DashInfo />
        {isLoading ? (
          <CategorySkeleton />
        ) : (
          categories.map((cat) => (
            <DashFood
              key={cat._id}
              foods={foods}
              catName={cat.name}
              id={cat._id}
            />
          ))
        )}
      </Container>
    </main>
  );
};
