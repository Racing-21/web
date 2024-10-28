import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { NewsSection } from "@/app/ui/NewsSection";

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
				<HeroSection image={racePrepImage} title={"Racing 21"} content={"Media servis"} />
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
