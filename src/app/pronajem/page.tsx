import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
import { RentalCategoryCard } from "@/components/RentalCategoryCard";

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
				<HeroSection image={racePrepImage} title={"Pronájem prostorů a techniky"} />
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<p className="text-center">
							Nabízíme pronájem výjmečných konferenčních prostor na Praze Západ a také
							pronájem techniky potřebné k přípavě na závod nebo převos automobilu
							kdekoliv po Evropě. Zároveň nabízíme i naši závodní techniku pro vaši
							jízdu. Usedněte za volat třeba historického Opela Kadett či jiných
							soutěžních vozů.
						</p>
					</section>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Možnosti pronájmu </h2>

					<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg"}>
						<Link href={"/pronajem/pronajem-konferencnich-prostor"}>
							<RentalCategoryCard
								category={{
									name: "Pronájem konferenčních prostorů",
									image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/08_ebvm4p.webp",
									shortDescription: "Uspořádejte akci v jedinečné atmosféře",
								}}
							/>
						</Link>
						<Link href={"/pronajem/pronajem-krytych-privesu-turatello"}>
							<RentalCategoryCard
								category={{
									name: "Pronájem prémiových přívěsů Turatello",
									image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/IMG_3702_k79bmj.webp",
									shortDescription:
										"Převážejte svůj automobil bezpečně a spolehlivě",
								}}
							/>
						</Link>
						<Link href={"/pronajem/pronajem-zavodnich-specialu"}>
							<RentalCategoryCard
								category={{
									name: "Pronájem závodních speciálů",
									image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/cadet_1_kz9pjf.webp",
									shortDescription: "Rozjeďte to s našimi rally vozy",
								}}
							/>
						</Link>
						<Link href={"/pronajem/pronajem-servisniho-zazemi"}>
							<RentalCategoryCard
								category={{
									name: "Pronájem servisního zázemí",
									image: "https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466721/Rally_Bohemia_23-4359_dl4xtr.webp",
									shortDescription:
										"Stany, cateringové vybavení, zkrátka vše pro servis během závodů či testování",
								}}
							/>
						</Link>
					</div>
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
