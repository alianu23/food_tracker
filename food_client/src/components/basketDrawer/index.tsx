"use client";
import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Container,
  Grid,
} from "@mui/material";
import {
  Menu,
  ShoppingBasket,
  ArrowBack,
  Remove,
  Close,
  Add,
} from "@mui/icons-material";
import Image from "next/image";

export const BasketDrawer = () => {
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
        <ShoppingBasket />
        <Typography sx={{ color: "black", fontWeight: 800, ml: 2 }}>
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
              <Button
                onClick={() => setIsDrawerOpen(false)}
                sx={{ color: "black" }}
              >
                <ArrowBack />
              </Button>
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
          <Grid container p={2} py={6}>
            <Grid item xs={6}>
              <Image
                alt="basketFood img"
                width={250}
                height={170}
                style={{}}
                src="/foodImg/modalPng.png"
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
                    Main Pizza
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    py={2}
                    sx={{ color: "#18BA51" }}
                  >
                    34,800₮
                  </Typography>
                </div>
                <Close />
              </div>

              <Typography sx={{ display: "flex", textAlign: "left" }}>
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <Button>
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
                </Button>
                <input
                  type="text"
                  placeholder="1"
                  style={{
                    border: "none",
                    textAlign: "center",
                    paddingTop: 4,
                    paddingBottom: 4,
                    fontWeight: 600,
                    width: "20%",
                    fontSize: 16,
                  }}
                />
                <Button>
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
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            position={"absolute"}
            bottom={0}
            boxShadow={6}
            py={10}
          >
            <Grid
              item
              xs={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              pl={15}
            >
              <Typography variant="body1" component="h6">
                Нийт төлөх дүн
              </Typography>
              <Typography variant="body1" fontWeight={600} component="h6">
                34,800₮
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={() => setIsDrawerOpen(false)}
                variant="contained"
                sx={{
                  bgcolor: "#18BA51",
                  boxShadow: "none",
                  mb: 10,
                  py: 2,
                  px: 20,
                }}
              >
                Захиалах
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </>
  );
};
