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
				description:
					"Přehled úspěchů týmu Racing 21 v závodech v české republice i ve světě",
				href: "/o-nas/vysledky",
				icon: FingerPrintIcon,
			},
			{
				name: "Partneři",
				description: "Přehled partnerů závodního týmu Racing 21",
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
				name: "Servis závodních aut",
				description:
					"Náš tým zkušených techniků dostane váš vůz před závody to té nejlepší kondice.",
				href: "/sluzby/servis-rally-vozu",
				icon: ChartPieIcon,
			},
			{
				name: "Servis sportovních vozů",
				description:
					"Váš sportovní vůz si zaslouší tu nejlepší péči. Naši technici se zkušenostmi z mezinárodních závodů mu ji poskytnou",
				href: "/sluzby/servis-sportovnich-vozu",
				icon: CursorArrowRaysIcon,
			},
			{
				name: "Renovace veteránů a youngtimerů",
				description:
					"Pořídili jste si vysněného veterána, ale nemáte čas na renovaci? Máme mnohaleté zkušenosti se renovací vozidel značek z celého světa",
				href: "/sluzby/renovace-veteranu",
				icon: FingerPrintIcon,
			},
			{
				name: "Nákup veteránů a youngtimerů",
				description:
					"Máte vysněného veterána, ale nechcete se při nákupo spálit? Náš nákupní tým vám pomůže vybrat vůz bez obav.",
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
				description: "Nabízíme pronájem závodní techniky a vozů",
				href: "/pronajem/pronajem-zavodnich-specialu",
				icon: ChartPieIcon,
			},
			{
				name: "Pronájem konferenčních prostor",
				description: "Máme k dispozici rozsáhlé prostory k pronájmu na Praze západ",
				href: "/pronajem/pronajem-konferencnich-prostor",
				icon: BuildingOfficeIcon,
			},
			{
				name: "Pronájem krytých přívěsů Turatello",
				description: "Přívěsy pro převoz vozů i nákladu",
				href: "/pronajem/pronajem-krytych-privesu-turatello",
				icon: ChartPieIcon,
			},
			{
				name: "Zázemí rallye servisu k pronájmu",
				description:
					"Stany, cateringové vybavení, zkrátka vše pro servis během závodů či testování",
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
