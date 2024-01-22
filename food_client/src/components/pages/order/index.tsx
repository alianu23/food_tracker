import { Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import OrderStep1 from "./orderStep1";
import { OrderStep2 } from "./orderStep2";

export const OrderPage = () => {
  return (
    <Grid container mx={150} gap={40}>
      <Grid item xs={3}>
        <OrderStep1 />
      </Grid>
      <Grid item xs={3}>
        <OrderStep2 />
      </Grid>
    </Grid>
  );
};
