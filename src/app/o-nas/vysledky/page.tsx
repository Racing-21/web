import headerImage from "@/images/team/header.webp";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={headerImage}
					title={"Racing21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Výsledky</h2>
				</div>
			</PageLayout>
		</>
	);
}
