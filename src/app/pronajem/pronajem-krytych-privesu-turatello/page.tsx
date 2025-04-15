import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import client from "../../../../tina/__generated__/client";
import { VenueDetail } from "@/components/venues/VenueDetail";
import { ContactForm } from "@/components/ContactForm";
import { trailersQuery } from "../../../../tina/queries/rentalQueries";
import {
	PronajemPrivesuConnectionEdges,
	PronajemPrivesuPrivesy,
} from "../../../../tina/__generated__/types";

export default async function Page() {
	const { data } = await client.request(
		{
			query: trailersQuery,
			variables: {
				relativePath: "Privesy.md",
			},
		},
		{},
	);

	const edges: PronajemPrivesuConnectionEdges[] = data.pronajemPrivesuConnection.edges;

	const trailers: PronajemPrivesuPrivesy[] = edges
		.flatMap((edge) => edge.node?.privesy ?? [])
		.flat()
		.filter((trailer): trailer is PronajemPrivesuPrivesy => trailer != null);

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729946809/IMG_3842_xxogcg.webp"
					}
					title={"Přívěsy k pronájmu"}
				/>
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
					{trailers.map(
						(trailer) =>
							trailer && (
								<VenueDetail venue={trailer} key={`${trailer.name}-detailTab`} />
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
