import React, { useContext, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ButtonMenu } from "@/components";
import { FoodCard, InfoCard } from "@/components/cards";
import { CategoryContext } from "@/context/category";
import { FoodContext } from "@/context";

export const MenuComp = () => {
  const { categories } = useContext(CategoryContext);
  const { foodForm } = useContext(FoodContext);
  const [clicked, setClicked] = useState("");
  const [categoryId, setCategoryId] = useState<string[]>([]);

  const handleClick = (value: string) => {
    setClicked(value);
  };

  const getCategoryId = () => {
    const getId = categories
      .filter((category) => category.name === clicked)
      .map((category) => category._id);

    setCategoryId(getId);
  };
  // console.log("Category Id = ", categoryId);

  return (
    <main>
      <Container style={{ marginBottom: 60 }}>
        <Grid container alignItems="stretch" mb={5} gap={10}>
          {categories.map((e) => (
            <Grid key={e._id}>
              <ButtonMenu
                label={e.name}
                btnType={e.name === clicked ? "contained" : "outlined"}
                onClick={() => {
                  handleClick(e.name);
                  getCategoryId();
                }}
              ></ButtonMenu>
            </Grid>
          ))}
        </Grid>

        <div
          style={{
            display: "flex",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <Image alt="" width={22} height={22} src="/logo_svg/dashStar.svg" />
            <Typography variant="h6" marginLeft={2}>
              {" "}
              {clicked}
            </Typography>
          </div>
          <Typography variant="button" marginLeft={2} sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </Typography>
        </div>
        {categoryId.length > 0 && (
          <FoodCard
            category={foodForm.filter((category) =>
              categoryId.includes(category.category as string)
            )}
          />
        )}
      </Container>
    </main>
  );
};
