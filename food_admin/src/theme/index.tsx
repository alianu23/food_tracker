"use client";
import { PropsWithChildren } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";

import { theme } from "./theme";
// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
