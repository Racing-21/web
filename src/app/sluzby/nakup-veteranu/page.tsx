import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import OldtimersInvestmentInfo from "@/components/OldtimersInvestment";

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
			<PageLayout>
				<div className="w-full">
					<OldtimersInvestmentInfo />
				</div>
				<div className="w-full">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
