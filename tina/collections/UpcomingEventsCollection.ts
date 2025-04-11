import { Collection } from "tinacms";

export const UpcomingEventsCollection: Collection = {
	name: "upcomingEvents",
	label: "Nadcházející události",
	path: "content/upcomingEvents",
	format: "md",
	fields: [
		{
			name: "upcomingEvents",
			label: "Události",
			type: "object",
			list: true,
			ui: {
				itemProps: (item: { name: string }) => {
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
					type: "datetime",
					name: "date",
					label: "Datum",
					required: true,
					ui: {
						dateFormat: "YYYY-MM-DD",
						timeFormat: "HH:mm",
						validate: () => {
							// Disable date validation to allow future dates
							return undefined;
						},
					},
				},
				{
					type: "string",
					name: "description",
					label: "Popis",
					required: false,
				},
			],
		},
	],
};
