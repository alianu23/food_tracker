"use client";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ZoneInfo } from "./zoneInfo";

export const MapDelivery = () => {
  return (
    <Container>
      {/* width={1200} height={616} */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9245.51287873066!2d106.91410023980148!3d47.917852827384515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d969246cb53d827%3A0xeaf75a1777f2b910!2sMongolian%20National%20Art%20Gallery!5e0!3m2!1sen!2smn!4v1710937365001!5m2!1sen!2smn"
        width="600"
        height="450"
        style={{ border: 0, width: 1200, height: 616 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div style={{ display: "flex", alignItems: "center", marginLeft: 15 }}>
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
