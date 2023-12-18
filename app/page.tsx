import {
  Box,
  Alert,
  AlertTitle,
  Grid,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MediaCard from "../components/MediaCard";

export default function Home() {
  return (
    <main>
      <Box sx={{ display: "flex" }} flexDirection={"column"} pt={6}>
        <Box display={"flex"} justifyContent={"center"} mb={6}>
          <Image
            src="/me.png"
            alt="Ray Poly picture"
            width={600}
            height={548}
            priority
          />
        </Box>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={6}>
            <MediaCard
              heading="CMYK"
              text="The CMYK color model (also known as process color, or four color) is a subtractive color model, based on the CMY color model, used in color printing, and is also used to describe the printing process itself."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="HSL and HSV"
              text="HSL (for hue, saturation, lightness) and HSV (for hue, saturation, value; also known as HSB, for hue, saturation, brightness) are alternative representations of the RGB color model, designed in the 1970s by computer graphics researchers."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="RGB"
              text="An RGB color space is any additive color space based on the RGB color model. RGB color spaces are commonly found describing the input signal to display devices such as television screens and computer monitors."
            />
          </Grid>
          <Grid xs={6}>
            <MediaCard
              heading="CIELAB"
              text="The CIELAB color space, also referred to as L*a*b*, was intended as a perceptually uniform space, where a given numerical change corresponds to a similar perceived change in color."
            />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
