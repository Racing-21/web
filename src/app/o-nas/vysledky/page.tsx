import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import { ChampionshipList } from "@/app/o-nas/vysledky/components/ChampionshipList";

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744374203/07-test-vojtech-stajf_ivna3n.webp"
					}
					title={"Racing21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Výsledky</h2>
				</div>
				<ChampionshipList />
				{/*<ResultSection />*/}
			</PageLayout>
		</>
	);
}
