import React, { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Stack, Typography } from "@mui/material";
import { CloudOutlined } from "@mui/icons-material";
import { Button, Input } from "@/components/core";
import * as yup from "yup";
import { UserContext } from "@/context";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Нэрээ оруулна уу"),
  email: yup
    .string()
    .max(100, "100 тэмдэгтээс урт байж болохгүй")
    .required("Email талбарыг заавал бөглөнө үү")
    .email("Бүртгэлтэй хаяг оруулна уу"),

  address: yup.string().required("Хаягаа оруулна уу"),
  password: yup
    .string()
    .required("Нууц үгийн талбарыг заавал бөглөнө үү")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password")], "Нууц үг хоорондоо таарахгүй байна"),
});

export const Signup = () => {
  const { signup } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ name, email, password, address }) => {
      signup(name, email, password, address);
    },
    initialValues: {
      email: "",
      password: "",
      address: "",
      re_password: "",
      name: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

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
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
            desc={"Нэрээ оруулна уу"}
          />
          <Input
            label="И-майл"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            errorText={formik.errors.email}
            desc={"И-майл хаягаа оруулна уу"}
          />
          <Input
            label="Хаяг"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            errorText={formik.errors.address}
            desc={"Та хаягаа оруулна уу"}
          />
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            label="Нууц үг"
            desc={"Нууц үгээ оруулна уу"}
            showPassword={true}
          />
          <Input
            name="re_password"
            value={formik.values.re_password}
            onChange={formik.handleChange}
            errorText={formik.errors.re_password}
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
          <Button
            onClick={formik.handleSubmit}
            label={"Бүртгүүлэх"}
            disabled={false}
          />
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
