import { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import RaceCarServiceInfo from "@/components/RaceCarServiceInfo";

export const metadata: Metadata = {
	title: "Racing 21 - Příprava a stavba závodních vozů",
	openGraph: {
		type: "website",
		title: "Racing 21 - SPříprava a stavba závodních vozů",
		description: "Nabízíme širokou nabídku služeb v oblasti servisu závodních aut",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://storage.byznys21.net/apps/files_sharing/publicpreview/g9e5bxCyq3EWL7g?file=/Rallye%20auta/Rally_Pa%C4%8Dejov_23-7336.jpg&fileId=77993&x=1920&y=1200&a=true"
					}
					title={"Příprava a stavba závodních vozů"}
					content={""}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<RaceCarServiceInfo />
				</div>
				{/*<div className="w-full">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
