import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button as MuiBtn,
} from "@mui/material";
import { Button, Input } from "@/components/core";
import { UserContext } from "@/context/userProvider";

export const LoginPage = () => {
  const { login, handleChangeInput } = useContext(UserContext);

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
          <Input
            label="И-майл"
            desc={"И-майл хаягаа оруулна уу"}
            name="email"
            onChange={handleChangeInput}
          />
          <Input
            label="Нууц үг"
            name="password"
            onChange={handleChangeInput}
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <MuiBtn onClick={() => router.push("/forgotpassword")} sx={{ mb: 8 }}>
            Нууц үг сэргээх
          </MuiBtn>
          <Button label={"Нэвтрэх"} onClick={login} disabled={false} />
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
