import { Button, Input } from "@/components/core";
import { Box, Container, Stack, Typography } from "@mui/material";

import React, { ChangeEvent } from "react";

interface IStepProps {
  email: string;
  sendToEmail: () => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StepOne = ({ email, sendToEmail, handleChangeInput }: IStepProps) => {
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
        <Input
          label="Имэйл"
          onChange={handleChangeInput}
          name="email"
          desc="Имэйл хаягаа оруулна уу"
        />
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label={"Үргэлжлүүлэх"} onClick={sendToEmail} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepOne;
