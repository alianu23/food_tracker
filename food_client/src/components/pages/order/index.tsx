"use client";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import OrderStep1 from "./orderStep1";
import { OrderStep2 } from "./orderStep2";
import { BasketContext } from "@/context";
import { count } from "console";

export const OrderPage = () => {
  const { baskets } = useContext(BasketContext);
  const sum = baskets
    .map((food) => food.food.price * food.count)
    .reduce((a, b) => a + b, 0);
  return (
    <Grid container justifyContent={"center"} gap={40}>
      <Grid item xs={3}>
        <OrderStep1 />
      </Grid>
      <Grid item xs={3}>
        <OrderStep2 baskets={baskets} sum={sum} />
      </Grid>
    </Grid>
  );
};
