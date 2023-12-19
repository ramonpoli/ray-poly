import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Subtitle1Styles from "./Subtitle1.module.scss";

const Subtitle1: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant={"h3"} className={Subtitle1Styles.Subtitle1}>
      {children}
    </Typography>
  );
};
export default Subtitle1;
