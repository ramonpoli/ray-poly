'use client'
import Divider from "@/components/Divider/Divider";
import Hero from "../components/Hero/Hero";
import FeatureTiles from "@/components/FeatureTiles/FeatureTiles";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import ListOfFeatures from "@/components/ListOfFeatures/ListOfFeatures";
import { Fragment } from "react";
import { sendGoogleEvent } from "@/utils/googleAnalytics";

export default function Home() {
  return (
    <Fragment>
      <Hero title={'Ramon Polidura Rueda'}
        subtitle={'Senior web developer delivering excellent user experience since 2011. Utilizing the latest technologies and applying the best coding practices among web devs.'}
        cta={{
          onClick: () => {
            sendGoogleEvent('moreAboutMeClick')
          },
          label: 'More about me'
        }}
        image={{
          src: '/me.JPG',
          alt: 'Ray Poly\'s profile image'
        }}
      />
      < Divider />
      <FeatureTiles />
      <Divider />
      <SocialMedias />
      <Divider />
      <ListOfFeatures />
      <Divider />
    </Fragment>
  );
}
