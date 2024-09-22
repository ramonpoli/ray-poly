import React from "react";
import Head from "next/head";
import getConfig from "next/config";
import appDefaults from "../../config/app-defaults";

const MetaData: React.FC = () => {
  const defaultImageUrl = `localhost/img/logo.png`; // `${config.siteDomain}/img/logo.png`;
  const title = appDefaults.title;
  const description = appDefaults.description;

  const ogTitle = title;
  const ogDescription = description;
  const ogImage = defaultImageUrl;
  const ogType = "website";

  const noIndex = false; //config.robotsNoIndex;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#ffffff"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ray Poly Website" />
      <meta property="og:description" content={ogDescription} />

      {/* imports */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
  );
};

export default MetaData;
