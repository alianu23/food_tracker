import { Button as MuiButton, Stack } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface IButtonProps {
  label: ReactNode;
  disabled?: boolean;
  btnType?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

export const Button = ({
  label,
  disabled = false,
  btnType = "contained",
  onClick,
}: IButtonProps) => {
  return (
    <Stack width={"100%"}>
      <MuiButton
        onClick={onClick}
        color="primary"
        variant={btnType}
        sx={{
          fontSize: "1rem",

          py: 2,
          my: 1,
          color:
            btnType === "outlined" || btnType === "text" ? "#18ba51" : "white",
          border: btnType === "outlined" ? 1 : 0,
          borderColor: btnType === "outlined" ? "#18ba51" : "",
        }}
        disabled={disabled}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};

export const ButtonMenu = ({
  label,
  disabled = false,
  btnType = "contained",
  onClick,
}: IButtonProps) => {
  return (
    <Stack width={"100%"}>
      <MuiButton
        onClick={onClick}
        color="primary"
        variant={btnType}
        sx={{
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: 5,
          boxShadow: "none",
          py: 2,
          mx: 2,
          px: 6,
          my: 2,
          color:
            btnType === "outlined" || btnType === "text" ? "black" : "white",
          border: btnType === "outlined" ? 1 : 0,
          borderColor: btnType === "outlined" ? "#D6D8DB" : "",
        }}
        disabled={disabled}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};
