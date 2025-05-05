"use client";
import Divider from "@/components/Divider/Divider";
import Hero from "../components/Hero/Hero";
import FeatureTiles from "@/components/FeatureTiles/FeatureTiles";
import SocialMedias from "@/components/SocialMedias/SocialMedias";
import ListOfFeatures from "@/components/ListOfFeatures/ListOfFeatures";
import { Fragment } from "react";
import { sendGoogleEvent } from "@/utils/googleAnalytics";

export default function Home() {
	return (
		<Fragment>
			<Hero
				title={"Ramon Polidura Rueda"}
				subtitle={
					"Senior web developer delivering excellent user experience since 2011. Utilizing the latest technologies and applying the best coding practices among web devs."
				}
				cta={{
					onClick: () => {
						sendGoogleEvent("moreAboutMeClick");
					},
					label: "More about me",
				}}
				image={{
					src: "/me.JPG",
					alt: "Ray Poly's profile image",
				}}
			/>
			<Divider />
			<form name="contact" method="POST" data-netlify="true">
				<p>
					<label>
						Your Name: <input type="text" name="name" />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" />
					</label>
				</p>
				<p>
					<label>
						Your Role:{" "}
						<select name="role[]" multiple>
							<option value="leader">Leader</option>
							<option value="follower">Follower</option>
						</select>
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message"></textarea>
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
			<Divider />
			<FeatureTiles />
			<Divider />
			<SocialMedias />
			<Divider />
			<ListOfFeatures />
			<Divider />
		</Fragment>
	);
}
