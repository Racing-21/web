import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

const PARTNER_SITES = [
	{
		id: 1,
		name: "HRX",
		href: "https://www.hrxtech.cz",
		subheadline: "Prémiové FIA certifikované závodní a týmové oblečení italské značky HRX",
	},
	{
		id: 2,
		name: "Turatello",
		href: "https://www.turatello.cz",
		subheadline: "Kryté přívěsy a návěsy italského výrobce TURATELLO",
	},
	{
		id: 3,
		name: "Flex",
		href: "https://www.naradi-flex.cz",
		subheadline: "Profesionální elektro nářadí FLEX",
	},
	{
		id: 4,
		name: "Reiger a Protolum",
		subheadline: "Špičkové sportovní tlumiče REIGER a PROTLUM",
	},
	{
		id: 5,
		name: "Sonax",
		href: "https://www.sonax.cz",
		subheadline: "Kvalitní německá autokosmetika SONAX",
	},
	{
		id: 6,
		name: "Winmax",
		href: "https://www.winmax.cz",
		subheadline: "Brzdové destičky Winmax",
	},
	{
		id: 7,
		name: "EXEDY",
		href: "https://www.exedy.co.uk/",
		subheadline: "Kvalitní německá autokosmetika SONAX",
	},
	{
		id: 7,
		name: "Custom Cages",
		href: "https://www.customcages.co.uk/",
		subheadline: "Bezpečnostní ochranné konstrukce Custom Cages",
	},
];

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
					title={"Racing 21"}
					content={"Produktová nabídka"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<ul role="list" className="divide-y divide-gray-100">
							{PARTNER_SITES.map((item) => (
								<li
									key={item.id}
									className="flex flex-col md:flex-row md:items-center justify-between gap-x-6 py-5"
								>
									<div className="min-w-0 mb-2 md:mb-0">
										<div className="flex items-start gap-x-3">
											<p className="text-lg font-semibold text-red-600 ">
												{item.name}
											</p>
										</div>
										<div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-50">
											<p className="">{item.subheadline}</p>
										</div>
									</div>
									{item.href && (
										<div className="flex flex-none items-center gap-x-4">
											<a
												href={item.href}
												target="_blank"
												className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
											>
												Navštívit e-shop
												<span className="sr-only">, {item.name}</span>
											</a>
										</div>
									)}
								</li>
							))}
						</ul>
					</section>
				</div>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
