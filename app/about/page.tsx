import { Box } from "@mui/material";
import styles from "./about.module.scss";
import InterpolatedRows from "@/components/InterpolatedRows/InterpolatedRows";

export default function About() {
  return (
    <main className={styles.Main}>
      <InterpolatedRows
        rows={[
          { text: "hodor", image: { url: "/me2.png", alt: "me" } },
          { text: "hodor2", image: { url: "/me3.png", alt: "me" } },
        ]}
      />
    </main>
  );
}
