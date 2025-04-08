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
			"Kromě samotného závodění se Tým Racing 21 věnuje servisu a pronájmu závodních aut, servisu sportovních aut a pronájmu konferenčních prostor v Praze ",
	},
	twitter: {
		title: "Racing 21",
		description:
			"Závodní tým, renovace veteránů, servis závodních a sportovních vozů, pronájem konferenčních prostor Praha Západ",
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
				subtitle={"Nejen závodní rally tým"}
			/>
			{/* Logo cloud */}
			<HomepageLogoCloud partners={partners.partners.partner} />
			<PageLayout>
				<div className="bg-grayPrimary rounded-lg">
					<div className="mx-auto max-w-7xl py-12 sm:px-2 sm:py-16 lg:px-4">
						<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
							<div className="w-full">
								<h2 className="text-4xl font-bold tracking-tight text-red-600 text-center">
									Závodní tým k Vašim služám
								</h2>
								<p className="mt-4 text-gray-100 text-center">
									Soutěžní tým Racing 21 založil v roce 2015 matematik Karel
									Janeček a soutěžní jezdec Vojtěch Štajf. Spojuje nás vášeň pro
									automobily. Dveře našeho servisu jsou otevřeny i Vám, kterým
									srdce při zvuku spalovacího motoru zaplesá, tak jako nám. Naši
									zkušení mechanici se postarají i o Vaše vozidlo. Mimo závodní
									speciály se postaráme i o sportovní vozy a youngtimery. Od
									drobných oprav přes úpravy až po kompletní renovaci se o Vaši
									čtyřkolovou radost postaráme.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Nejen závodní tým</h2>
					<Services />
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Racing 21</h2>
					<div className={"grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-lg"}>
						<ServiceNavigationCard
							link={"o-nas/tym"}
							title={"Závodní tým"}
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
					<NewsSection numberOfNews={3} />
				</div>
			</PageLayout>
		</>
	);
}
