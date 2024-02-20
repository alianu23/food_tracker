"use client";
import { FoodCard } from "@/components";
import { FoodContext } from "@/context";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Button as Muibtn,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  id: string;
  catName: string;
  foods: any;
};

export const DashFood = ({ foods, catName, id }: Props) => {
  const { getFoods } = useContext(FoodContext);
  const [catFoods, setCatFoods] = useState<any>();
  const router = useRouter();

  useEffect(() => {
    setCatFoods(foods.filter((food: any) => food?.category._id == id));
  }, [id]);

  //   console.log("CatFood", catFoods);

  return (
    <Box style={{ marginBottom: 60 }}>
      <Stack
        direction="row"
        style={{
          display: "flex",
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image alt="" width={22} height={22} src="/logo_svg/dashStar.svg" />
          <Typography variant="h6" marginLeft={2}>
            {" "}
            {catName}
          </Typography>
        </Stack>
        <Muibtn
          onClick={() => router.replace("/menu")}
          sx={{ color: "#18BA51", ml: 2 }}
        >
          Бүгдийг харах
        </Muibtn>
      </Stack>
      <Grid container>
        {catFoods?.map((food: any) => (
          <Grid item xs={3} key={food._id}>
            <FoodCard data={food} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
