import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { NewsSection } from "@/components/NewsSection";

export const metadata: Metadata = {
	title: "Racing 21 - Média",
	openGraph: {
		type: "website",
		title: "Racing 21 - Média",
		description: "Mediální ýstupy závodního týmu Racing 21",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466597/Rally_Vys%CC%8Ckov_23-2_tnkcna.webp"
					}
					title={"Racing 21"}
					subtitle={"Media servis"}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Aktuality</h2>
					<NewsSection />
				</div>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
