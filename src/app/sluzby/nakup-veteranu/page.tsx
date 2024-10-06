import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import RaceCarServiceInfo from "@/app/ui/RaceCarServiceInfo";
import { HeroSection } from "@/app/ui/HeroSection";

export const metadata: Metadata = {
	title: "Racing 21 - Nákup veteránů a youngtimerů",
	openGraph: {
		type: "website",
		title: "Racing 21 - Nákup veteránů a youngtimerů",
		description:
			"Nabízíme poradenství a zprostředkování nákupu veteránů a youngtimerů nejen v České republice.",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
					title={"Nákup veteránů"}
					subtitle={"Nákup vašeho vysněného veterána nikdy nebyl jednodušší."}
				/>
			</div>
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<RaceCarServiceInfo />
			</div>
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
				<Testimonials />
			</div>
		</>
	);
}
