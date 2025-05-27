import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import OldtimersRenovationsInfo from "@/components/OldTimersRenovations";

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
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865372/05_tqrjra.webp"
					}
					title={"Renovace veteránů"}
					content={"Vašemu veteránovi vrátíme zašlý lesk."}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<OldtimersRenovationsInfo />
				</div>
				{/*<div className="w-full">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
