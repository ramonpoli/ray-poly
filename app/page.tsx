import Divider from "@/components/Divider/Divider";
import HomepageStyles from "./styles/homepage.module.scss";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={HomepageStyles.Main}>
      <Hero />
      <Divider />
    </main>
  );
}
