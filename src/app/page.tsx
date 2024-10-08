import headerImage from "@/images/homepage/header.webp";
import serviceCardImage from "@/images/homepage/serviceCard.webp";
import rallyTeamCardImage from "@/images/homepage/rallyTeamCard.webp";
import rentalCardImage from "@/images/homepage/rentalCard.webp";
import { Metadata } from "next";
import Services from "./ui/Services";
import { UpcomingEventsCard } from "@/app/ui/UpcomingEventCard";
import { ServiceNavigationCard } from "@/app/ui/ServiceNavigationCard";
import { HomepageLogoCloud } from "@/app/ui/HomepageLogoCloud";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";

export const metadata: Metadata = {
	title: "Racing 21",
	openGraph: {
		type: "website",
		title: "Racing 21",
		description:
			"Kromě samotného závodění se Tým Racing 21 věnuje servisu a pronájmu závodních aut, servisu sportovních aut a pronájmu konferenčních prostor v Praze ",
	},
	twitter: {
		title: "Racing 21",
		description:
			"Závodní tým, renovace veteránů, servis závodních a sportovních vozů, pronájem konferenčních prostor Praha Západ",
	},
};

export default function Home() {
	return (
		<>
			{/* Hero card */}
			<HeroSection
				image={headerImage}
				title={"Racing 21"}
				subtitle={"Nejen závodní rally tým"}
				content={
					"Spojuje nás vášeň pro automobily. Kromě vlastního rally týmu provozujeme také autodílnu, ve které dostaneme váš závodní vůz do perfektního stavu. Kromě závodních speciálů se zaměřujeme také na restaurování veteránů a youngtimerů."
				}
			/>
			{/* Logo cloud */}
			<HomepageLogoCloud />
			<PageLayout>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Nejen závodní tým</h2>
					<Services />
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Racing 21</h2>
					<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
						<ServiceNavigationCard
							link={"o-nas/tym"}
							title={"Závodní tým"}
							altImageText={"Sekce o závodním týmu Racing 21"}
							image={rallyTeamCardImage}
						/>
						<ServiceNavigationCard
							link={"sluzby"}
							title={"Naše služby"}
							altImageText={"Servis vozidel"}
							image={serviceCardImage}
						/>
						<ServiceNavigationCard
							link={"pronajem"}
							title={"Pronájem vozidel a prostor"}
							altImageText={"Sekce o pronájmu vozidel a prostor"}
							image={rentalCardImage}
						/>
					</div>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Aktuality</h2>
					<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
						<UpcomingEventsCard
							title={"Závodní tým"}
							altImageText={"Sekce o závodním týmu Racing 21"}
							image={rallyTeamCardImage}
							description={"Lorem ipsum et donor"}
						/>
						<UpcomingEventsCard
							title={"Servis vozidel"}
							altImageText={"Servis vozidel"}
							image={serviceCardImage}
							description={"Lorem ipsum et donor"}
						/>
						<UpcomingEventsCard
							title={"Pronájem vozidel a prostor"}
							altImageText={"Sekce o pronájmu vozidel a prostor"}
							image={rentalCardImage}
							description={"Lorem ipsum et donor"}
						/>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
