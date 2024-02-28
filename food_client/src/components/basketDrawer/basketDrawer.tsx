import { ArrowBack } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  Button as MuiButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context";

import emptyBasketData from "@/../../public/assets/images/lottie/emptyBasket.json";
import DrawerCard from "./drawerCard";

type Props = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BasketDrawerProp = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  const { baskets, loading } = useContext(BasketContext);

  const router = useRouter();

  const changeOnclick = () => {
    router.push("/order"), setIsDrawerOpen(false);
  };

  const sum = baskets?.foods
    ?.map((food: any) => food?.food?.price * food.count)
    .reduce((a: any, b: any) => a + b, 0);
  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      sx={{ position: "relative" }}
      onClose={() => {
        setIsDrawerOpen(false);
      }}
    >
      <Box width="590px" textAlign="center">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            py: 4,
            borderBottom: 1,
            borderColor: "#D6D8DB",
          }}
        >
          <Grid item xs={1}>
            <MuiButton
              onClick={() => setIsDrawerOpen(false)}
              sx={{ color: "black" }}
            >
              <ArrowBack />
            </MuiButton>
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ ml: 10 }}
              component="h1"
            >
               Таны сагс
            </Typography>
          </Grid>
        </Grid>
        {!baskets?.foods && (
          <Stack height={"90%"} justifyContent={"center"} alignItems={"center"}>
            <Box
              width={200}
              height={200}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Lottie animationData={emptyBasketData} loop />
            </Box>
            <Typography variant="h6" align="center">
              Хоосон байна
            </Typography>
          </Stack>
        )}

        {baskets?.foods && (
          <DrawerCard
            baskets={baskets}
            loading={loading}
            changeOnclick={changeOnclick}
            sum={sum}
          />
        )}
      </Box>
    </Drawer>
  );
};
