"use client";
import { Box, TextField } from "@mui/material";
import type { FC, FormEvent } from "react";
import { useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton/PrimaryButton";

const NetlifyForm: FC = () => {
	const [hasSubmitted, setHasSubmitted] = useState(false);
	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		formData.append("form-name", "contact");
		const mockObject = {
			name: "John Doe",
			email: "john.doe@example.com",
			message: "Hello, world!",
		};
		try {
			await fetch("/__forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(mockObject).toString(),
			});
		} catch (error) {
			console.error(error);
		}
		setHasSubmitted(true);
	};
	return (
		<form data-netlify="true" name="contact" onSubmit={handleFormSubmit}>
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
					<TextField
						required
						name={"message"}
						label={"Message"}
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
