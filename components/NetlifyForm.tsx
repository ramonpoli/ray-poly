"use client";
import { Box, TextField } from "@mui/material";
import type { FC } from "react";
import PrimaryButton from "./Buttons/PrimaryButton/PrimaryButton";

type Props = {
	hasSubmitted: boolean;
};
const NetlifyForm: FC<Props> = ({ hasSubmitted }) => {
	return (
		<form
			data-netlify="true"
			name="contact"
			method="post"
			action="/post-success"
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				gap={"1rem"}
				mb={4}
				maxWidth={"40rem"}
			>
				<h3>Require service</h3>
				<Box
					display={"flex"}
					flexDirection={{ xs: "column", lg: "row" }}
					justifyContent={"space-betwen"}
					gap={"1rem"}
					mb={4}
				>
					<TextField
						required
						name={"name"}
						label={"Name"}
						variant={"filled"}
						sx={{ flex: 1 }}
					/>
					<TextField
						required
						name={"email"}
						label={"Email"}
						variant={"filled"}
						sx={{ flex: 1 }}
					/>
				</Box>
				{hasSubmitted && (
					<p>Thank you for your interest, I&apos;ll be in contact soon!</p>
				)}
				<PrimaryButton type="submit" disabled={hasSubmitted}>
					Submit
				</PrimaryButton>
			</Box>
		</form>
	);
};
export default NetlifyForm;
