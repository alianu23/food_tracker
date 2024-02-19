"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  Box,
  Card,
  Stack,
  Typography,
  Link,
  Button as MuiBtn,
  Divider,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";

import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";

import { bgGradient } from "@/theme/css";

import Logo from "@/components/logo";
import Iconify from "@/components/iconify";

import { Button, Input } from "@/components/core";
import { AuthContext } from "@/context";

// ----------------------------------------------------------------------

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "100 тэмдэгтээс урт байж болохгүй")
    .required("Email талбарыг заавал бөглөнө үү")
    .email("Бүртгэлтэй хаяг оруулна уу"),
  password: yup
    .string()
    .required("Нууц үгийн талбарыг заавал бөглөнө үү")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой"),
});

export default function LoginView() {
  const theme = useTheme();
  const router = useRouter();
  const { login, user } = useContext(AuthContext);
  console.log("USER", user);

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      login(email, password);
    },
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, []);

  const renderForm = (
    <>
      <Stack spacing={3}>
        <Input
          label="И-майл"
          desc={"И-майл хаягаа оруулна уу"}
          name="email"
          errorText={formik.errors.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <Input
          label="Нууц үг"
          name="password"
          errorText={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          desc={"Нууц үгээ оруулна уу"}
          showPassword={true}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <Button label="Login" onClick={formik.handleSubmit} />
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Minimal</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <MuiBtn
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </MuiBtn>

            <MuiBtn
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </MuiBtn>

            <MuiBtn
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </MuiBtn>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
