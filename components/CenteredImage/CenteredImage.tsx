import { FC } from "react";
import CenteredImageStyles from "./CenteredImage.module.scss";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Box, SvgIcon } from "@mui/material";

type CenteredImageProps = {
  src: string | StaticImport;
  alt: string;
  priority?: boolean;
  tall?: boolean;
};

const CenteredImage: FC<CenteredImageProps> = ({
  src,
  alt,
  priority,
  tall,
}) => {
  return (
    <Box width={"100%"}>
      <div
        className={
          CenteredImageStyles.ImageContainer +
          (tall ? " " + CenteredImageStyles.Tall : "")
        }
      >
        <Image
          src={src}
          alt={alt}
          fill={true}
          priority={priority ?? false}
          className={CenteredImageStyles.Image}
        />
      </div>
    </Box>
  );
};
export default CenteredImage;
