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
		loadCustomStore: async () => {
			const pack = await import("next-tinacms-cloudinary");
			return pack.TinaCloudCloudinaryMediaStore;
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
			{
				name: "technika",
				label: "Technika",
				path: "technika",
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
								label: "Značka a model",
								isTitle: true,
								required: true,
							},
							{
								type: "string",
								name: "slug",
								label: "URL název",
								isTitle: true,
								required: true,
							},
							{
								type: "object",
								name: "general",
								label: "Obecné informace",
								fields: [
									{
										type: "number",
										name: "length",
										label: "Délka (mm)",
									},
									{
										type: "number",
										name: "width",
										label: "Šířka (mm)",
									},
									{
										type: "number",
										name: "wheelbase",
										label: "Rozvor (mm)",
									},
									{
										type: "number",
										name: "weight",
										label: "Hmotnost (kg)",
									},
									{
										type: "string",
										name: "body",
										label: "Karoserie",
									},
								],
							},
							{
								type: "object",
								name: "engine",
								label: "Motor",
								fields: [
									{
										type: "string",
										name: "engineType",
										label: "Typ",
									},
									{
										type: "number",
										name: "volume",
										label: "Objem (cm3)",
									},
									{
										type: "string",
										name: "power",
										label: "Výkon",
									},
									{
										type: "string",
										name: "torque",
										label: "Točivý moment",
									},
									{
										type: "string",
										name: "bore",
										label: "Vrtání/Zdvih",
									},
									{
										type: "string",
										name: "compressRatio",
										label: "Kompresní poměr",
									},
									{
										type: "string",
										name: "restrictor",
										label: "Restriktor",
									},
									{
										type: "string",
										name: "controlUnit",
										label: "Řídící jednotka",
									},
								],
							},
							{
								type: "object",
								name: "drivetrain",
								label: "Hnací ústrojí",
								fields: [
									{
										type: "string",
										name: "drive",
										label: "Pohon",
									},
									{
										type: "string",
										name: "transmission",
										label: "Převodovka",
									},
									{
										type: "string",
										name: "clutch",
										label: "Spojka",
									},
								],
							},
							{
								type: "object",
								name: "brakes",
								label: "Brzdy",
								fields: [
									{
										type: "string",
										name: "type_front",
										label: "Typ vpředu",
									},
									{
										type: "string",
										name: "type_rear",
										label: "Typ vzadu",
									},
									{
										type: "string",
										name: "discs",
										label: "Kotouče",
									},
									{
										type: "string",
										name: "dimensions_front",
										label: "Brzdy vpředu",
									},
									{
										type: "string",
										name: "dimensions_rear",
										label: "Brzdy vzadu",
									},
									{
										type: "string",
										name: "calipers",
										label: "Třmeny",
									},
								],
							},
							{
								type: "object",
								name: "suspension",
								label: "Podvozek",
								fields: [
									{
										type: "string",
										name: "front",
										label: "Náprava vpředu",
									},
									{
										type: "string",
										name: "rear",
										label: "Náprava vzadu",
									},
									{
										type: "string",
										name: "drive",
										label: "Řízení",
									},
								],
							},
							{
								type: "object",
								name: "rims",
								label: "Ráfky",
								fields: [
									{
										type: "string",
										name: "dimensions_front",
										label: "Rozměr vpředu",
									},
									{
										type: "string",
										name: "dimensions_rear",
										label: "Rozměr vzadu",
									},
								],
							},
							{
								type: "object",
								name: "tires",
								label: "Pneumatiky",
								fields: [
									{
										type: "string",
										name: "dimensions_front",
										label: "Rozměr vpředu",
									},
									{
										type: "string",
										name: "dimensions_rear",
										label: "Rozměr vzadu",
									},
								],
							},
							{
								type: "image",
								list: true,
								name: "images",
								label: "Fotografie",
							},
						],
					},
				],
			},
			{
				name: "pronajem",
				label: "Pronájem prostor",
				path: "pronajem",
				match: { include: "Prostory.md" },
				fields: [
					{
						name: "prostory",
						label: "Prostory",
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
								label: "Název prostoru",
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
				name: "pronajemTechniky",
				label: "Pronájem prostor",
				path: "pronajem",
				match: { include: "Technika.md" },
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
		],
	},
});
