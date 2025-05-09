import type { FC } from "react";
import FeatureTilesStyles from "./FeatureTiles.module.scss";
import Subtitle1 from "../Typography/Subtitle1/Subtitle1";
import FeatureCard from "../FeatureCard/FeatureCard";

const FeatureTiles: FC = () => {
	return (
		<div className={FeatureTilesStyles.FeatureTiles}>
			<div className={FeatureTilesStyles.ThreeColumns}>
				<FeatureCard
					image={{
						src: "/what-i-develop.png",
						alt: "What I develop",
					}}
					title="What I develop"
					content="As a front-end developer, I create responsive, SEO-friendly websites and landing pages that look great on any device and perform smoothly."
				/>
				<FeatureCard
					image={{
						src: "/my-projects.png",
						alt: "My projects",
					}}
					title="My projects"
					content="I’ve developed custom admin panels, secure user authentication systems, and large-scale bespoke websites tailored to unique business needs."
				/>
				<FeatureCard
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
