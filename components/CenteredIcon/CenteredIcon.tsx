import { SvgIcon, Box } from "@mui/material";
import { FC } from "react";
import CenteredIconStyles from "./CenteredIcon.module.scss";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export type CenteredIconProps = {
  icon: "trendingUp" | "book" | "machine";
};

const CenteredIcon: FC<CenteredIconProps> = ({ icon }) => {
  const iconMap = {
    trendingUp: TrendingUpIcon,
    book: AutoStoriesIcon,
    machine: PrecisionManufacturingIcon,
  };
  const Component = iconMap[icon];
  return (
    <Box width={"100%"}>
      <div className={CenteredIconStyles.ImageContainer}>
        <Component className={CenteredIconStyles.Image} fontSize={"large"} />
      </div>
    </Box>
  );
};
export default CenteredIcon;
