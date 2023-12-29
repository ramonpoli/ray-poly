import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import MetaData from "../components/layout/MetaData";
import {  ThemeProvider } from "@mui/material";
import { theme } from "@/config/materialUiTheme";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Poly blog page",
  description: "Generated by Ray Poly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <MetaData />
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </StrictMode>
  );
}
