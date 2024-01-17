"use client";
import React from "react";
import { Grid, Button, Typography, Container } from "@mui/material";
import { DiscountFoodCard, FoodCard, InfoCard } from "@/components/cards";
import Image from "next/image";
import { Fullscreen } from "@mui/icons-material";

export default function Home() {
  return (
    <main>
      <Container style={{ marginBottom: 60 }}>
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bgcolor="#18BA51"
          my={5}
          gap={20}
          py={15}
          position={"relative"}
        >
          <Image
            alt="dewsger"
            width={100}
            height={100}
            src="/logo_svg/footer.svg"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
          <Grid item>
            <Typography variant="h4" fontWeight={800} color={"white"}>
              Pinecone
            </Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              color={"white"}
              borderBottom={1}
              pb={4}
            >
              Food delivery
            </Typography>
            <Typography color={"white"} pt={4}>
              Horem ipsum dolor sit amet,
            </Typography>
            <Typography color={"white"}>
              consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item>
            <Image
              alt="Home Food img"
              width={588}
              height={438}
              src="/foodImg/dashFood.png"
            />
          </Grid>
        </Grid>
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
