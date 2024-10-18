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
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: {
		collections: [
			TinaUserCollection,
			{
				name: "teamMembers",
				label: "Team members",
				path: "team/members",
				fields: [
					{
						name: "teamMember",
						label: "Team member",
						type: "object",
						list: true,
						fields: [
							{
								type: "string",
								name: "name",
								label: "Name",
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
										label: "Driver",
									},
									{
										value: "navigator",
										label: "Navigator",
									},
									{
										value: "mechanic",
										label: "Mechanic",
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
										required: true,
									},
									{
										type: "string",
										name: "category",
										label: "Kategorie",
										isTitle: true,
										required: true,
									},
								],
							},
							{
								type: "rich-text",
								name: "about",
								label: "About",
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
		],
	},
});
