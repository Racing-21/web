import { Collection } from "tinacms";

export const TeamMemberCollection: Collection = {
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
				itemProps: (item: { name: string }) => {
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
};
