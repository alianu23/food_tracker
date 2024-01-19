import React, { ChangeEvent } from "react";
import { OutlinedInput, Stack, TextField, Typography } from "@mui/material";

interface IInputProps {
  label: string;
  onChange: { e: ChangeEvent<HTMLInputElement> };
}

export const Input = ({ label, onChange }: IInputProps) => {
  return (
    <Stack>
      <Typography sx={{ fontSize: 14 }}>{label}</Typography>
      <TextField />
    </Stack>
  );
};
