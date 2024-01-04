import Divider from "@/components/Divider/Divider";
import HomepageStyles from "./styles/homepage.module.scss";
import Hero from "@/components/Hero/Hero";
import FeatureTiles from "@/components/FeatureTiles/FeatureTiles";

export default function Home() {
  return (
    <main className={HomepageStyles.Main}>
      <Hero />
      <Divider />
      <FeatureTiles />
      {/* TODO: Social media footer and new highlight section */}
    </main>
  );
}
