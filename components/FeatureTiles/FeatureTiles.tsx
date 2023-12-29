import { FC } from "react";
import FeatureTilesStyles from "./FeatureTiles.module.scss";
import Subtitle1 from "../Typography/Subtitle1/Subtitle1";
import { SvgIcon, Typography } from "@mui/material";
import Title from "../Typography/Title/Title";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CenteredIcon, { CenteredIconProps } from "../CenteredIcon/CenteredIcon";

const FeatureTiles: FC = () => {
  const Feature = ({
    icon,
    title,
    content,
  }: {
    icon: CenteredIconProps["icon"];
    title: string;
    content: string;
  }) => {
    return (
      <div className={FeatureTilesStyles.Feature}>
        <CenteredIcon icon={icon} />
        <div className={FeatureTilesStyles.FeatureContent}>
          <Typography variant="h2" fontWeight={600} fontSize={"2.5em"}>
            {title}
          </Typography>
          <Typography>{content}</Typography>
        </div>
      </div>
    );
  };
  return (
    <div className={FeatureTilesStyles.FeatureTiles}>
      <div className={FeatureTilesStyles.LeftContent}>
        <Subtitle1>Driven by UX excellence</Subtitle1>
        <Title>Core skills</Title>
      </div>

      <div className={FeatureTilesStyles.ThreeColumns}>
        <Feature
          icon={"trendingUp"}
          title="Scalability"
          content="My main goal when building this website was to create a website that is scalable. I always think on the next developer that will come along and I want to make sure that the website is easy to maintain and easy to scale."
        />
        <Feature
          icon={"book"}
          title="Readability"
          content="It is most important for me to develop easy to read code, we all know that the most difficult part of developing is naming a variable but I really think that giving a meaningful name to a variable helps everyone understand what it is doing and what it is for."
        />
        <Feature
          icon={"machine"}
          title="Robustness"
          content="A webpage needs to stand the test of time and I always try to make sure that the website is robust enough to handle all the possible scenarios. This includes tests for all the possible user interactions. And up to date tools."
        />
      </div>
    </div>
  );
};
export default FeatureTiles;
