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
        <Subtitle1>Landing page</Subtitle1>
        <Title>Personal Website</Title>
        <Typography>
          Web developer from London with extensive experience in the front-end,
          user experience is my top priority and I love to create the best
          applications out there.
        </Typography>
        <PrimaryButton className={HeroStyles.CTA}>Primary button</PrimaryButton>
      </div>
      <Box flex={2} width={"100%"}>
        <CenteredImage src={"/me.png"} alt={"Ray Poly's profile image"} tall />
      </Box>
    </div>
  );
};
export default Hero;
