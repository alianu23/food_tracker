"use client";

import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

import { Container } from "@mui/material";

import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import MyAxios from "@/utils/axios";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(1);
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
    try {
      const data = await MyAxios.post("/verify/send-email", {
        email: user.email,
      });
      handleNext();
    } catch (error) {
      toast.error("Email илгээхэд алдаа гарлаа. Та email-ээ дахин шалгана уу");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          sendToEmail={sendToEmail}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && (
        <StepThree
          password={user.password}
          email={user.email}
          re_password={user.re_password}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
    </Container>
  );
};

export default Stepper;
