"use client";

import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Stack,
  FormControl,
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  label: string;
  showPassword?: boolean;
  desc: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  name,
  label,
  desc,
  showPassword = false,
  onChange,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <>
      <FormControl sx={{ my: 2 }} variant="outlined" fullWidth>
        <FormLabel sx={{ my: "4px", color: "black" }}>{label}</FormLabel>
        <OutlinedInput
          sx={{ backgroundColor: "#F7F7F8" }}
          onChange={onChange}
          name={name}
          placeholder={desc}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </>
  );
};
