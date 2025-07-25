import { Collection } from "tinacms";
import { BulkImageSelector } from "@/components/BulkImageSelector";

export const NewsCollection: Collection = {
	name: "aktuality",
	label: "Aktuality",
	path: "content/aktuality",
	fields: [
		{
			name: "aktuality",
			label: "Aktuality",
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
					label: "Titulek",
					isTitle: true,
					required: true,
				},
				{
					type: "string",
					name: "slug",
					label: "URL název",
					required: true,
				},
				{
					type: "string",
					name: "coverImageAlignment",
					label: "Zarovnat úvodní obrázek",
					options: [
						{
							value: "top",
							label: "Nahoru",
						},
						{
							value: "center",
							label: "Na střed",
						},
						{
							value: "top",
							label: "Na spod",
						},
					],
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
					name: "shortDescription",
					label: "Krátký popis",
					required: true,
				},
				{
					type: "rich-text",
					name: "longDescription",
					label: "Text zprávy",
					required: true,
					isBody: true,
				},
				{
					type: "image",
					name: "image",
					label: "Úvodní obrázek",
				},
				{
					ui: {
						// @ts-expect-error - custom tina component has incompatible types
						component: (props) => BulkImageSelector(props),
					},
					type: "image",
					name: "gallery",
					label: "Fotogalerie",
					list: true,
				},
			],
		},
	],
};
