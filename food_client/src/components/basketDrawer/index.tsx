"use client";
import React, { useContext, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button as MuiButton,
  Container,
  Grid,
  Stack,
  Badge,
} from "@mui/material";
import {
  Menu,
  ShoppingBasketOutlined,
  ArrowBack,
  Remove,
  Close,
  Add,
} from "@mui/icons-material";
import Image from "next/image";
import { Button } from "@/components/core";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context";
import { BasketFoods } from "./basketFoods";

export const BasketDrawer = () => {
  const { baskets, loading, deleteBasket } = useContext(BasketContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const changeOnclick = () => {
    router.push("/order"), setIsDrawerOpen(false);
  };

  const sum = baskets.map(({ food }) => food.price).reduce((a, b) => a + b, 0);

  const food = baskets.map(({ food }) => food);

  const handleDelete = () => {
    deleteBasket(food);
  };

  return (
    <>
      <IconButton
        sx={{ display: "flex", alignItems: "center" }}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <Badge badgeContent={baskets?.length} color="primary">
          <ShoppingBasketOutlined />
        </Badge>
        <Typography
          sx={{ color: "black", fontWeight: 800, ml: 2, fontSize: 16 }}
        >
          Сагс
        </Typography>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        sx={{ position: "relative" }}
        onClose={() => {
          setIsDrawerOpen(false);
        }}
      >
        <Box width="590px" textAlign="center">
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
              py: 4,
              borderBottom: 1,
              borderColor: "#D6D8DB",
            }}
          >
            <Grid item xs={1}>
              <MuiButton
                onClick={() => setIsDrawerOpen(false)}
                sx={{ color: "black" }}
              >
                <ArrowBack />
              </MuiButton>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{ ml: 10 }}
                component="h1"
              >
                 Таны сагс
              </Typography>
            </Grid>
          </Grid>

          <BasketFoods foods={baskets} handleDelete={handleDelete} />

          <Grid container bottom={0} boxShadow={6} py={10} px={5}>
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
              <Button label={"Захиалах"} onClick={changeOnclick} />
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};
