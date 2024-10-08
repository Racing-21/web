import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import RaceCarServiceInfo from "@/app/ui/RaceCarServiceInfo";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";

export const metadata: Metadata = {
	title: "Racing 21 - Servis sportovních vozů",
	openGraph: {
		type: "website",
		title: "Racing 21 - Servis sportovních vozů",
		description: "Váš sportovní vůz si zaslouží tu nejlepší péči. My mu jí poskytneme.",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
					title={"Servis "}
					subtitle={"sportovních vozů"}
					content={"Váš sportovní vůz si zaslouží tu nejlepší péči. My mu jí poskytneme."}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6 flex-col">
					<RaceCarServiceInfo />
				</div>
				<div className="w-full px-6 py-6 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
