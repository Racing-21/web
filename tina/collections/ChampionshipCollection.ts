import { Collection } from "tinacms";

export const ChampionshipCollection: Collection = {
	name: "ChampionshipCollection",
	path: "content/souteze",
	fields: [
		{
			name: "soutez",
			label: "Soutěž",
			type: "object",
			list: true,
			fields: [
				{
					name: "name",
					type: "string",
					label: "Název soutěže",
					required: true,
				},
				{
					name: "year",
					type: "number",
					label: "Ročník",
					required: true,
				},
				{
					name: "category",
					type: "string",
					label: "Kategorie",
				},
				{
					name: "spreadsheetId",
					type: "string",
					label: "ID tabulky",
					required: true,
				},
				{
					name: "image",
					type: "image",
					label: "Úvodní fotografie",
				},
			],
		},
	],
};
