import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h1" fontWeight={600} fontSize={"3.75em"}>
      {children}
    </Typography>
  );
};
export default Title;
