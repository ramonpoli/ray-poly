"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FC, Fragment } from "react";
import InterpolatedRowsStyles from "./InterpolatedRows.module.scss";

type Row = {
  text: string;
  image: {
    url: string;
    alt: string;
  };
};
type Props = {
  rows: Row[];
};
const InterpolatedRows: FC<Props> = ({ rows }) => {
  return (
    <Stack>
      {rows.map((row: Row, index: number) => {
        return (
          <div className={InterpolatedRowsStyles.Row} key={`row-${index}`}>
            <div className={InterpolatedRowsStyles.ImageContainer}>
              <Image
                src={row.image.url}
                alt={row.image.alt}
                fill={true}
                className={InterpolatedRowsStyles.Image}
              />
            </div>
            <Typography className={InterpolatedRowsStyles.Text}>
              {row.text}
            </Typography>
          </div>
        );
      })}
    </Stack>
  );
};

export default InterpolatedRows;
