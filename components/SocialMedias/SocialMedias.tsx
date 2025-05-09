"use client";
import type { FC } from "react";
import InstagramSvgComponent from "../SVGs/InstagramSvgComponent";
import LinkedInSvgComponent from "../SVGs/LinkedInSvgComponent";
import GithubSvgComponent from "../SVGs/GithubSvgComponent";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./SocialMedias.module.scss";

const SocialMedias: FC = () => {
	return (
		<section className={styles.SocialMedias}>
			<FeatureCard
				image={{
					src: <InstagramSvgComponent fill={"#00ffc2"} />,
					alt: "Instagram",
				}}
				title="Instagram"
				content="@ray.poly.web.developer"
				href="https://www.instagram.com/ray.poly.web.developer/"
			/>
			<FeatureCard
				image={{
					src: <LinkedInSvgComponent fill={"#00ffc2"} />,
					alt: "LinkedIn",
				}}
				title="LinkedIn"
				content="@ramon-polidura"
				href="https://www.linkedin.com/in/ramon-polidura/"
			/>
			<FeatureCard
				image={{
					src: <GithubSvgComponent fill={"#00ffc2"} />,
					alt: "Github",
				}}
				title="Github"
				content="@ramonpoli"
				href="https://github.com/ramonpoli"
			/>
		</section>
	);
};
export default SocialMedias;
