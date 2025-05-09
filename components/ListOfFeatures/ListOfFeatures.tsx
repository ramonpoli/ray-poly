"use client";
import type React from "react";
import styles from "./ListOfFeatures.module.scss";
import { Typography } from "@mui/material";
import type { ProjectType } from "@/types/Types";
import FeatureCard from "../FeatureCard/FeatureCard";
import LandingPageSvgComponent from "../SVGs/LandingPageSvgComponent";
import BespokeCRMSvgComponent from "../SVGs/BespokeCRMSvgComponent";
import AuthSvgComponent from "../SVGs/AuthSvgComponent";
import AssistantSvgComponent from "../SVGs/AssistantSvgComponent";
import PhoneSvgComponent from "../SVGs/PhoneSvgComponent";
import TeachingSvgComponent from "../SVGs/TeachingSvgComponent";

const projects: ProjectType[] = [
	{
		image: {
			src: <LandingPageSvgComponent />,
			alt: "Landing Page",
		},
		title: "Landing Page",
		description:
			"A SEO optimised, statically generated completely accessible gorgeous first impression for a company",
	},
	{
		image: {
			src: <BespokeCRMSvgComponent />,
			alt: "Bespoke CRM",
		},
		title: "Bespoke CRM",
		description:
			"Over the years I've built several CRMs for different companies, from small to large, from simple to complex",
	},
	{
		image: {
			src: <AuthSvgComponent />,
			alt: "Authentication and Authorization",
		},
		title: "Authentication and Authorization",
		description:
			"Extensive experience implementing secure user authentication, seamless session management and dynamic shopping cart systems",
	},
	{
		image: {
			src: <AssistantSvgComponent />,
			alt: "AI Integration",
		},
		title: "AI Integration",
		description:
			"Chatbots, AI agents, and AI-powered tools for various industries",
	},
	{
		image: {
			src: <PhoneSvgComponent />,
			alt: "App Development",
		},
		title: "App Development",
		description:
			"I've helped dreams come true of people who wanted to build their own apps",
	},
	{
		image: {
			src: <TeachingSvgComponent />,
			alt: "Teaching",
		},
		title: "Teaching",
		description:
			"I've helped junior developers learn the ropes and senior developers upskill increasing the productivity of the team",
	},
];

const ListOfFeatures: React.FC = () => {
	return (
		<section className={styles.container}>
			<Typography variant="h2" className={styles.title}>
				Things I've done
			</Typography>
			<div className={styles.projects}>
				{projects.map((project, index) => (
					<FeatureCard
						key={`${project.title}-${index}`}
						title={project.title}
						content={project.description}
						image={project.image}
					/>
				))}
			</div>
		</section>
	);
};

export default ListOfFeatures;
