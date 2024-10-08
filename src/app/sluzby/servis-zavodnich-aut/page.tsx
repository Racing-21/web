import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import RaceCarServiceInfo from "@/app/ui/RaceCarServiceInfo";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { HeroSection } from "@/app/ui/HeroSection";

export const metadata: Metadata = {
	title: "Racing 21 - Servis závodních aut",
	openGraph: {
		type: "website",
		title: "Racing 21 - Servis závodních aut",
		description: "Nabízíme širokou nabídku služeb v oblasti servisu závodních aut",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
					title={"Racing21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<RaceCarServiceInfo />
				</div>
				<div className="w-full">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
