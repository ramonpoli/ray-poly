"use client";
import { Alert, Box, TextField } from "@mui/material";
import type { FC, FormEvent } from "react";
import { useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton/PrimaryButton";

const NetlifyForm: FC = () => {
	const [status, setStatus] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		formData.append("form-name", "contact");
		try {
			const response = await fetch("/forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				body: new URLSearchParams(formData as any).toString(),
			});
			if (response.status === 200) {
				setStatus("ok");
			} else {
				setStatus("error");
				setError(`${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.error(error);
		}
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
				{status === "ok" && <Alert severity="success">Submitted!</Alert>}
				{status === "error" && <Alert severity="error">{error}</Alert>}
				<PrimaryButton type="submit" disabled={hasSubmitted}>
					Submit
				</PrimaryButton>
			</Box>
		</form>
	);
};
export default NetlifyForm;
