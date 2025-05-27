import {
	CogIcon,
	WrenchScrewdriverIcon,
	BuildingStorefrontIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const services = [
	{
		title: "Servis a provoz soutěžních vozů",
		href: "/sluzby/servis-a-provoz-souteznich-vozu",
		description: "Naši zkušení mechanici dostanou váš soutěžní vůz do té nejlepší kondice",
		icon: WrenchScrewdriverIcon,
		iconForeground: "text-red-600",
		iconBackground: "bg-black",
	},
	{
		title: "Stavba a pronájem soutěžních vozů",
		href: "/sluzby/stavba-a-pronajem-souteznich-vozu",
		description: "Naši zkušení mechanici dostanou váš soutěžní vůz do té nejlepší kondice",
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
		<div className="rounded-lg bg-grayPrimary p-2 md:p-6 h-full">
			<div className={"p-4"}>
				<p className={"text-center mb-2"}>
					Naší celkovou nabídku spolupráce rozdělujeme do několika činností. Ve všech
					typech prací se však můžete spolehnout na odbornost našich techniků a zkušenost
					mechaniků, kteří využívají moderní zázemí mechanické dílny týmu Racing21
					v Červeném Újezdě, jen pár minut od pražského letiště Václava Havla. Součástí
					mechanických dílen je mimo jiné špičková opravárenská technologie. A co tedy
					nabízíme?
				</p>
			</div>
			<div className="divide-y divide-black overflow-hidden rounded-lg bg-white sm:grid sm:grid-cols-2 gap-1 sm:divide-y-0 ml-[-1px] mt-[-1px]">
				{services.map((action) => (
					<div
						key={action.title}
						className={classNames(
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
						<div className="mt-2 md:mt-1 md:ml-6 md:mr-6 mb-3 flex flex-col justify-center items-center">
							<h3 className="text-base font-semibold leading-6 text-gray-50 group-hover:text-red-600 m-0">
								<Link
									href={action.href}
									className="focus:outline-none active:outline-none"
								>
									<span aria-hidden="true" className="absolute inset-0" />
									{action.title}
								</Link>
							</h3>
						</div>
						<span
							aria-hidden="true"
							className="pointer-events-none absolute right-3 top-3 text-gray-300 group-hover:text-gray-400"
						>
							<svg fill="currentColor" viewBox="0 0 24 24" className="h-3 w-3">
								<path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
							</svg>
						</span>
					</div>
				))}
				{services.length % 2 === 1 && (
					<div
						className={classNames(
							"rounded-br-lg sm:rounded-bl-none flex group relative bg-grayPrimary px-2 md:px-6 py-4 flex-col md:flex-row focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
						)}
					>
						<div></div>
						<div className="mt-2 md:mt-1 md:ml-6 md:mr-6 mb-3"></div>
					</div>
				)}
			</div>
		</div>
	);
}
