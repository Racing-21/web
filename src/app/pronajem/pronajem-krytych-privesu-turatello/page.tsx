import headerImage from "@/images/team/header.webp";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import client from "../../../../tina/__generated__/client";
import { VenueDetail } from "@/components/venues/VenueDetail";
import { ContactForm } from "@/components/ContactForm";

export default async function Page() {
	const { data } = await client.queries.pronajemPrivesu({ relativePath: "Privesy.md" });

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection image={headerImage} title={"Prémiové přívěsy Turatello"} />
			</div>
			<PageLayout>
				<div className="bg-grayPrimary rounded-lg">
					<div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
						<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
							<div className="w-full">
								<p className="mt-4 text-gray-100 text-center">
									Již více než padesát let společnost Turatello navrhuje a staví
									přívěsy a návěsy pro přepravu motokár, závodních vozidel i
									unikátních automobilových modelů. Uzavřené přívěsy z vysoce
									kvalitních komponentů jsou vyráběny na míru požadavkům našich
									klientů v souladu s nejvyššími standardy kvality.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col gap-4">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Dostupné prostory</h2>

					{data.pronajemPrivesu.privesy?.map(
						(prives) =>
							prives && (
								<VenueDetail venue={prives} key={`${prives.name}-detailTab`} />
							),
					)}
				</div>
				<div className="w-full flex flex-col" id="contact-form">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Kontaktní formulář</h2>
					<ContactForm />
				</div>
			</PageLayout>
		</>
	);
}
