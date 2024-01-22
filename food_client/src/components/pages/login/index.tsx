import React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button as MuiBtn,
} from "@mui/material";
import { Button } from "@/components/core";
import { Input } from "@/components/core";

export const LoginPage = () => {
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
          Нэвтрэх
        </Typography>
        <Stack width={"100%"} display={"flex"} alignItems={"flex-end"}>
          <Input label="И-майл" desc={"И-майл хаягаа оруулна уу"} />
          <Input
            label="Нууц үг"
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <MuiBtn onClick={() => router.push("/forgotpassword")} sx={{ mb: 8 }}>
            Нууц үг сэргээх
          </MuiBtn>
          <Button label={"Нэвтрэх"} disabled={false} />
        </Stack>
        <Typography variant="subtitle2" my={8}>
          Эсвэл
        </Typography>
        <Button
          onClick={() => router.push("/signup")}
          label={"Бүртгүүлэх"}
          btnType="outlined"
        />
      </Box>
    </Container>
  );
};
