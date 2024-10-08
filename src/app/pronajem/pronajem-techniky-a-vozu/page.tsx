import headerImage from "@/images/team/header.webp";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { HeroSection } from "@/app/ui/HeroSection";

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={headerImage}
					title={"Racing 21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Pronájem techniky a vozů
					</h2>
				</div>
			</PageLayout>
		</>
	);
}
