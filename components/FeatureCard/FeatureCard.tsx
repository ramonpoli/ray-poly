import { Card, Link, Typography } from "@mui/material";
import FeatureCardStyles from "./FeatureCard.module.scss";
import type { FeatureCardType } from "@/types/Types";
import Image from "next/image";

const FeatureCard = ({ image, title, content, href }: FeatureCardType) => {
	const cardContent = (
		<>
			{typeof image.src === "string" ? (
				<div className={FeatureCardStyles.FeatureImage}>
					<Image
						src={image.src}
						alt={image.alt}
						layout="fill"
						objectFit="contain"
					/>
				</div>
			) : (
				<div className={FeatureCardStyles.FeatureImageContainer}>
					{image.src}
				</div>
			)}
			<div className={FeatureCardStyles.FeatureContent}>
				<Typography variant="h2" fontWeight={600} fontSize={"2.5em"}>
					{title}
				</Typography>
				<Typography>{content}</Typography>
			</div>
		</>
	);
	return (
		<Card className={FeatureCardStyles.FeatureCard}>
			{href ? (
				<Link href={href} target="_blank">
					{cardContent}
				</Link>
			) : (
				cardContent
			)}
		</Card>
	);
};
export default FeatureCard;
