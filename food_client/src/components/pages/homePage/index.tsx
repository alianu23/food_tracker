import { FoodCard, InfoCard } from "@/components/cards";

import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Dashboard = () => {
  return (
    <main>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor="#18BA51"
        my={5}
        gap={20}
        py={15}
        sx={{ backgroundImage: `url(${"/logo_svg/footer.svg"})` }}
      >
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
          <Typography color={"white"}>consectetur adipiscing elit.</Typography>
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
