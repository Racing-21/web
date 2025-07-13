import { Collection, defineConfig } from "tinacms";
import { TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { TeamMemberCollection } from "./collections/TeamMember";
import { VehicleCollection } from "./collections/Vehicle";
import { rentalItemFields, VenueCollection } from "./collections/Prostor";
import { ServiceCollection } from "./collections/Service";
import { PartnersCollection } from "./collections/Partners";
import { ChampionshipCollection } from "./collections/ChampionshipCollection";
import { NewsCollection } from "./collections/NewsCollection";
import { UpcomingEventsCollection } from "./collections/UpcomingEventsCollection";
import { GeneralServiceCollection } from "./collections/GeneralServiceCollection";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ?? process.env.VERCEL_GIT_COMMIT_REF ?? process.env.HEAD ?? "main";

export default defineConfig({
	branch,

	// Get this from tina.io
	clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
	// Get this from tina.io
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		loadCustomStore: async () => {
			const pack = await import("next-tinacms-cloudinary");
			return pack.TinaCloudCloudinaryMediaStore;
		},
	},
	// See docs on content modeling for more info on how to set up new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			ServiceCollection,
			{
				label: "Users",
				format: "json",
				...TinaUserCollection, // spread the collection properties
			} as Collection,
			TeamMemberCollection,
			VehicleCollection,
			VenueCollection,
			ChampionshipCollection,
			{
				name: "pronajemTechniky",
				label: "Pronájem techniky",
				path: "pronajem",
				match: { include: "Technika", exclude: "Prostory" },
				fields: [
					{
						name: "technika",
						label: "Technika",
						type: "object",
						list: true,
						ui: {
							itemProps: (item) => {
								// Field values are accessed by item?.<Field name>
								return { label: item?.name };
							},
						},
						fields: [
							{
								type: "string",
								name: "name",
								label: "Název",
								isTitle: true,
								required: true,
							},
							{
								type: "string",
								name: "shortDescription",
								label: "Krátký popis",
								required: true,
							},
							{
								type: "rich-text",
								name: "longDescription",
								label: "Popis služby",
								required: true,
							},
							{
								type: "object",
								name: "price",
								label: "Cena",
								required: true,
								list: true,
								fields: [
									{
										type: "number",
										name: "price",
										label: "Cena",
										required: true,
									},
									{
										type: "string",
										name: "unit",
										label: "Jednotka",
										required: true,
										options: [
											{
												value: "hour",
												label: " / hod",
											},
											{
												value: "day",
												label: " / den",
											},
											{
												value: "halfDay",
												label: " / 1/2 dne (4 hod)",
											},
										],
									},
								],
							},
							{
								type: "image",
								name: "image",
								label: "Obrázek",
								required: true,
							},
							{
								type: "image",
								name: "gallery",
								list: true,
								label: "Fotogalerie",
							},
						],
					},
				],
			},
			{
				name: "pronajemPrivesu",
				label: "Pronájem přívěsů",
				path: "content/pronajem",
				format: "md",
				fields: [
					{
						name: "privesy",
						label: "Přívěsy",
						type: "object",
						list: true,
						ui: {
							itemProps: (item) => {
								// Field values are accessed by item?.<Field name>
								return { label: item?.name };
							},
						},
						fields: [
							{
								type: "string",
								name: "name",
								label: "Název",
								isTitle: true,
								required: true,
							},
							{
								type: "string",
								name: "shortDescription",
								label: "Krátký popis",
								required: true,
							},
							{
								type: "rich-text",
								name: "longDescription",
								label: "Popis služby",
								required: true,
							},
							{
								type: "object",
								name: "price",
								label: "Cena",
								required: true,
								list: true,
								fields: [
									{
										type: "number",
										name: "price",
										label: "Cena",
										required: true,
									},
									{
										type: "string",
										name: "unit",
										label: "Jednotka",
										required: true,
										options: [
											{
												value: "hour",
												label: " / hod",
											},
											{
												value: "day",
												label: " / den",
											},
											{
												value: "halfDay",
												label: " / 1/2 dne (4 hod)",
											},
										],
									},
								],
							},
							{
								type: "image",
								name: "image",
								label: "Obrázek",
								required: true,
							},
							{
								type: "image",
								name: "gallery",
								list: true,
								label: "Fotogalerie",
							},
						],
					},
				],
			},
			{
				name: "pronajemZazemi",
				label: "Pronájem zázemí",
				path: "pronajem/zazemi",
				match: { include: "Zazemi" },
				fields: rentalItemFields,
			},
			NewsCollection,
			PartnersCollection,
			UpcomingEventsCollection,
			GeneralServiceCollection,
		],
	},
});
