import { Button, Input } from "@/components/core";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const OrderStep2 = () => {
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
      <Stack
        my={10}
        boxShadow={3}
        gap={10}
        p={5}
        borderRadius={2}
        position={"relative"}
        height={670}
      >
        <Box
          display={"flex"}
          gap={3}
          borderTop={1}
          borderBottom={1}
          py={5}
          borderColor={"#D6D8DB"}
        >
          <Image
            alt="basketFood img"
            width={250}
            height={170}
            style={{}}
            src="/foodImg/modalPng.png"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" fontWeight={600} component="h2">
              Main Pizza
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              py={2}
              sx={{ color: "#18BA51" }}
            >
              34,800₮
            </Typography>
            <Typography sx={{ display: "flex", textAlign: "left" }}>
              Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
            </Typography>
          </div>
        </Box>
        <Grid container position={"absolute"} bottom={0} py={10} px={10}>
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
              34,800₮
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={() => router.push("/")} label={"Захиалах"} />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};
