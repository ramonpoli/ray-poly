import type { FC } from "react";
import FeatureTilesStyles from "./FeatureTiles.module.scss";
import Subtitle1 from "../Typography/Subtitle1/Subtitle1";
import { Card, Typography } from "@mui/material";
import Image from "next/image";

const FeatureTiles: FC = () => {
	const Feature = ({
		image,
		title,
		content,
	}: {
		image: {
			src: string;
			alt: string;
		};
		title: string;
		content: string;
	}) => {
		return (
			<Card className={FeatureTilesStyles.Feature}>
				<div className={FeatureTilesStyles.FeatureImage}>
					<Image
						src={image.src}
						alt={image.alt}
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className={FeatureTilesStyles.FeatureContent}>
					<Typography variant="h2" fontWeight={600} fontSize={"2.5em"}>
						{title}
					</Typography>
					<Typography>{content}</Typography>
				</div>
			</Card>
		);
	};
	return (
		<div className={FeatureTilesStyles.FeatureTiles}>
			<div className={FeatureTilesStyles.ThreeColumns}>
				<Feature
					image={{
						src: "/what-i-develop.png",
						alt: "What I develop",
					}}
					title="What I develop"
					content="As a front-end developer, I create responsive, SEO-friendly websites and landing pages that look great on any device and perform smoothly."
				/>
				<Feature
					image={{
						src: "/my-projects.png",
						alt: "My projects",
					}}
					title="My projects"
					content="I’ve developed custom admin panels, secure user authentication systems, and large-scale bespoke websites tailored to unique business needs."
				/>
				<Feature
					image={{
						src: "/my-approach.png",
						alt: "My approach",
					}}
					title="My approach"
					content="I focus on clean, maintainable code and user-centered design. Every project is built with performance, accessibility, and mobile-first principles in mind."
				/>
			</div>
			<div className={FeatureTilesStyles.LeftContent}>
				<Subtitle1>Driven by UX excellence</Subtitle1>
			</div>
		</div>
	);
};
export default FeatureTiles;
