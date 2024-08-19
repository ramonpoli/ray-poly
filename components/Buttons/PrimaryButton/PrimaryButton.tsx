import { Box, Button, ButtonProps, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  //
};
const PrimaryButton: FC<PropsWithChildren<Props & ButtonProps>> = ({
  children,
  ...buttonProps
}) => {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
      endIcon={
        <Typography lineHeight={"100%"} pl={4}>
          <ArrowForwardIosIcon fontSize={"small"} />
        </Typography>
      }
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
export default PrimaryButton;
