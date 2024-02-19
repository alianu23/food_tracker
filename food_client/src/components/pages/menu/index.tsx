import { ButtonMenu } from "@/components";
import { FoodCard, InfoCard } from "@/components/cards";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { foodMenu } from "./layer";

export const MenuComp = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <main>
      <Container style={{ marginBottom: 60 }}>
        <Grid container alignItems="stretch" mb={5} gap={10}>
          {foodMenu.map((e) => (
            <Grid>
              <ButtonMenu
                label={e.layer}
                btnType={clicked ? "contained" : "outlined"}
                onClick={() => handleClick()}
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image alt="" width={22} height={22} src="/logo_svg/dashStar.svg" />
            <Typography variant="h6" marginLeft={2}>
              {" "}
              Хямдралтай
            </Typography>
          </div>
          <Typography variant="button" marginLeft={2} sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </Typography>
        </div>
        <FoodCard />
      </Container>
      <Container>
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image alt="" width={22} height={22} src="/logo_svg/dashStar.svg" />
            <Typography variant="h6" marginLeft={2}>
              {" "}
              Үндсэн хоол
            </Typography>
          </div>
          <Typography variant="button" marginLeft={2} sx={{ color: "#18BA51" }}>
            Бүгдийг харах
          </Typography>
        </div>
        <FoodCard />
      </Container>
    </main>
  );
};
