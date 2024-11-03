import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
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

	const venues = data.pronajem.prostory;

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
							Velká konferenční místnost s barem a technickým zázemím je ideální místo
							pro přednášky a následný networking. V našem showroomu pak můžete
							prezentovat klientům svůj produkt v prostředí, díky kterému na Vaši
							prezentaci jen tak nezapomenou.
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
						Pro Vaši akci umíme zařídit catering na míru. Podrobnou nabídku menu s vámi
						rádi probereme.
					</section>
				</div>
				<div className="w-full flex flex-col" id="contact-form">
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
