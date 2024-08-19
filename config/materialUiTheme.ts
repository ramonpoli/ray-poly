"use client";
import { createTheme } from "@mui/material/styles";

const primaryColor = "#00ffc2";
const secondaryColor = "#1c3738";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      default: "#171a1c",
      paper: secondaryColor,
    },
    divider: "#B39C4D",
    text: {
      primary: "#FFFFFF",
      secondary: secondaryColor,
      disabled: "rgb(0, 178, 135)",
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: secondaryColor,
        },
      },
    },
  },
});
