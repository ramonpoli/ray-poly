import { Card, Typography } from "@mui/material";
import FeatureCardStyles from "./FeatureCard.module.scss";
import type { FeatureCardType } from "@/types/Types";
import Image from "next/image";

const FeatureCard = ({ image, title, content }: FeatureCardType) => {
	return (
		<Card className={FeatureCardStyles.FeatureCard}>
			<div className={FeatureCardStyles.FeatureImage}>
				<Image
					src={image.src}
					alt={image.alt}
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div className={FeatureCardStyles.FeatureContent}>
				<Typography variant="h2" fontWeight={600} fontSize={"2.5em"}>
					{title}
				</Typography>
				<Typography>{content}</Typography>
			</div>
		</Card>
	);
};
export default FeatureCard;
