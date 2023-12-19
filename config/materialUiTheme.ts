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
      default: "#000f08",
      paper: "#1c3738",
    },
    divider: "#B39C4D",
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "#33FFCE",
      disabled: "rgb(0, 178, 135)",
    },
  },
});
