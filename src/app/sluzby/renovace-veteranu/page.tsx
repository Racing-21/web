import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import RaceCarServiceInfo from "@/app/ui/RaceCarServiceInfo";
import { HeroSection } from "@/app/ui/HeroSection";

export const metadata: Metadata = {
	title: "Racing 21 - Renovace veteránů a youngtimerů",
	openGraph: {
		type: "website",
		title: "Racing 21 - Renovace veteránů a youngtimerů",
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
					title={"Renovace veteránů"}
					content={"Pomůžeme vám dostat vašeho veterána do původního stavu"}
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
