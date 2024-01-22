import { Button, Input } from "@/components/core";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export const Step2 = () => {
  const router = useRouter();
  return (
    <Container
      sx={{
        marginTop: 35,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <Box
        width={500}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          Шинэ нууц үг зохиох
        </Typography>
        <Stack
          width={"100%"}
          display={"flex"}
          alignItems={"flex-end"}
          spacing={10}
        >
          <Input
            label="Нууц үг"
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <Input
            label="Нууц үг давтах"
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />

          <Button
            onClick={() => router.push("/")}
            label={"Үргэлжлүүлэх"}
            disabled={false}
          />
        </Stack>
      </Box>
    </Container>
  );
};
