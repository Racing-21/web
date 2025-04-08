import {
	BuildingOfficeIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
	{
		title: "Náš tým",
		topLink: "o-nas",
		links: [
			{
				name: "Náš tým",
				description: "Informace o členech závodního týmu Racing 21",
				href: "/o-nas/tym",
				icon: ChartPieIcon,
			},
			{
				name: "Technika",
				description: "Specifikace našich závodních speciálů a vybavení",
				href: "/o-nas/technika",
				icon: CursorArrowRaysIcon,
			},
			{
				name: "Výsledky",
				description: "Tuzemské a zahraniční úspěchy týmu Racing 21",
				href: "/o-nas/vysledky",
				icon: FingerPrintIcon,
			},
			{
				name: "Partneři",
				description: "Partneři týmu Racing 21",
				href: "/o-nas/partneri",
				icon: ChartPieIcon,
			},
		],
	},
	{
		title: "Naše služby",
		topLink: "sluzby",
		links: [
			{
				name: "Příprava a stavba závodních vozů",
				description:
					"Náš tým zkušených techniků dostane váš vůz před závody do té nejlepší kondice.",
				href: "/sluzby/servis-rally-vozu",
				icon: ChartPieIcon,
			},
			{
				name: "Servis sportovních vozů",
				description:
					"Váš vůz si zaslouží tu nejlepší péči. Naši technici se zkušenostmi z mezinárodních závodů mu ji poskytnou.",
				href: "/sluzby/servis-sportovnich-vozu",
				icon: CursorArrowRaysIcon,
			},
			{
				name: "Renovace veteránů a youngtimerů",
				description:
					"Pořídili jste si vysněného veterána, ale nemáte čas na jeho renovaci? My si čas rádi uděláme a přidáme mnohaleté zkušenosti s renovací vozidel všech světových značek.",
				href: "/sluzby/renovace-veteranu",
				icon: FingerPrintIcon,
			},
			{
				name: "Poradenství při nákupu vozidel",
				description:
					"Máte vysněného veterána, ale nechcete se při jeho nákupu spálit? Rádi vám pomůžeme vybrat vůz bezpečně a bez obav.",
				href: "/sluzby/nakup-veteranu",
				icon: FingerPrintIcon,
			},
		],
	},
	{
		title: "Pronájem",
		topLink: "pronajem",
		links: [
			{
				name: "Rally vozy k pronájmu",
				description: "Nabízíme pronájem závodní techniky a vozů.",
				href: "/pronajem/pronajem-zavodnich-specialu",
				icon: ChartPieIcon,
			},
			{
				name: "Konferenční prostory",
				description: "Disponujeme rozsáhlými prostory jen kousek od Prahy.",
				href: "/pronajem/pronajem-konferencnich-prostor",
				icon: BuildingOfficeIcon,
			},
			{
				name: "Přívěsy Turatello k pronájmu",
				description:
					"S našimi krytými přívěsy přepravíte vozidla i jiný náklad bezpečně a komfortně.",
				href: "/pronajem/pronajem-krytych-privesu-turatello",
				icon: ChartPieIcon,
			},
			{
				name: "Zázemí rallye servisu",
				description:
					"Poskytneme vám stany, cateringové vybavení, zkrátka vše pro servis během závodů či testování.",
				href: "/pronajem/pronajem-servisniho-zazemi",
				icon: ChartPieIcon,
			},
		],
	},
	{
		title: "Produktová nabídka",
		topLink: "produktova-nabidka",
		links: [],
	},
	{
		title: "Média",
		topLink: "media",
		links: [
			{
				name: "Aktuality",
				description: "Veškeré novinky o našem týmu na jednom místě.",
				href: "/media/aktuality",
				icon: NewspaperIcon,
			},
		],
	},
	{
		title: "Kontakt",
		topLink: "kontakt",
		links: [],
	},
];
