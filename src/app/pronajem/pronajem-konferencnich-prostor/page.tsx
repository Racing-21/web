import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import client from "../../../../tina/__generated__/client";
import { ContactForm } from "@/app/ui/ContactForm";
import { VenueDetail } from "@/app/ui/venues/VenueDetail";
import { RentalCategoryCard } from "@/app/ui/RentalCategoryCard";

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
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Dostupné prostory</h2>

					<TabGroup className="flex flex-col">
						<TabList>
							<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
								{venues?.map(
									(prostor) =>
										prostor && (
											<Tab key={prostor.name}>
												<RentalCategoryCard
													category={{
														name: prostor.name,
														shortDescription: prostor.shortDescription,
														image: prostor.image,
													}}
												/>
											</Tab>
										),
								)}
							</div>
						</TabList>
						<TabPanels className="mt-6">
							{venues?.map(
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
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Doplňkové služby</h2>
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<div>
							<h3 className={"text-xl font-bold mb-2"}>Cofee break</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
								<div
									className={"bg-black rounded-lg px-6 py-3 h-full flex flex-col"}
								>
									<h4 className={"mb-2 font-bold "}>CB I</h4>
									<ul className={"ml-2"}>
										<li>Káva, čaj, voda (včetně servisu)</li>
										<li>Muffiny nebo minizákusky (1 ks/os)</li>
										<li>Ovocná mísa (50g/os)</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto font-bold"}>160 Kč/os</p>
									</div>
								</div>
								<div className={"bg-black rounded-lg px-6 py-3"}>
									<h4 className={"mb-2 font-bold"}>CB II</h4>
									<ul className={"ml-2"}>
										<li>Káva, čaj, voda, domácí limonády</li>
										<li>Tiramisu (1ks/os)</li>
										<li>Ovocné špízy (1ks/os)</li>
										<li>Minizákusky (1ks/os)</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto  font-bold"}>285 Kč/os</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className={"text-xl font-bold mb-2 mt-2"}>Catering</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
								<div
									className={"bg-black rounded-lg px-6 py-3 h-full flex flex-col"}
								>
									<h4 className={"mb-2 font-bold "}>Česká klasika</h4>
									<ul className={"ml-2"}>
										<li>Hovězí vývar s játrovými knedlíčky</li>
										<li>
											Hlavní jídlo dle Vašeho výběru <br />
											(Guláš/Řízek s bramborem/Španělský ptáček)
										</li>
										<li>Salát</li>
										<li>Jablečný závin</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto font-bold"}>
											{new Intl.NumberFormat("cs-CZ", {
												style: "currency",
												currency: "CZK",
												maximumFractionDigits: 0,
											}).format(450)}
											/os
										</p>
									</div>
								</div>
								<div className={"bg-black rounded-lg px-6 py-3"}>
									<h4 className={"mb-2 font-bold"}>Menu I</h4>
									<ul className={"ml-2"}>
										<li>Carpaccio ze žluté řepy s rukolou a parmezánem</li>
										<li>Prkénko masa a sýrů z udírny</li>
										<li>Studené kuřecí roládky</li>
										<li>Domácí paštika s brusinkami</li>
										<li>Kanapky</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto  font-bold"}>
											{new Intl.NumberFormat("cs-CZ", {
												style: "currency",
												currency: "CZK",
												maximumFractionDigits: 0,
											}).format(650)}
											/os
										</p>
									</div>
								</div>
								<div className={"bg-black rounded-lg px-6 py-3"}>
									<h4 className={"mb-2 font-bold"}>Menu II</h4>
									<ul className={"ml-2"}>
										<li>Domácí paštika s brusinkami</li>
										<li>Marinovaný losos na salátku s bagetkou</li>
										<li>Caesar salát s kuřecím prsem</li>
										<li>Vepřová panenka s batátovým pyré</li>
										<li>Smažený řízek s petrželovým bramborem</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto  font-bold"}>
											{new Intl.NumberFormat("cs-CZ", {
												style: "currency",
												currency: "CZK",
												maximumFractionDigits: 0,
											}).format(1100)}
											/os
										</p>
									</div>
								</div>
								<div className={"bg-black rounded-lg px-6 py-3"}>
									<h4 className={"mb-2 font-bold"}>Menu III</h4>
									<ul className={"ml-2"}>
										<li>Kanapky</li>
										<li>Hovězí carpaccio s rukolou a parmezánem</li>
										<li>Marinovaný losos na salátku</li>
										<li>Hovězí roastbeef s omáčkou</li>
										<li>Miniřízečky a grilovaná zelenina</li>
										<li>Pečená kachna s knedlíkem a zelím</li>
									</ul>
									<div className={"mt-auto w-full flex flex-row"}>
										<p className={"ml-auto  font-bold"}>
											{new Intl.NumberFormat("cs-CZ", {
												style: "currency",
												currency: "CZK",
												maximumFractionDigits: 0,
											}).format(1320)}
											/os
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
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
