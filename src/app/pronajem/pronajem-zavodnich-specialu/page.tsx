import headerImage from "@/images/team/header.webp";
import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={headerImage}
					title={"Pronájem závodních speciálů"}
					subtitle={"Naše auta k vašim službám"}
				/>
			</div>
			<PageLayout>
				<div className="w-full px-6 py-6 mt-6">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Pronájem závodních speciálů
					</h2>
					<div className="w-full flex flex-col">
						<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
							<p className="text-center">
								Naše vozy, které nabízíme k pronájmu, si spolu s jejich detailnější
								specifikací můžete prohlédnout v sekci
								<Link
									href={"/o-nas/technika"}
									className={"text-red-600 hover:text-gray-100"}
								>
									Naše technika
								</Link>
								. V případě zájmu se na nás neváhejte obrátit prostřednictvím
								formuláře níže.
							</p>
							<ContactForm />
						</section>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
