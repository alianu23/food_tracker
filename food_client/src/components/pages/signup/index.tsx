import React, { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { CloudOutlined } from "@mui/icons-material";
import { Button, Input } from "@/components/core";
import MyAxios from "@/utils/axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { UserContext } from "@/context";

export const Signup = () => {
  const { signup, handleChangeInput } = useContext(UserContext);

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
          <Input
            label="Нэр"
            name="name"
            onChange={handleChangeInput}
            desc={"Нэрээ оруулна уу"}
          />
          <Input
            label="И-майл"
            name="email"
            onChange={handleChangeInput}
            desc={"И-майл хаягаа оруулна уу"}
          />
          <Input
            label="Хаяг"
            name="address"
            onChange={handleChangeInput}
            desc={"Та хаягаа оруулна уу"}
          />
          <Input
            name="password"
            onChange={handleChangeInput}
            label="Нууц үг"
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <Input
            name="re_password"
            onChange={handleChangeInput}
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
          <Button onClick={signup} label={"Бүртгүүлэх"} disabled={false} />
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
