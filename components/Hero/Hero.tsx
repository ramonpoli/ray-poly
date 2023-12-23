import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import HeroStyles from "./Hero.module.scss";
import Subtitle1 from "../Typography/Subtitle1";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

const Hero: FC = () => {
  return (
    <div className={HeroStyles.Hero}>
      <div className={HeroStyles.LeftContent}>
        <Subtitle1>Landing page</Subtitle1>
        <Typography variant="h1" fontWeight={600} fontSize={"3.75em"}>
          Personal Website
        </Typography>
        <Typography>
          Web developer from London with extensive experience in the front-end,
          user experience is my top priority and I love to create the best
          applications out there.
        </Typography>
        <PrimaryButton className={HeroStyles.CTA}>Primary button</PrimaryButton>
      </div>
      <Box flex={2} width={"100%"}>
        <div className={HeroStyles.ImageContainer}>
          <Image
            src="/me.png"
            alt="Ray Poly picture"
            fill={true}
            priority
            className={HeroStyles.Image}
          />
        </div>
      </Box>
    </div>
  );
};
export default Hero;
