"use client";
import { Alert, Box, TextField } from "@mui/material";
import type { FC, FormEvent } from "react";
import { useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton/PrimaryButton";

interface Props {
	formName: string;
	formTitle: string;
}

const NetlifyForm: FC<Props> = ({ formName, formTitle }) => {
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
		<form
			data-netlify="true"
			name={formName}
			onSubmit={handleFormSubmit}
			style={{ alignSelf: "stretch" }}
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				gap={"1rem"}
				mb={4}
				maxWidth={"400rem"}
			>
				<h3>{formTitle}</h3>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"space-betwen"}
					gap={"1rem"}
					mb={4}
				>
					<Box width={{ md: "50%" }}>
						<TextField
							required
							name={"email"}
							label={"Email"}
							variant={"filled"}
							fullWidth
						/>
					</Box>
					<TextField
						required
						name={"message"}
						label={"Message"}
						placeholder={"Message"}
						multiline
						rows={3}
						fullWidth
					/>
				</Box>
				{status === "ok" && <Alert severity="success">Submitted!</Alert>}
				{status === "error" && <Alert severity="error">{error}</Alert>}
				<PrimaryButton type="submit">Submit</PrimaryButton>
			</Box>
		</form>
	);
};
export default NetlifyForm;
