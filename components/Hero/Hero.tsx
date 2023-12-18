import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import HeroStyles from "./Hero.module.scss";

const Hero: FC = () => {
  return (
    <div className={HeroStyles.Hero}>
      <Box display={"flex"} flexDirection={"column"} flex={3}>
        <Typography>Insights</Typography>
        <Typography variant="h1">Personal Website</Typography>
        <Typography>
          Elit vis eleifend integer mi odio posuere duis mattis vestibulum
          penatibus libero mi felis massa vivamus porta viverra. Magna etiam
          lorem
        </Typography>
        {/* CTA */}
      </Box>
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
