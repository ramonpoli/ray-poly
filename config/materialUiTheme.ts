"use client";
import { ThemeOptions, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00ffc2",
    },
    secondary: {
      main: "#1c3738",
    },
    background: {
      default: "#171a1c",
      paper: "#1c3738",
    },
    divider: "#B39C4D",
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      disabled: "rgb(0, 178, 135)",
    },
  },
});
