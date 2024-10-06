import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";

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
					title={"Racing 21"}
					content={"Detailní informace o našem týmu"}
				/>
			</div>
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<section className="bg-grayPrimary py-20 sm:py-120 rounded-lg">
					<p>Rozcetník na jednotlivé sekce týkající se pronájmu prostor a techniky</p>
				</section>
			</div>
			<div className="w-full px-6 py-3 mt-6 flex-col">
				<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
				<Testimonials />
			</div>
		</>
	);
}
