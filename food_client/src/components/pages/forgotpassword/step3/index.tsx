import { useState } from "react";
import { useRouter } from "next/navigation";

import * as yup from "yup";
import Swal from "sweetalert2";
import { Box, Container, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import { Button, Input } from "@/components/core";
import MyAxios from "@/utils/axios";

interface IStepProps {
  email: string;
  handleNext: () => void;
}

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Нууц үгийн талбарыг заавал бөглөнө үү")
    .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой"),
  re_password: yup
    .string()
    .required("Нууц үгийн талбарыг заавал бөглөнө үү")
    .oneOf([yup.ref("password")], "Нууц үг хоорондоо таарахгүй байна"),
});

const StepThree = ({ email, handleNext }: IStepProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    onSubmit: ({ password }) => {
      handleRePassword(password);
    },
    initialValues: { password: "", re_password: "" },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
  });

  const handleRePassword = async (password: string) => {
    try {
      setLoading(true);
      const data = await MyAxios.put("/verify/repassword", {
        email,
        password: password,
      });
      handleNext();
      savePassword();
    } catch (error) {
      console.log(error);
      toast.error(
        "Verification код буруу байна. Та кодоо дахин шалгаж оруулна уу"
      );
    } finally {
      setLoading(false);
    }
  };

  const savePassword = async () => {
    await Swal.fire({
      title: "Таны нууц үг амжилттай солигдлоо",
      text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
      icon: "success",
    });
    router.replace("/login");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            name="password"
            desc="Нууц үгээ оруулна уу"
            label="Нууц үг"
            value={formik.values.password}
            errorText={formik.errors.password}
            onChange={formik.handleChange}
            showPassword
          />
          <Input
            desc="Нууц үгээ давтан оруулна уу"
            label="Нууц үг давтах"
            name="re_password"
            value={formik.values.re_password}
            errorText={formik.errors.re_password}
            onChange={formik.handleChange}
            showPassword
          />
          <Button
            disabled={loading}
            label={"Сэргээх"}
            onClick={formik.handleSubmit}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
