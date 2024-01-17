"use client";
import { Grid, Button, Typography, Container } from "@mui/material";
import { DiscountFoodCard, FoodCard, InfoCard } from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{ marginLeft: 50, marginRight: 50 }}>
      <Container style={{ marginBottom: 60 }}>
        <div style={{ marginBottom: 50 }}>
          <InfoCard />
        </div>
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
}
