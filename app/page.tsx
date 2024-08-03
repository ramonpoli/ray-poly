import Divider from "@/components/Divider/Divider";
import HomepageStyles from "../styles/homepage.module.scss";
import Hero from "@/components/Hero/Hero";
import FeatureTiles from "@/components/FeatureTiles/FeatureTiles";
import SocialMedias from "@/components/SocialMedias/SocialMedias";

export default function Home() {
  return (
    <main className={HomepageStyles.Main}>
      <Hero />
      <Divider />
      <FeatureTiles />
      <SocialMedias />
      {/* TODO: footer and new highlight section */}
    </main>
  );
}
