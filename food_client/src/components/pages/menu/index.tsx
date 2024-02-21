import React, { useContext, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

import { ButtonMenu } from "@/components";
import { FoodCard } from "@/components/cards";
import { CategoryContext } from "@/context/category";
import { FoodContext } from "@/context";

export const MenuComp = () => {
  const { categories } = useContext(CategoryContext);
  const { foods, getFoods } = useContext(FoodContext);
  const [clicked, setClicked] = useState("65bccaed36ba3cd18e2fd765");

  const handleClick = (value: string) => {
    setClicked(value);
  };

  return (
    <main>
      <Container style={{ marginBottom: 60 }}>
        <Grid container alignItems="center" mb={5} gap={5}>
          {categories?.map((e) => (
            <Grid key={e._id}>
              <ButtonMenu
                label={e.name}
                btnType={e._id === clicked ? "contained" : "outlined"}
                onClick={() => {
                  handleClick(e._id);
                }}
              />
              {/* <ButtonMenu label="Бүх хоол" />
              <ButtonMenu label="Хямдралтай хоол" /> */}
            </Grid>
          ))}
          <Grid item sx={{ display: "flex" }}>
            <ButtonMenu
              label="All"
              // onClick={() => handleCheckFoodId()}
              btnType="outlined"
            />
            <ButtonMenu label="Sale" btnType="outlined" />
          </Grid>
        </Grid>
        <Grid container spacing={10}>
          {foods
            ?.filter((food: any) => food.category._id == clicked)
            .map((food: any) => (
              <Grid item key={food._id}>
                <FoodCard data={food} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </main>
  );
};
