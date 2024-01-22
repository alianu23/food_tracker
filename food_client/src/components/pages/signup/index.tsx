import React from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { CloudOutlined } from "@mui/icons-material";
import { Button } from "@/components/core";
import { Input } from "@/components/core";

export const Signup = () => {
  const router = useRouter();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 35,
        marginBottom: 30,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 500,
        }}
      >
        <Typography variant="h5" fontWeight={600} textAlign={"center"}>
          Бүртгүүлэх
        </Typography>
        <Stack width={"100%"} display={"flex"}>
          <Input label="Нэр" desc={"Нэрээ оруулна уу"} />
          <Input label="И-майл" desc={"И-майл хаягаа оруулна уу"} />
          <Input label="Хаяг" desc={"Та хаягаа оруулна уу"} />
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
          <Typography
            variant="subtitle2"
            mb={8}
            mt={8}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            <CloudOutlined />
            Үйлчилгээний нөхцөл зөвшөөрөх
          </Typography>
          <Button label={"Бүртгүүлэх"} disabled={false} />
        </Stack>
        <Typography variant="subtitle2" my={8}>
          Эсвэл
        </Typography>
        <Button
          onClick={() => router.push("/login")}
          label={"Нэвтрэх"}
          btnType="outlined"
        />
      </Box>
    </Container>
  );
};
