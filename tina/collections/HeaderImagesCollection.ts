export const HeaderImagesCollection = {
	name: "HeaderImagesCollection",

	fields: [
		{
			name: "headerImage",
			label: "Header Image",
			type: "object",
			list: true,
			fields: [
				{ name: "page", label: "Page", type: "string", required: true },
				{ name: "key", label: "Page", type: "string", disabled: true },
				{ name: "link", label: "URL obrázku", type: "string" },
			],
		},
	],
};
