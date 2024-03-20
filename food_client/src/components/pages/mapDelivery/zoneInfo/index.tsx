import React from "react";
import { Grid, Typography } from "@mui/material";

const zones = [
  "Нархан хотхон",
  "26-р байр",
  "26-р байр",
  "45-р байр",
  "3-р байр",
  "Хоймор хотхон",
  "Хоймор хотхон ",
];

export const ZoneInfo = () => {
  return (
    <div style={{ marginTop: 25 }}>
      {zones.map((zone, i) => (
        <Grid key={i} container pt={3}>
          <Grid item xs={6}>
            <Typography>{zone}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{zone}</Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};
