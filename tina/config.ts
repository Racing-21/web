import { defineConfig } from "tinacms";
import { TinaUserCollection } from "tinacms-authjs/dist/tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";

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
		tina: {
			mediaRoot: "uploads",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			TinaUserCollection,
			{
				name: "teamMembers",
				label: "Členové týmu",
				path: "tym",
				fields: [
					{
						name: "teamMember",
						label: "Člen týmu",
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
								label: "Jméno",
								isTitle: true,
								required: true,
							},
							{
								type: "string",
								name: "role",
								label: "Role",
								list: true,
								options: [
									{
										value: "driver",
										label: "Řidič",
									},
									{
										value: "navigator",
										label: "Navigátor/ka",
									},
									{
										value: "mechanic",
										label: "Mechanik",
									},
								],
							},
							{
								type: "object",
								name: "achievements",
								label: "\u00DAsp\u011Bchy",
								list: true,
								fields: [
									{
										type: "string",
										name: "name",
										label: "Sout\u011B\u017E",
										isTitle: true,
										required: true,
									},
									{
										type: "number",
										name: "year",
										label: "Rok",
										required: true,
									},
									{
										type: "number",
										name: "ranking",
										label: "Um\u00EDst\u011Bn\u00ED",
										required: false,
									},
									{
										type: "string",
										name: "category",
										label: "Kategorie",
										required: false,
									},
								],
							},
							{
								type: "rich-text",
								name: "about",
								label: "Bio",
							},
							{
								type: "image",
								name: "image",
								label: "Profilov\u00E1 fotografie",
							},
						],
					},
				],
			},
			{
				name: "sluzby",
				label: "Služby",
				path: "sluzby",
				fields: [
					{
						name: "sluzba",
						label: "Služba",
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
								label: "Název služby",
								isTitle: true,
								required: true,
							},
							{
								type: "string",
								name: "shortDescription",
								label: "Krátký popis",
							},
							{
								type: "string",
								name: "longDescription",
								label: "Popis služby",
							},
							{
								type: "image",
								name: "image",
								label: "Obrázek",
							},
						],
					},
				],
			},
		],
	},
});
