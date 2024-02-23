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

export const BasketFoods = ({ foods }: any) => {
  const { deleteBasket } = useContext(BasketContext);
  const [count, setCount] = useState();

  const handleDelete = (value: any) => {
    deleteBasket(value);
  };
  return (
    <>
      {foods.map((food: any) => (
        <Grid container key={food._id} p={2} py={6}>
          <Grid item xs={6}>
            <img
              alt="basketFood img"
              width={250}
              height={170}
              style={{}}
              src={food.food.image}
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
                  {food.food.name}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  py={2}
                  sx={{ color: "#18BA51" }}
                >
                  {food.food.price}₮
                </Typography>
              </div>
              <MuiButton onClick={() => handleDelete(food.food._id)}>
                <Close />
              </MuiButton>
            </div>

            <Typography sx={{ display: "flex", textAlign: "left" }}>
              {food.food.description}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <Typography fontWeight={600}>Count : </Typography>

              <Typography>{food.count}</Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
