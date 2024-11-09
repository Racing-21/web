import { TinaField } from "tinacms";

export const rentalItemFields: TinaField[] = [
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
];

export const VenueCollection = {
	name: "pronajem",
	label: "Pronájem prostor",
	path: "pronajem",
	match: { include: "Prostory", exclude: "Technika" },
	fields: rentalItemFields,
};
