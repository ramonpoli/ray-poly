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
    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': primaryColor,
          '--TextField-brandBorderHoverColor': primaryColor,
          '--TextField-brandBorderFocusedColor': primaryColor,
          '& label': {
            color: 'var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&::before, &::after': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)',
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
          },
        },
      },
    },

  },
});
