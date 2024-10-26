import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { UpcomingEventsCard } from "@/app/ui/UpcomingEventCard";
import { ContactForm } from "@/app/ui/ContactForm";
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
					image={racePrepImage}
					title={"Prostory k pronájmu"}
					content={"Pro vaše firemní i soukromé akce"}
				/>
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<p className="text-center">
							Nabízíme pronájem výjmečných konferenčních prostor na Praze Západ a také
							pronájem techniky potřebné k přípavě na závod nebo převos automobilu
							kdekoliv po Evropě.
						</p>
					</section>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Možnosti pronájmu </h2>

					<div className={"grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg"}>
						<Link href={"/pronajem/pronajem-konferencnich-prostor"}>
							<UpcomingEventsCard
								title={"Pronájem konferenčních prostorů"}
								altImageText={"Obrázek konferenční místnosti"}
								image={
									"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/08_ebvm4p.webp"
								}
								description={"Uspořádejte akci v jedinečné atmosféře"}
								cardClassName={"h-[300px]"}
							/>
						</Link>
						<Link href={"/pronajem/pronajem-techniky-a-vozu"}>
							<UpcomingEventsCard
								title={"Pronájem prémiových přívěsů Turatello"}
								altImageText={"Převážejte svůj automobil bezpečně a spolehlivě"}
								image={
									"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865376/IMG_3702_k79bmj.webp"
								}
								description={"Převážejte svůj automobil bezpečně a spolehlivě"}
								cardClassName={"h-[300px]"}
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
