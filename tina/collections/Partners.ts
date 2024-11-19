import { Collection } from "tinacms";

export const PartnersCollection: Collection = {
	name: "partners",
	label: "Partneři",
	path: "content/partners",
	fields: [
		{
			name: "partner",
			label: "Partner",
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
					type: "rich-text",
					name: "description",
					label: "Krátký popis",
					required: true,
				},
				{
					type: "string",
					name: "link",
					label: "URL",
					required: true,
				},
				{
					type: "image",
					name: "logo",
					label: "Logo",
				},
			],
		},
	],
};
