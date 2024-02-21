import { Add, Close, Remove } from "@mui/icons-material";
import { Grid, Typography, Button as MuiButton } from "@mui/material";
import React from "react";

type Props = {
  img: string;
  _id: String;
  name: string;
  description: string;
  price: number;
  count: number;
};

export const BasketFoods = ({ foods }: any) => {
  return (
    <>
      {foods.map((food: any) => (
        <Grid container key={food._id} p={2} py={6}>
          <Grid item xs={6}>
            <img
              alt="basketFood img"
              width={250}
              height={170}
              style={{}}
              src={food.food.image}
            />
          </Grid>
          <Grid item xs={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h5" fontWeight={600} component="h2">
                  {food.food.name}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  py={2}
                  sx={{ color: "#18BA51" }}
                >
                  {food.food.price}₮
                </Typography>
              </div>
              <Close />
            </div>

            <Typography sx={{ display: "flex", textAlign: "left" }}>
              {food.food.description}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <MuiButton>
                <Remove
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    py: 1,
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
              <input
                type="text"
                placeholder="1"
                // value={food.count}
                style={{
                  border: "none",
                  textAlign: "center",
                  paddingTop: 4,
                  paddingBottom: 4,
                  fontWeight: 600,
                  width: "20%",
                  fontSize: 16,
                }}
              />
              <MuiButton>
                <Add
                  sx={{
                    bgcolor: "#18BA51",
                    color: "white",
                    width: "70%",
                    height: "30px",
                    py: 1,
                    borderRadius: 2,
                  }}
                />
              </MuiButton>
            </div>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
