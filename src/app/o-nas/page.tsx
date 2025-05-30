import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { RentalCategoryCard } from "@/components/RentalCategoryCard";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466603/Rally_Bohemia_23-4402_g3z8un.webp"
					}
					title={"Racing 21"}
					subtitle={"Náš tým"}
					content={"Kdo jsme, s kým spolupracujeme, čím jezdíme a jak si vedeme"}
				/>
			</div>
			<PageLayout>
				<div className="w-full grid md:grid-cols-2 gap-4">
					<Link href={"o-nas/tym"}>
						<RentalCategoryCard
							category={{
								name: "Závodníci a realizační tým",
								image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466603/Rally_Bohemia_23-4402_g3z8un.webp",
								shortDescription:
									"Informace o našich závodnících a členech realizačního týmu",
							}}
						/>
					</Link>
					<Link href={"o-nas/technika"}>
						<RentalCategoryCard
							category={{
								name: "Technika",
								image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729847879/toyota_12_tso8wo.webp",
								shortDescription: "Vozy, s kterými závodíme",
							}}
						/>
					</Link>
					<Link href={"o-nas/vysledky"}>
						<RentalCategoryCard
							category={{
								name: "Výsledky",
								image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466732/plzen_23-6057_dtejjp.webp",
								shortDescription:
									"Přehled našeho průběžného pořadí a jednotlivých výsledků",
							}}
						/>
					</Link>
					<Link href={"o-nas/partneri"}>
						<RentalCategoryCard
							category={{
								name: "Partneři",
								image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466679/Rally_Morava_23-6309_eft5bs.webp",
								shortDescription: "Partneři, kteří nás podporují",
							}}
						/>
					</Link>
				</div>
				{/*<div className="w-full flex flex-col">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
