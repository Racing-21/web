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
					title={"Pronájem závodních speciálů"}
					subtitle={"naše závodní speciály k vašim službám"}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Pronájem závodních speciálů
					</h2>
				</div>
			</PageLayout>
		</>
	);
}
