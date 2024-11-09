import { Collection } from "tinacms";

export const VehicleCollection: Collection = {
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
				itemProps: (item: { name: string }) => {
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
};
