import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { UpcomingEventsCard } from "@/app/ui/UpcomingEventCard";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import client from "../../../../tina/__generated__/client";
import { ContactForm } from "@/app/ui/ContactForm";
import { VenueDetail } from "@/app/ui/venues/VenueDetail";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

export default async function Page() {
	const { data } = await client.queries.pronajem({ relativePath: "Prostory.md" });

	if (!data) {
		return null;
	}

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
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
							Velká konferenční místnost s barem a technickým zázemím je ideální místo
							pro přednášky a následný networking. V našem showroomu pak můžete
							prezentovat klientům svůj produkt v prostředí, díky kterému na Vaši
							prezentaci jen tak nezapomenou.
						</p>
					</section>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Dostupné prostory</h2>

					<TabGroup className="flex flex-col">
						<TabList>
							<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
								{data.pronajem?.prostory?.map(
									(prostor) =>
										prostor && (
											<Tab key={prostor.name}>
												<UpcomingEventsCard
													title={prostor.name}
													altImageText={"Obrázek konferenční místnosti"}
													image={prostor?.image}
													description={prostor.shortDescription}
												/>
											</Tab>
										),
								)}
							</div>
						</TabList>
						<TabPanels className="mt-6">
							{data.pronajem?.prostory?.map(
								(prostor) =>
									prostor && (
										<VenueDetail
											venue={prostor}
											key={`${prostor.name}-detailTab`}
										/>
									),
							)}
						</TabPanels>
					</TabGroup>
				</div>
				<div className="w-full flex flex-col">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Kontaktní formulář</h2>
					<ContactForm />
				</div>

				<div className="w-full flex flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
