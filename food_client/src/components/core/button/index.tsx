import React, { ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";

interface IButtonProps {
  label: ReactNode;
  disabled: boolean;
  btnType?: "contained" | "outlined";
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  disabled = false,
  btnType = "contained",
}: IButtonProps) => {
  return (
    <div>
      <MuiButton
        onClick={onClick}
        disabled={disabled}
        variant={btnType}
        sx={{
          bgcolor: "#18BA51",
          borderColor: "divider",
          color: "white",
          boxShadow: "none",
          py: 2,
          px: 20,
        }}
      >
        {label}
      </MuiButton>
    </div>
  );
};
