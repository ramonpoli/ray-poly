import HomepageStyles from "./homepage.module.scss";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className={HomepageStyles.Main}>
      <Hero />
    </main>
  );
}
