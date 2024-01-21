import { DiscountFoodCard, FoodCard, InfoCard } from "@/components/cards";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const MenuComp = () => {
  return (
    <main>
      {/* <div className="wrapper">
    <div className="wrapper-top">
      <h1>Hello</h1>
    </div>

    <div className="wrapper-bottom">
      <h1>Hello</h1>
    </div>
  </div>
  <div>
    <button className="btn btn-primary">click</button>
    <button className="btn btn-secondary">click</button>
    <button className="btn btn-success">click</button>
    <button className="btn btn-error">click</button>
  </div> */}
      <Container style={{ marginBottom: 60 }}>
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
        <DiscountFoodCard />
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
