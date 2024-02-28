import { BasketContext } from "@/context";
import { Add, Close, Remove } from "@mui/icons-material";
import { Grid, Typography, Button as MuiButton, Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  img: string;
  _id: String;
  name: string;
  description: string;
  price: number;
  count: number;
};

export const BasketFoods = ({ food, foodCount }: any) => {
  const { deleteBasket, updateFoodBasket } = useContext(BasketContext);
  const [count, setCount] = React.useState(foodCount);

  console.log("Drawer food =====>", food);

  const handleCount = (operation: string, foodId: string) => {
    console.log("foodId", operation, foodId);
    if (operation === "plus") {
      count < 10 && setCount(count + 1);
    } else {
      count !== 1 && setCount(count - 1);
    }
    updateFoodBasket({
      foodId: food._id,
      count: operation === "plus" ? count + 1 : count - 1,
      totalPrice:
        operation === "plus"
          ? (count + 1) * food.price
          : (count - 1) * food.price,
    });
  };

  const handleDelete = (value: any) => {
    deleteBasket(value);
  };

  return (
    <>
      <Grid container p={2} py={6}>
        <Grid item xs={6}>
          <img
            alt="basketFood img"
            width={250}
            height={170}
            style={{}}
            src={food?.image}
          />
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h5" fontWeight={600} component="h2">
                {food?.name}
              </Typography>

              <Typography
                variant="h6"
                fontWeight={500}
                py={2}
                sx={{ color: "#18BA51" }}
              >
                {food?.price} * {foodCount} = {food?.price * foodCount}₮
              </Typography>
            </div>
            <MuiButton onClick={() => handleDelete(food?._id)}>
              <Close />
            </MuiButton>
          </div>

          <Typography sx={{ display: "flex", textAlign: "left" }}>
            {food?.description}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <MuiButton onClick={() => handleCount("minus", food._id)}>
              <Remove
                sx={{
                  bgcolor: "#18BA51",
                  color: "white",
                  width: "70%",
                  height: "30px",
                  py: 1,
                  borderRadius: 2,
                }}
              />
            </MuiButton>
            <input
              type="number"
              value={count}
              style={{ border: "none", textAlign: "center", width: "25%" }}
            />
            <MuiButton onClick={() => handleCount("plus", food._id)}>
              <Add
                sx={{
                  bgcolor: "#18BA51",
                  color: "white",
                  width: "70%",
                  height: "30px",
                  py: 1,
                  borderRadius: 2,
                }}
              />
            </MuiButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
