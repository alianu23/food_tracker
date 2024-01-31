import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { Box, Container, Stack, Typography } from "@mui/material";
import * as yup from "yup";

import MyAxios from "@/utils/axios";
import { Button, Input } from "@/components/core";
import { useFormik } from "formik";

interface IStepProps {
  email: string;
  handleNext: () => void;
}

const validationSchema = yup.object({
  otp: yup.string().min(4, "Код 4 оронтой байна"),
});

const StepTwo = ({ email, handleNext }: IStepProps) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    onSubmit: ({ otp }) => {
      handleSendOtp(otp);
    },
    initialValues: { otp: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

  const handleSendOtp = async (otp: string) => {
    try {
      setLoading(true);
      const data = await MyAxios.post("/verify/otp", {
        email,
        otp: otp,
      });
      handleNext();
    } catch (error) {
      console.log(error);
      toast.error(
        "Verification код буруу байна. Та кодоо дахин шалгаж оруулна уу"
      );
    } finally {
      setLoading(false);
    }
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
          Нууц үг сэргээх
        </Typography>
        <Typography>
          Таны <span style={{ color: "#18BA51" }}>{email}</span> хаяг руу
          сэргээх код илгээх болно.
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            desc="Нууц үгээ оруулна уу"
            name="otp"
            label="Нууц үг сэргээх код"
            errorText={formik.errors.otp}
            value={formik.values.otp}
            onChange={formik.handleChange}
          />
          <Button
            disabled={loading}
            label={"Үргэлжлүүлэх"}
            onClick={formik.handleSubmit}
          />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepTwo;
