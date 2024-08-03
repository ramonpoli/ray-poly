import { Box } from "@mui/material";
import styles from "./about.module.scss";
import InterpolatedRows from "@/components/InterpolatedRows/InterpolatedRows";

export default function About() {
  return (
    <main className={styles.Main}>
      <InterpolatedRows
        rows={[
          {
            text: "Working as a web developer since 2011, I have gained a wealth of experience in the field. Mainly working as a front-end developer, I have finished numerous projects with best practices, accessibility, responsiveness, SEO and test coverage as core principles on my day to day work.",
            image: {
              url: "/Greenwich_park.png",
              alt: "Ramon Polidura at Greenwich Park",
            },
          },
          {
            text: "Enthusiastic man with a passion for technology, I enjoy spending time with my family, running and riding my mountain bike.",
            image: {
              url: "/chair.jpg",
              alt: "Ramon Polidura sitting on a chair",
            },
          },
          {
            text: "Other hobbies of mine include playing video games, watching movies and series, playing board games, and reading books and graphic novels. I collect videogames, DBZ cards, graphic novels and board games.",
            image: {
              url: "/with mahou.jpg",
              alt: "Ramon Polidura drinking his favourite beer: Mahou",
            },
          },
          {
            text: "My favorite videogames are: Final Fantasy VII (the OG), Days gone, Starcraft, Satisfactory, The Binding of Isaac, Steampunk, and Oxygen Not Included. My favorite board games are: Arkham horror the card game, Aliens another glorious day in the corps, Splendor, and the OG chess.",
            image: {
              url: "/chair playing.jpg",
              alt: "Ramon Polidura pretending to play videogames on a chair",
            },
          },
        ]}
      />
    </main>
  );
}
