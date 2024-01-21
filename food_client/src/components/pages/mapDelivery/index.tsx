"use client";
import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ZoneInfo } from "./zoneInfo";

export const MapDelivery = () => {
  return (
    <Container>
      <Image alt="mapPng" width={1200} height={616} src="/mapPng/map.png" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image alt="" width={22} height={22} src="/logo_svg/dashStar.svg" />
        <Typography variant="h6" marginLeft={2}>
          {" "}
          Хүргэлтийн бүс дэхь хаягууд
        </Typography>
      </div>
      <Grid
        container
        gap={10}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginTop={8}
      >
        <Grid xs={5} boxShadow={1} borderRadius={3} padding={7}>
          <Typography
            borderBottom={1}
            borderColor="#18BA51"
            paddingBottom={2}
            variant="h6"
            fontWeight={600}
          >
            A бүс
          </Typography>
          <ZoneInfo />
        </Grid>
        <Grid xs={5} boxShadow={1} borderRadius={3} padding={7}>
          {" "}
          <Typography
            borderBottom={1}
            borderColor="#18BA51"
            paddingBottom={2}
            variant="h6"
            fontWeight={600}
          >
            Б бүс
          </Typography>
          <ZoneInfo />
        </Grid>
      </Grid>
    </Container>
  );
};
