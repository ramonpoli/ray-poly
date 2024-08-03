import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import HeroStyles from "./Hero.module.scss";
import Subtitle1 from "../Typography/Subtitle1/Subtitle1";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import Title from "../Typography/Title/Title";
import CenteredImage from "../CenteredImage/CenteredImage";

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
        <PrimaryButton className={HeroStyles.CTA}>More about me</PrimaryButton>
      </div>
      <Box flex={2} width={"100%"}>
        <CenteredImage src={"/me.JPG"} alt={"Ray Poly's profile image"} tall />
      </Box>
    </div>
  );
};
export default Hero;
