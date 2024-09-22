import Divider from "@/components/Divider/Divider";
import Hero from "./Hero/Hero";
import FeatureTiles from "@/components/FeatureTiles/FeatureTiles";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import ListOfFeatures from "@/components/ListOfFeatures/ListOfFeatures";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Divider />
      <FeatureTiles />
      <Divider />
      <SocialMedias />
      <Divider />
      <ListOfFeatures />
      <Divider />
    </Fragment>
  );
}
