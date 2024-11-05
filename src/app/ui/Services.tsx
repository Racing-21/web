import {
	ReceiptRefundIcon,
	CogIcon,
	WrenchScrewdriverIcon,
	BuildingStorefrontIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
	{
		title: "Servis a správa závodních vozů",
		href: "/sluzby/servis-zavodnich-aut",
		description: "Naši zkušení mechanici dostanou váš závodní vůz do té nejlepší kondice",
		icon: WrenchScrewdriverIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Servis a úpravy sportovních vozů",
		href: "/sluzby/servis-sportovnich-vozu",
		description:
			"Váš sportovní vůz si zaslouší tu nejlepší péči. Naši technici se zkušenostmi z mezinárodních závodů mu ji dopřejí.",
		icon: CogIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Renovace youngtimerů",
		href: "/sluzby/renovace-veteranu",
		description:
			"Pořídili jste si vysněné auto, které by potřebovalo trochu či více péče? Svěřte ho do péče našeho zkušeného týmu.",
		icon: CogIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Poradenství v nákupu vozidel",
		href: "/sluzby/nakup-veteranu",
		description:
			"Nakupujete auto na investici nebo jen chcete žihadlo na víkendové svezení. Svěřte nám Vaše přání a my Vám pomůžeme s výběrem vozu bez obav",
		icon: UsersIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Pronájem techniky a vozů na závody",
		href: "/pronajem/pronajem-techniky-a-vozu",
		description: "Nabízíme pronájem mobilního zázemí servisu a závodní techniky",
		icon: ReceiptRefundIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Pronájem konferenčních prostor",
		href: "/pronajem/pronajem-konferencnich-prostor",
		description: "Konference či oslava ve stylových prostorech Racing 21 na Praze západ",
		icon: BuildingStorefrontIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Services() {
	return (
		<div className="md:grid-cols-3 gap-4 rounded-lg bg-grayPrimary p-2 md:p-6 ">
			<div className={"p-4"}>
				<p className={"text-center mb-2"}>
					Vojtěch Štajf, jezdec a jednatel týmu ACCR Racing21, má téměř 30 let zkušeností
					v motoristickém sportu s úspěchy na domácí i zahraniční scéně. Racing21 nabízí
					mechanické opravy, úpravy, stavbu, servis a pronájem závodních a sportovních
					vozů. Naše moderně vybavená dílna v Červeném Újezdě, kousek od pražského
					letiště, je připravena poskytnout profesionální služby nejen pro soutěžní týmy a
					sportovní vozy, ale i youngtimery a další vozy, kterým chcete dopřát
					nadstandartní péči.
				</p>
			</div>
			<div className="divide-y divide-black overflow-hidden rounded-lg bg-white sm:grid sm:grid-cols-2 gap-1 sm:divide-y-0 ml-[-1px] mt-[-1px]">
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
							"flex group relative bg-grayPrimary px-2 md:px-6 py-4 flex-col md:flex-row focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50 m-[-1px]",
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
								<action.icon aria-hidden="true" className="h-3 w-3 md:h-6 md:w-6" />
							</span>
						</div>
						<div className="mt-2 md:mt-1 md:ml-6 md:mr-6 mb-3">
							<h3 className="text-base font-semibold leading-6 text-gray-50 group-hover:text-red-600">
								<Link
									href={action.href}
									className="focus:outline-none active:outline-none"
								>
									<span aria-hidden="true" className="absolute inset-0" />
									{action.title}
								</Link>
							</h3>
							<p className="mt-2 text-sm text-gray-300 group-hover:text-grayPrimary">
								{action.description}
							</p>
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
