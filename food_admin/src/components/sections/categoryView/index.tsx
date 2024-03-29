"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/iconify";

import CategoryCard from "./category-card";
import CategorySort from "./category-sort";
import CategorySearch from "./category-search";

// ----------------------------------------------------------------------
import { faker } from "@faker-js/faker";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CategoryModal } from "@/components/";
import axios, { AxiosError } from "axios";
import { CategoryContext } from "@/context";

// ----------------------------------------------------------------------

const CATEGORY_TITLES = [
  "Whiteboard Templates",
  "Tesla Cybertruck-inspired",
  "Designify Agency",
  "✨What is Done is Done ✨",
  "Fresh Prince",
  "Six Socks Studio",
  "vincenzo de cotiis",
];

export default function CategoryView() {
  const {
    categories,
    handleOpenFilter,
    openFilter,
    handleCloseFilter,
    handleChange,
    handleFileChange,
    createCategory,
    loading,
  } = useContext(CategoryContext);
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Ангилалын жагсаалт</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => handleOpenFilter()}
        >
          Шинэ ангилал
        </Button>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CategorySearch categories={categories} />
        <CategorySort
          options={[
            { value: "latest", label: "Cүүлийнх" },
            { value: "popular", label: "Түгээмэл" },
            { value: "oldest", label: "Өмнөх" },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {categories?.map((category: any) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </Grid>
      {openFilter && (
        <CategoryModal
          open={openFilter}
          handleClose={handleCloseFilter}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSave={createCategory}
          loading={loading}
        />
      )}
    </Container>
  );
}
