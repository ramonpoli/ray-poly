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
        <Subtitle1>Insights</Subtitle1>
        <Typography variant="h1" fontWeight={600} fontSize={"3.75em"}>
          Personal Website
        </Typography>
        <Typography>
          Elit vis eleifend integer mi odio posuere duis mattis vestibulum
          penatibus libero mi felis massa vivamus porta viverra. Magna etiam
          lorem
        </Typography>
        {/* CTA */}

        <PrimaryButton className={HeroStyles.CTA}>
          Magna etiam lorem
        </PrimaryButton>
      </div>
      <Box flex={2}>
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
