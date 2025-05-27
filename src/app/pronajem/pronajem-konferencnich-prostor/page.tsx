import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import client from "../../../../tina/__generated__/client";
import { ContactForm } from "@/components/ContactForm";
import { VenueDetail } from "@/components/venues/VenueDetail";
import { CakeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { venueQuery } from "../../../../tina/queries/rentalQueries";
import { PronajemProstory } from "../../../../tina/__generated__/types";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

const features = [
	{
		name: "Catering",
		description:
			"Od zákusků ke kávě po menu o několika chodech. Zajistíme kompletní catering dle vašeho přání.",
		icon: CakeIcon,
	},
	{
		name: "Hostesky",
		description:
			"Abyste se mohli plně věnovat svým hostům. Zajistíme vám hostesky, které vám během vaší akce poskytnou dokonalý servis.",
		icon: UserIcon,
	},
	{
		name: "Parkování",
		description:
			"Parkujte bez starostí. V rámci našeho uzavřeného areálu je k dispozici dostatek parkovacích míst.",
		icon: LockClosedIcon,
	},
];
export default async function Page() {
	const { data } = await client.request(
		{
			query: venueQuery,
			variables: {
				relativePath: "Prostory.md",
			},
		},
		{},
	);

	if (!data) {
		return null;
	}

	const venues: PronajemProstory[] = data.pronajem.prostory;

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/05_tqrjra"
					}
					title={"Prostory k pronájmu"}
					content={"Pro vaše firemní i soukromé akce"}
				/>
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<p className="text-center">
							Potřebujete místo, kde uspořádáte konferenci nebo prezentaci nového
							produktu? V našich prostorách dodáte vašemu eventu nádech jedinečnosti.
							Velká konferenční místnost s barem a technickým zázemím je ideální
							volbou pro přednášky a následný networking. V showroomu můžete vašim
							klientům prezentovat produkt, na který i díky originálnímu prostředí
							rozhodně jen tak nezapomenou. Špičkově vybavená dílna pak poskytuje
							dokonalé zázemí pro detailnější a názornou prezentaci.
						</p>
					</section>
				</div>
				<div className="w-full flex flex-col gap-4">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Dostupné prostory</h2>

					{venues?.map(
						(prostor) =>
							prostor && (
								<VenueDetail venue={prostor} key={`${prostor.name}-detailTab`} />
							),
					)}
				</div>
				<div className="w-full flex flex-col">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Doplňkové služby</h2>
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<div className="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
							<h2 className="sr-only">A better way to send money.</h2>
							<dl className="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
								{features.map((feature) => (
									<div key={feature.name}>
										<dt>
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-red-600">
												<feature.icon
													aria-hidden="true"
													className="h-8 w-8"
												/>
											</div>
											<p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-200">
												{feature.name}
											</p>
										</dt>
										<dd className="mt-2 text-base/7 text-gray-50">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</section>
				</div>
				<div className="w-full flex flex-col" id="contact-form">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Kontaktní formulář</h2>
					<ContactForm />
				</div>

				{/*<div className="w-full flex flex-col">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
