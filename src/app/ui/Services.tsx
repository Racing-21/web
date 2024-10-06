import {
	AcademicCapIcon,
	BanknotesIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

const services = [
	{
		title: "Servis závodních vozů",
		href: "/sluzby/servis-zavodnich-aut",
		description:
			"Náš tým zkušených techniků dostane váš vůz před závody to té nejlepší kondice.",
		icon: ClockIcon,
		iconForeground: "text-teal-700",
		iconBackground: "bg-teal-50",
	},
	{
		title: "Servis sportovních vozů",
		href: "/sluzby/servis-sportovnich-vozu",
		description:
			"Váš sportovní vůz si zaslouší tu nejlepší péči. Naši technici se zkušenostmi z mezinárodních závodů mu ji poskytnou",
		icon: CheckBadgeIcon,
		iconForeground: "text-purple-700",
		iconBackground: "bg-purple-50",
	},
	{
		title: "Renovace veteránů a youngtimerů",
		href: "/sluzby/renovace-veteranu",
		description:
			"Pořídili jste si vysněného veterána, ale nemáte čas na renovaci? Máme mnohaleté zkušenosti se renovací vozidel značek z celého světa",

		icon: UsersIcon,
		iconForeground: "text-sky-700",
		iconBackground: "bg-sky-50",
	},
	{
		title: "Nákup veteránů a yountimerů",
		href: "/sluzby/nakup-veteranu",
		description:
			"Máte vysněného veterána, ale nechcete se při nákupo spálit? Náš nákupní tým vám pomůže vybrat vůz bez obav.",

		icon: BanknotesIcon,
		iconForeground: "text-yellow-700",
		iconBackground: "bg-yellow-50",
	},
	{
		title: "Pronájem techniky a vozů",
		href: "/pronajem/pronajem-techniky-a-vozu",
		description: "Nabízíme pronájem závodní techniky a vozů",
		icon: ReceiptRefundIcon,
		iconForeground: "text-rose-700",
		iconBackground: "bg-rose-50",
	},
	{
		title: "Pronájem konferenčních prostor",
		href: "/pronajem/pronajem-konferencnich-prostor",
		description: "Máme k dispozici rozsáhlé prostory k pronájmu na Praze západ",

		icon: AcademicCapIcon,
		iconForeground: "text-indigo-700",
		iconBackground: "bg-indigo-50",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Services() {
	return (
		<div className="md:grid-cols-3 gap-4 rounded-lg bg-grayPrimary p-6">
			<div className={"p-4"}>
				<p className={"text-center mb-2"}>
					Vojtěch Štajf, jezdec a manažer týmu ACCR Racing21, má téměř 30 let zkušeností v
					motoristickém sportu s úspěchy na domácí i zahraniční scéně. Racing21 nabízí
					mechanické opravy, repase a úpravy motorů, stavbu, servis a pronájem závodních
					vozů. Naše moderně vybavená dílna v Červeném Újezdě, kousek od pražského
					letiště, je připravena poskytnout profesionální služby nejen pro soutěžní týmy a
					sportovní vozy, ale i youngtimery.
				</p>
			</div>
			<div className="divide-y divide-black overflow-hidden rounded-lg bg-white sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 border-transparent">
				{services.map((action, actionIdx) => (
					<div
						key={action.title}
						className={classNames(
							actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
							actionIdx === 1 ? "sm:rounded-tr-lg" : "",
							actionIdx === services.length - 2 ? "sm:rounded-bl-lg" : "",
							actionIdx === services.length - 1
								? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
								: "",
							"flex group relative bg-grayPrimary px-6 py-4 border-1 border-grayPrimary focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50",
						)}
					>
						<div>
							<span
								className={classNames(
									action.iconBackground,
									action.iconForeground,
									"inline-flex rounded-lg p-3 ring-4 ring-white",
								)}
							>
								<action.icon aria-hidden="true" className="h-6 w-6" />
							</span>
						</div>
						<div className="mt-1 ml-6 mr-6 mb-3">
							<h3 className="text-base font-semibold leading-6 text-gray-50 group-hover:text-red-600">
								<a href={action.href} className="focus:outline-none">
									{/* Extend touch target to entire panel */}
									<span aria-hidden="true" className="absolute inset-0" />
									{action.title}
								</a>
							</h3>
							<p className="mt-2 text-sm text-gray-500">{action.description}</p>
						</div>
						<span
							aria-hidden="true"
							className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
						>
							<svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
								<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
							</svg>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
