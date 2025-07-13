import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import GeneralService from "@/components/GeneralService";
import client from "../../../../tina/__generated__/client";
import { generalServiceQuery } from "../../../../tina/queries/generalServiceQueries";

export const metadata: Metadata = {
	title: "Racing 21 - Autoservis",
	openGraph: {
		type: "website",
		title: "Racing 21 - Autoservis",
		description: "Profesionální servis pro každé auto. Bez výjimky.",
	},
};

export default async function Page() {
	// Mock data for the GeneralService component
	const { data } = await client.request(
		{
			query: generalServiceQuery,
			variables: {
				relativePath: "GeneralService.md",
			},
		},
		{},
	);

	if (!data) {
		return null;
	}

	const generalServiceData = data.generalService;

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729865372/05_tqrjra.webp"
					}
					title={"Autoservis"}
					content={"Profesionální servis pro každé auto. Bez výjimky."}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<GeneralService
						categories={generalServiceData.categories}
						priceList={generalServiceData.priceList}
					/>
				</div>
				{/*<div className="w-full">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
