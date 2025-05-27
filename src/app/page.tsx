import { Metadata } from "next";
import { ServiceNavigationCard } from "@/components/ServiceNavigationCard";
import { HomepageLogoCloud } from "@/components/HomepageLogoCloud";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { NewsSection } from "@/components/NewsSection";
import client from "../../tina/__generated__/client";
import Services from "@/components/Services";
import { partnersQuery } from "../../tina/queries/partnersQueries";

export const metadata: Metadata = {
	title: "Racing 21",
	openGraph: {
		type: "website",
		title: "Racing 21",
		description:
			"Kromě samotného závodění se Tým Racing 21 věnuje servisu a pronájmu soutěžních vozů, servisu sportovních aut a pronájmu konferenčních prostor v Praze ",
	},
	twitter: {
		title: "Racing 21",
		description:
			"Soutěžní tým, renovace veteránů, servis závodních a sportovních vozů, pronájem konferenčních prostor Praha Západ",
	},
};

export default async function Home() {
	const { data: partners } = await client.request(
		{
			query: partnersQuery,
			variables: { relativePath: "Partners.md" },
		},
		{},
	);

	return (
		<>
			{/* Hero card */}
			<HeroSection
				image={
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729847729/toyota_1_hhratb.webp"
				}
				title={"Racing 21"}
				subtitle={"Nejen soutěžní rally tým"}
			/>
			{/* Logo cloud */}
			<HomepageLogoCloud partners={partners.partners.partner} />
			<PageLayout>
				<div className="bg-grayPrimary rounded-lg">
					<div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
						<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
							<div className="w-full">
								<h2 className="text-4xl font-bold tracking-tight text-red-600 text-center">
									Využijte naše letité zkušenosti z prostředí motorsportu
								</h2>
								<p className="mt-4 text-gray-100 text-center">
									Soutěžní tým Racing21 založili v roce 2025 matematik Karel
									Janeček a zkušený soutěžní jezdec Vojtěch Štajf, neboť oba
									spojovala neutuchající vášeň pro sportovní automobily a aktivní
									motorsport. Tým našich techniků a mechaniků strávil na
									automobilových soutěžích po celém světě mnoho let a získal tak
									bohaté zkušenosti, které může nyní nabídnout i v péči také o
									vaše vozidla, a to sportovní, historická nebo tolik oblíbené
									youngtimery. S důvěrou se na nás obraťte a dejte tak svým
									„plechovým láskám“ odpovídající péči!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Jaké služby nabízíme?</h2>
					<Services />
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Racing 21</h2>
					<div className={"grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-lg"}>
						<ServiceNavigationCard
							link={"o-nas/tym"}
							title={"Soutěžní tým"}
							altImageText={"Sekce o závodním týmu Racing 21"}
							image={
								"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865364/STA_8247_úspěchy_wmc2it.jpg"
							}
						/>
						<ServiceNavigationCard
							link={"sluzby"}
							title={"Naše služby"}
							altImageText={"Servis vozidel"}
							image={
								"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201397/STA_1295_turatello_phhh8l.jpg"
							}
						/>
						<ServiceNavigationCard
							link={"pronajem"}
							title={"Pronájem vozidel a prostor"}
							altImageText={"Sekce o pronájmu vozidel a prostor"}
							image={
								"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1742201393/STA_3571_rally_vozy_k_pronajmu_ty0xfz.jpg"
							}
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Aktuality</h2>
					<NewsSection numberOfNews={2} />
				</div>
			</PageLayout>
		</>
	);
}
