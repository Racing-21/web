import { Metadata } from "next";
import SportsCarServiceInfo from "@/components/SportsCarServiceInfo";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";

export const metadata: Metadata = {
	title: "Racing 21 - Servis a provoz soutěžních vozů",
	openGraph: {
		type: "website",
		title: "Racing 21 - Servis a provoz soutěžních vozů",
		description: "Váš soutěžní vůz si zaslouží tu nejlepší péči. My mu jí poskytneme.",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1731151214/STA_2375a_j9ufiv.webp"
					}
					title={"Servis sportovních vozů"}
					content={"Váš sportovní vůz si zaslouží tu nejlepší péči. My mu jí poskytneme."}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6 flex-col">
					<SportsCarServiceInfo />
				</div>
				{/*<div className="w-full px-6 py-6 mt-6 flex-col">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
