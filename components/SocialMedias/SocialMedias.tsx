"use client";
import { Box, Link, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import InstagramSvgComponent from "../SVGs/InstagramSvgComponent";
import LinkedInSvgComponent from "../SVGs/LinkedInSvgComponent";
import GithubSvgComponent from "../SVGs/GithubSvgComponent";
import styles from "./SocialMedias.module.scss";
import { sendGoogleEvent } from "@/utils/googleAnalytics";

const SocialMedias: FC = () => {
	const [elemHovered, setElemHovered] = useState<
		"instagram" | "github" | "linkedin" | ""
	>("");
	return (
		<section>
			<Stack
				spacing={{ xs: 1, lg: 2 }}
				direction={{ xs: "column", sm: "row" }}
				useFlexGap
				mt={10}
				justifyContent={{ xs: "start", lg: "space-between" }}
				width={"100%"}
			>
				<Link
					href={"https://www.instagram.com/ray.poly.web.developer/"}
					target="_blank"
					onMouseOver={() => {
						setElemHovered("instagram");
					}}
					onMouseLeave={() => {
						setElemHovered("");
					}}
					onClick={() => {
						sendGoogleEvent("socialMediaClick", "instagram");
					}}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={2}
						minWidth={{ md: 200, lg: 300 }}
					>
						<InstagramSvgComponent fill={"#00ffc2"} />
						<Typography
							className={`${styles.IconLink} ${
								elemHovered === "instagram" ? styles.Visible : ""
							}`}
						>
							ray.poly.web.developer
						</Typography>
					</Box>
				</Link>
				<Link
					href={"https://www.linkedin.com/in/ramon-polidura/"}
					target="_blank"
					onMouseOver={() => {
						setElemHovered("linkedin");
					}}
					onMouseLeave={() => {
						setElemHovered("");
					}}
					onClick={() => {
						sendGoogleEvent("socialMediaClick", "linekedin");
					}}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={2}
						minWidth={{ md: 200, lg: 300 }}
					>
						<LinkedInSvgComponent fill={"#00ffc2"} />
						<Typography
							className={`${styles.IconLink} ${
								elemHovered === "linkedin" ? styles.Visible : ""
							}`}
						>
							ramon-polidura
						</Typography>
					</Box>
				</Link>
				<Link
					href={"https://github.com/ramonpoli"}
					target="_blank"
					onMouseOver={() => {
						setElemHovered("github");
					}}
					onMouseLeave={() => {
						setElemHovered("");
					}}
					onClick={() => {
						sendGoogleEvent("socialMediaClick", "github");
					}}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						gap={2}
						minWidth={{ md: 200, lg: 300 }}
					>
						<GithubSvgComponent fill={"#00ffc2"} />
						<Typography
							className={`${styles.IconLink} ${
								elemHovered === "github" ? styles.Visible : ""
							}`}
						>
							ramonpoli
						</Typography>
					</Box>
				</Link>
			</Stack>
		</section>
	);
};
export default SocialMedias;
