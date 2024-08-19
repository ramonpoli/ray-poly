import { Box, Typography } from "@mui/material";
import { FC } from "react";
import HeroStyles from "./Hero.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import Title from "../Typography/Title/Title";
import CenteredImage from "../CenteredImage/CenteredImage";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className={HeroStyles.Hero}>
      <div className={HeroStyles.LeftContent}>
        <Title>Ramon Polidura Rueda</Title>
        <Typography>
          Senior web developer delivering excellent user experience since 2011.
          Code practices and UX are my top priorities when it comes to
          delivering a project, no shortcuts, no compromises.
        </Typography>
        <PrimaryButton className={HeroStyles.CTA}>
          <Link href={"/about"}>
            <Typography color={"text.secondary"}>More about me</Typography>
          </Link>
        </PrimaryButton>
      </div>
      <Box flex={2} width={"100%"}>
        <CenteredImage src={"/me.JPG"} alt={"Ray Poly's profile image"} tall />
      </Box>
    </div>
  );
};
export default Hero;
