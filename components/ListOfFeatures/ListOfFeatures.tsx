"use client";
import React from "react";
import styles from "./ListOfFeatures.module.scss";
import { Card, CardContent, Typography } from "@mui/material";
import { sendGoogleEvent } from "@/utils/googleAnalytics";

interface Skill {
	name: string;
	description: string;
}

const skills: Skill[] = [
	{
		name: "React",
		description: "A JavaScript library for building user interfaces",
	},
	{
		name: "TypeScript",
		description:
			"A typed superset of JavaScript that compiles to plain JavaScript",
	},
	{
		name: "Node.js",
		description:
			"A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development",
	},
	{
		name: "Next.js",
		description: "A React framework for production-grade applications",
	},
	{
		name: "HTML5/CSS3",
		description:
			"Modern web technologies for structuring content and styling web pages",
	},
];

const ListOfFeatures: React.FC = () => {
	return (
		<section className={styles.container}>
			<Typography variant="h2" className={styles.title}>
				Core Skills
			</Typography>
			<ul className={styles.list}>
				{skills.map((skill, index) => (
					<li
						key={`${skill.name}-${index}`}
						className={styles.item}
						onMouseEnter={() => {
							sendGoogleEvent("hoverOverSkill", skill.name);
						}}
					>
						<Card className={styles.card}>
							<CardContent className={styles.cardContent}>
								<Typography variant="h4" className={styles.skillName}>
									{skill.name}
								</Typography>
								<Typography className={styles.skillDescription}>
									{skill.description}
								</Typography>
							</CardContent>
						</Card>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ListOfFeatures;
