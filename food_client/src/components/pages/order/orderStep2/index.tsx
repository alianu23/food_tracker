import { Button, Input } from "@/components/core";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const OrderStep2 = ({ baskets, sum, formik }: any) => {
  const router = useRouter();

  return (
    <Box>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Image
          alt="stepordersvg"
          width={45}
          height={45}
          src="/logo_svg/orderStep.svg"
        />
        <div>
          <Typography component="p" variant="subtitle2">
            Алхам 2
          </Typography>
          <Typography component="p">Захиалга баталгаажуулах</Typography>
          <Typography variant="body2" component="p" sx={{ color: "#0468C8" }}>
            Хүлээгдэж байна
          </Typography>
        </div>
      </Box>

      <Stack my={5} boxShadow={3} gap={10} p={5} borderRadius={2}>
        {baskets?.foods?.map((food: any) => (
          <Box
            key={food._id}
            display={"flex"}
            gap={3}
            borderTop={1}
            borderBottom={1}
            py={5}
            borderColor={"#D6D8DB"}
          >
            <img
              alt="basketFood img"
              width={200}
              height={170}
              style={{}}
              src={food.food.image}
            />

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
                {food.food.price}₮ * {food.count} ={" "}
                {food.food.price * food.count}
              </Typography>
              <Typography sx={{ display: "flex", textAlign: "left" }}>
                {food.food.description}
              </Typography>
            </div>
          </Box>
        ))}
        <Grid container bottom={0} py={10} px={10}>
          <Grid
            item
            xs={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Typography variant="body1" component="h6">
              Нийт төлөх дүн
            </Typography>
            <Typography variant="body1" fontWeight={600} component="h6">
              {sum}₮
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={formik.handleSubmit} label={"Захиалах"} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
