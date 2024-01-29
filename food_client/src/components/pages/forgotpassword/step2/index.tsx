import React, { ChangeEvent } from "react";
import { toast } from "react-toastify";
import MyAxios from "@/utils/axios";

import { Button, Input } from "@/components/core";
import { Box, Container, Stack, Typography } from "@mui/material";

interface IStepProps {
  email: string;
  otp: string;
  handleNext: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepTwo = ({ email, otp, handleNext, handleChangeInput }: IStepProps) => {
  const handleSendOtp = async () => {
    try {
      const data = await MyAxios.post("/verify/otp", {
        email,
        otp,
      });
      handleNext();
    } catch (error) {
      console.log(error);
      toast.error(
        "Verification код буруу байна. Та кодоо дахин шалгаж оруулна уу"
      );
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
            onChange={handleChangeInput}
          />
          <Button label={"Үргэлжлүүлэх"} onClick={handleSendOtp} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepTwo;
