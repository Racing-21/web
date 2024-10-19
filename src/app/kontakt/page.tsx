import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import ContactSection from "@/app/kontakt/components/ContactSection";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export const metadata: Metadata = {
	title: "Racing 21 - Kontakt",
	openGraph: {
		type: "website",
		title: "Racing 21 - Kontakt",
		description: "Kontaktní stránka týmu Racing 21",
	},
};

export default function Page() {
	console.log(process.env.GOOGLE_MAPS_API_KEY);
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection image={racePrepImage} title={"Racing 21"} subtitle={"Kontakt"} />
			</div>
			<PageLayout>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<ContactSection />
				</div>

				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Kde nás najdete</h2>
					<div className="bg-grayPrimary px-6 lg:col-span-3 lg:px-8 lg:py-6 xl:pl-12 rounded-lg">
						{process.env.GOOGLE_MAPS_API_KEY && (
							<GoogleMapsEmbed
								apiKey={process.env.GOOGLE_MAPS_API_KEY}
								height={400}
								width={"100%"}
								mode="place"
								q="Racing+21,Hájecká+47,273+51+Červený+Újezd"
							/>
						)}
					</div>
				</div>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
