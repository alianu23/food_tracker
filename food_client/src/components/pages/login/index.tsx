import React from "react";
import { useRouter } from "next/navigation";
import { Container, Stack, Typography } from "@mui/material";
import { Button } from "@/components/core";
import { Input } from "@/components/core";

export const LoginPage = () => {
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 35,
        width: 500,
        marginBottom: 30,
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
        <Typography variant="subtitle2" mb={8}>
          Нууц үг сэргээх
        </Typography>
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
    </Container>
  );
};
