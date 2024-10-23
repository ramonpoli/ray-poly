'use client'
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import HeroStyles from "./Hero.module.scss";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import Title from "@/components/Typography/Title/Title";
import CenteredImage from "@/components/CenteredImage/CenteredImage";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  cta?: {
    onClick: () => void;
    label: string;
  }
  image: {
    src: string;
    alt: string;
  }
}
const Hero: FC<Props> = ({ title, subtitle, cta, image }) => {
  return (
    <section className={HeroStyles.Hero}>
      <div className={HeroStyles.LeftContent}>
        <Title>{title}</Title>
        {subtitle ? <Typography>
          {subtitle}
        </Typography> : null}
        {cta ? <PrimaryButton className={HeroStyles.CTA}>
          <Link href={"/about"} onClick={cta.onClick}>
            <Typography color={"text.secondary"}>{cta.label}</Typography>
          </Link>
        </PrimaryButton> : null}
      </div>
      <Box flex={2} width={"100%"}>
        <CenteredImage src={image.src} alt={image.alt} tall />
      </Box>
    </section>
  );
};
export default Hero;
