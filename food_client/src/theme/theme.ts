import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { shadows } from "@mui/system";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  spacing: 4,
  palette: { secondary: { main: "#FFA629" } },
});
