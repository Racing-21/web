import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
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
	return (
		<>
			<HeroSection
				image={
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466629/Rally_Pac%CC%8Cejov_23-0514_uw4mpe.webp"
				}
				title={"Racing 21"}
				subtitle={"Kontakt"}
			/>
			<PageLayout>
				<div className="w-full px-6 py-3 mt-6 flex-col">
					<ContactSection />
				</div>

				<div className="w-full px-6 py-3 mt-6 flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Kde nás najdete</h2>
					<div className="bg-grayPrimary px-6 py-6 lg:col-span-3 lg:px-8 xl:pl-12 rounded-lg">
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
			</PageLayout>
		</>
	);
}
