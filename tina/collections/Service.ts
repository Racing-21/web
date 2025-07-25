import { Collection } from "tinacms";

export const ServiceCollection: Collection = {
	name: "sluzby",
	label: "Služby",
	path: "content/sluzby",
	match: { exclude: "GeneralService" },
	fields: [
		{
			name: "sluzby",
			label: "Služby",
			type: "object",
			list: true,
			ui: {
				itemProps: (item: { title: string }) => {
					return { label: `${item.title}` };
				},
			},
			fields: [
				{
					type: "string",
					name: "title",
					label: "Název služby",
					isTitle: true,
					required: true,
				},
				{
					type: "string",
					name: "headline",
					label: "Subheadline",
					isTitle: true,
					required: true,
				},
				{
					type: "string",
					name: "link",
					label: "URL",
					required: true,
				},
				{
					type: "string",
					name: "description",
					label: "Krátký popis",
					required: true,
				},
				{
					type: "image",
					name: "image",
					label: "Úvodní obrázek",
				},
			],
		},
	],
};
