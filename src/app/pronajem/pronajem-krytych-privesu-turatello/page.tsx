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
				<HeroSection image={headerImage} title={"Přívěsy k pronájmu"} />
			</div>
			<PageLayout>
				<div className="bg-grayPrimary rounded-lg">
					<div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
						<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
							<div className="w-full">
								<p className="mt-4 text-gray-100 text-center">
									Chcete své vozidlo při převozu ochránit před nepříznivými
									klimatickými jevy a zvědavými pohledy okolí? Kryté přepravníky
									značky Turatello z italské Padovy, jejímž jsme pro český a
									slovenský trh výhradním dovozcem, představují ideální způsob pro
									transport nejen závodních aut a sportovních vozů a veteránů, ale
									třeba i motorek, motokár nebo čtyřkolek. Na silnici jsou
									perfektně stabilní, mají velmi nízký nájezdový úhel, umožňující
									naložit také vozy s nízkou světlou výškou, i dostatečný úložný
									prostor v podobě četných schránek.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col gap-4">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>K pronájmu nabízíme:</h2>

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
