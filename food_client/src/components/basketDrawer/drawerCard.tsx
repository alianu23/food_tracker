import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { BasketFoods } from "./basketFoods";
import { Button } from "..";

type Props = {
  baskets: any;
  loading: boolean;
  changeOnclick: () => void;
  sum: number;
};

const DrawerCard = ({ baskets, loading, changeOnclick, sum }: Props) => {
  return (
    <Stack>
      {baskets?.foods?.map((food: any) => (
        <BasketFoods key={food._id} food={food.food} foodCount={food.count} />
      ))}

      <Grid
        container
        position={"sticky"}
        bottom={0}
        boxShadow={6}
        bgcolor={"white"}
        py={10}
        px={5}
      >
        <Grid
          item
          xs={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          pl={5}
        >
          <Typography variant="body1" component="h6">
            Нийт төлөх дүн
          </Typography>
          <Typography variant="body1" fontWeight={600} component="h6">
            {sum}₮
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            label={"Захиалах"}
            onClick={changeOnclick}
            disabled={loading}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default DrawerCard;
