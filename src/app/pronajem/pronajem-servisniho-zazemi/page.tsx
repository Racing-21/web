import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466721/Rally_Bohemia_23-4359_dl4xtr.webp"
					}
					title={"Pronájem servisního zázemí"}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Pronájem servisního zázemí
					</h2>
					<div className="w-full flex flex-col">
						<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
							<p className="text-center">
								Od pronájmu jednotlivých částí vybavení servisu až po stavbu zázemí
								na klíč jsme Vám k dispozici. V případě zájmu se na nás obraťte
								s konkrétními požadavky
							</p>

							<ContactForm />
						</section>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
