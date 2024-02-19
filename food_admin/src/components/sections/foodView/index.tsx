"use client";

import { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";

// ----------------------------------------------------------------------
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import Iconify from "@/components/iconify";
import { FoodModal } from "@/components/";
import { FoodContext } from "@/context";

// ----------------------------------------------------------------------

export default function FoodView() {
  const {
    foods,
    handleOpenFilter,
    openFilter,
    handleCloseFilter,
    handleFileChange,
    createFood,
    loading,
  } = useContext(FoodContext);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Хоолны жагсаалт</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => handleOpenFilter()}
        >
          Шинэ хоол нэмэх
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods.map((food: any) => (
          <Grid key={food._id} xs={12} sm={6} md={3}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>
      {openFilter && (
        <FoodModal
          open={openFilter}
          handleClose={handleCloseFilter}
          handleFileChange={handleFileChange}
          handleSave={createFood}
          loading={loading}
        />
      )}
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
