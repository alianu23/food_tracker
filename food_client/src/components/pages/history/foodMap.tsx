import { Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

type Props = {
  food: any;
};

export const FoodMap = ({ food }: Props) => {
  return <Typography>{food.name}</Typography>;
};
