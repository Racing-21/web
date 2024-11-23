import serviceCardImage from "@/images/homepage/serviceCard.webp";
import rallyTeamCardImage from "@/images/homepage/rallyTeamCard.webp";
import rentalCardImage from "@/images/homepage/rentalCard.webp";
import { Metadata } from "next";
import Services from "./ui/Services";
import { ServiceNavigationCard } from "@/app/ui/ServiceNavigationCard";
import { HomepageLogoCloud } from "@/app/ui/HomepageLogoCloud";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { NewsSection } from "@/app/ui/NewsSection";
import client from "../../tina/__generated__/client";

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
	const { data: partners } = await client.queries.partners({ relativePath: "Partners.md" });
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
									Spojuje nás vášeň pro automobily. Dveře našeho servisu jsou
									otevřeny i Vám, kterým srdce při zvuku spalovacího motoru
									zaplesá, tak jako nám. Naši zkušení mechanici se postarají i o
									Vaše vozidlo. Mimo závodní speciály se postaráme i o sportovní
									vozy a youngtimery. Od drobných oprav přes úpravy až po
									kompletní renovaci se o Vaši čtyřkolovou radost postaráme.
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
							image={rallyTeamCardImage}
						/>
						<ServiceNavigationCard
							link={"sluzby"}
							title={"Naše služby"}
							altImageText={"Servis vozidel"}
							image={serviceCardImage}
						/>
						<ServiceNavigationCard
							link={"pronajem"}
							title={"Pronájem vozidel a prostor"}
							altImageText={"Sekce o pronájmu vozidel a prostor"}
							image={rentalCardImage}
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Aktuality</h2>
					<NewsSection />
				</div>
			</PageLayout>
		</>
	);
}
