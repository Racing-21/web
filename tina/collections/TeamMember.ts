import { Collection } from "tinacms";

enum teamRoles {
	acceptanceMechanic = "Přijímací technik",
	driver = "Řidič",
	navigator = "Navigátor",
	mechanic = "Mechanik",
	videoCrew = "Video tým",
	photographer = "Fotograf",
	chiefMechanic = "Hlavní mechanik",
	catering = "Catering",
	teamCoordinator = "Koordinátor týmu",
	scout = "Průzkum trati",
	prManager = "PR manažer",
}

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
			templates: [
				{
					name: "racingTeam",
					label: "Závodníci",
					ui: {
						itemProps: (item: { name: string; role: string[] }) => {
							console.log(item);
							const role = teamRoles[item.role[0] as keyof typeof teamRoles];

							return { label: `${role.toUpperCase()} - ${item.name}` };
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
							name: "sex",
							label: "Pohlaví",
							list: true,
							options: [
								{
									value: "Female",
									label: "F",
								},
								{
									value: "Male",
									label: "M",
								},
							],
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
				{
					name: "backOffice",
					label: "Realizační tým",
					ui: {
						itemProps: (item: { name: string; role: string[] }) => {
							const role = teamRoles[item.role[0] as keyof typeof teamRoles];
							return { label: `${role.toUpperCase()} - ${item.name}` };
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
									value: "acceptanceMechanic",
									label: "Přijímací technik",
								},
								{
									value: "chiefMechanic",
									label: "Hlavní mechanik",
								},
								{
									value: "teamCoordinator",
									label: "Koordinátor týmu",
								},
								{
									value: "videoCrew",
									label: "Video tým",
								},
								{
									value: "photographer",
									label: "Fotograf",
								},
								{
									value: "catering",
									label: "Catering",
								},
								{
									value: "prManager",
									label: "PR Manager",
								},
								{
									value: "mechanic",
									label: "Mechanik",
								},
								{
									value: "scout",
									label: "Průzkum trati",
								},
							],
						},
						{
							type: "string",
							name: "sex",
							label: "Pohlaví",
							list: true,
							options: [
								{
									value: "Female",
									label: "F",
								},
								{
									value: "Male",
									label: "M",
								},
							],
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
	],
};
