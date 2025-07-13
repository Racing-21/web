import { TinaField } from "tinacms";

export const categoryFields: TinaField[] = [
	{
		name: "categories",
		label: "Kategorie služeb",
		type: "object",
		list: true,
		ui: {
			itemProps: (item) => {
				return { label: item?.name };
			},
		},
		fields: [
			{
				type: "string",
				name: "name",
				label: "Název kategorie",
				isTitle: true,
				required: true,
			},
			{
				type: "image",
				name: "image",
				label: "Feature image",
				required: true,
			},
			{
				type: "object",
				name: "features",
				label: "Vlastnosti",
				list: true,
				required: true,
				fields: [
					{
						type: "string",
						name: "value",
						label: "Vlastnost",
						required: true,
					},
					{
						type: "image",
						name: "image",
						label: "Obrázek vlastnosti",
						description: "Obrázek zobrazený u vlastnosti",
					},
				],
			},
		],
	},
];

export const priceListFields: TinaField[] = [
	{
		name: "priceList",
		label: "Ceník",
		type: "object",
		fields: [
			{
				type: "string",
				name: "title",
				label: "Název ceníku",
				required: true,
			},
			{
				type: "object",
				name: "sections",
				label: "Sekce ceníku",
				list: true,
				ui: {
					itemProps: (item) => {
						return { label: item?.title };
					},
				},
				fields: [
					{
						type: "string",
						name: "title",
						label: "Název sekce",
						isTitle: true,
						required: true,
					},
					{
						type: "object",
						name: "items",
						label: "Položky ceníku",
						list: true,
						ui: {
							itemProps: (item) => {
								return { label: item?.name };
							},
						},
						fields: [
							{
								type: "string",
								name: "name",
								label: "Název položky",
								isTitle: true,
								required: true,
							},
							{
								type: "number",
								name: "price",
								label: "Cena",
								description: "Zadejte cenu v Kč (pokud je cena jednotná)",
							},
							{
								type: "number",
								name: "priceFrom",
								label: "Cena od",
								description:
									"Zadejte počáteční cenu v Kč (pokud se jedná o cenové rozpětí)",
							},
							{
								type: "number",
								name: "priceTo",
								label: "Cena do",
								description:
									"Zadejte koncovou cenu v Kč (pokud se jedná o cenové rozpětí)",
							},
						],
					},
				],
			},
		],
	},
];

export const GeneralServiceCollection = {
	name: "generalService",
	label: "Autoservis",
	path: "content/sluzby",
	match: { include: "GeneralService" },
	fields: [...categoryFields, ...priceListFields],
	defaultItem: {
		categories: [
			{
				name: "Pneumatiky a kola",
				features: [
					{
						value: "Výměna pneumatik",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Vyvážení kol",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Oprava defektů",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
			{
				name: "Podvozek a brzdy",
				features: [
					{
						value: "Výměna brzdových destiček",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Kontrola tlumičů",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Seřízení geometrie",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
			{
				name: "Kontrola a příprava na STK",
				features: [
					{
						value: "Kompletní kontrola vozidla",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Odstranění závad",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Zajištění STK",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
			{
				name: "Motor a další servisní práce",
				features: [
					{
						value: "Výměna oleje a filtrů",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Diagnostika motoru",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Opravy motoru",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
			{
				name: "Diagnostika",
				features: [
					{
						value: "Počítačová diagnostika",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Kontrola elektroniky",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Hledání závad",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
			{
				name: "Karoserie",
				features: [
					{
						value: "Opravy karoserie",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Lakování",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
					{
						value: "Antikorozní ochrana",
						image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg",
					},
				],
			},
		],
		priceList: {
			title: "Ceník služeb",
			sections: [
				{
					title: "Základní servis",
					items: [
						{
							name: "Výměna oleje",
							price: 800,
						},
						{
							name: "Diagnostika",
							priceFrom: 500,
							priceTo: 1500,
						},
					],
				},
			],
		},
	},
};
