"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button as MuiBtn,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input } from "@/components/core";
import { UserContext } from "@/context";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "100 тэмдэгтээс урт байж болохгүй")
    .required("Email талбарыг заавал бөглөнө үү")
    .email("Бүртгэлтэй хаяг оруулна уу")
    .matches(/\w[^A-Z]+@.mail/i, "Заавал gmail байх ёстой"),
  password: yup
    .string()
    .required("Нууц үгийн талбарыг заавал бөглөнө үү")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой"),
});

export const LoginPage = () => {
  const { login, userForm, loading } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      login(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

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
            errorText={formik.errors.email}
            value={formik.values.email}
            desc={"И-майл хаягаа оруулна уу"}
            name="email"
            onChange={formik.handleChange}
          />
          <Input
            label="Нууц үг"
            errorText={formik.errors.password}
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <MuiBtn onClick={() => router.push("/forgotpassword")} sx={{ mb: 8 }}>
            Нууц үг сэргээх
          </MuiBtn>
          <Button
            label={"Нэвтрэх"}
            onClick={formik.handleSubmit}
            disabled={loading}
          />
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
