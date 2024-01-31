"use client";

import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

import { Container } from "@mui/material";

import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import MyAxios from "@/utils/axios";

export const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
    re_password: "",
  });

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const sendToEmail = async () => {
    setLoading(true);
    try {
      const data = await MyAxios.post("/verify/send-email", {
        email: user.email,
      });
      handleNext();
    } catch (error) {
      toast.error("Email илгээхэд алдаа гарлаа. Та email-ээ дахин шалгана уу");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          sendToEmail={sendToEmail}
          handleChangeInput={handleChangeInput}
          loading={loading}
        />
      )}
      {activeStep === 2 && (
        <StepTwo email={user.email} handleNext={handleNext} />
      )}
      {activeStep === 3 && (
        <StepThree email={user.email} handleNext={handleNext} />
      )}
    </Container>
  );
};
