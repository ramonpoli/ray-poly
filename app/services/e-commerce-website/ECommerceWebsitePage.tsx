"use client";
import Hero from "@/components/Hero/Hero";
import NetlifyForm from "@/components/NetlifyForm";
import type { FC } from "react";

type Props = {
	title: string;
	description: string;
};

const ECommerceWebsitePage: FC<Props> = ({ title, description }) => {
	return (
		<div>
			<Hero
				title={title}
				subtitle={description}
				image={{
					src: "/boilerplate.png",
					alt: "boilerplate e-commerce website image",
				}}
			/>
			<NetlifyForm />
		</div>
	);
};
export default ECommerceWebsitePage;
