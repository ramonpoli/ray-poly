import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import MetaData from "../components/layout/MetaData";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/materialUiTheme";
import { StrictMode } from "react";
import { GoogleTagManager } from '@next/third-parties/google'

import HomepageStyles from "../styles/homepage.module.scss";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Ramon Polidura",
  description: "Ramon Polidura is a web developer, specialized in front-end development.",
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
        <GoogleTagManager gtmId="G-K43THS25FL" />
          <MetaData />
          <body className={inter.className}>
            <Header />
            <main className={HomepageStyles.Main}>{children}</main>
            <Footer />
          </body>
        </html>
      </ThemeProvider>
    </StrictMode>
  );
}
