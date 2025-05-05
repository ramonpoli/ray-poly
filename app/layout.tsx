import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/materialUiTheme";
import { StrictMode } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import HomepageStyles from "../styles/homepage.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Poly's website",
  description:
    "Ramon Polidura is a web developer, specialized in front-end development.",
  applicationName: "ray-poly-personal-website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ray Poly",
    "Ramon Polidura",
    "Polidura Rueda",
    "Web developer",
    "Website development",
    "London",
  ],
  authors: [
    { name: "Ray Poly", url: "https://raypoly.netlify.app" },
    { name: "Ramon Polidura", url: "https://raypoly.netlify.app" },
  ],
  creator: "Ray Poly",
  publisher: "Ray Poly",
  openGraph: {
    title: "Ramon Polidura",
    description:
      "Ramon Polidura is a web developer, specialized in front-end development.",
    type: "website",
    image: "img/logos/logo.png",
    site_name: "Ray Poly's website",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
          <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ""} />
          <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
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
