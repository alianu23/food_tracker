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
import { BasketDrawerProp } from "./basketDrawer";

export const BasketDrawer = () => {
  const { baskets, loading, deleteBasket } = useContext(BasketContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <Badge badgeContent={baskets?.foods?.length} color="primary">
          <ShoppingBasketOutlined />
        </Badge>
        <Typography
          sx={{ color: "black", fontWeight: 800, ml: 2, fontSize: 16 }}
        >
          Сагс
        </Typography>
      </IconButton>
      <BasketDrawerProp
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
};
