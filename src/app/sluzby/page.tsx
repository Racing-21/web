import headerImage from "@/images/autodilna/header.webp";
import Image from "next/image";
import raceCarServiceImage from "@/images/autodilna/zavodni-vozy.webp";
import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import { ContactForm } from "@/app/ui/ContactForm";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { ContentItem } from "@/app/ui/ContentItem";

const serviceItems = [
	{
		title: "Příprava na závody",
		headline: "Soutěžní a závodní vozy",
		description: `S vysoce profesionálním týmem techniků a mechaniků se zaměřujeme na kompletní stavbu nebo přestavbu
		 sportovních vozů pro všechny disciplíny motorsportu, včetně jejich pravidelné servisní údržby.
		 Současně dokážeme poskytnout kompletní servisní zázemí s doprovodem včetně přípravy vozů naším personálem,
		 materiálního zajištění a nutných administrativních úkonů, a to na všech sportovních podnicích v České republice
		 i v zahraničí. Aktuálně nabízíme k pronájmů několik vozů různých kategorií pro automobilové soutěže.`,
		image: racePrepImage,
		link: "/sluzby/servis-zavodnich-aut",
		features: [],
	},
	{
		title: "Servis sportovních vozů",
		headline: "Mechanické práce na sportovních vozech",
		description: `Máme rádi a umíme všechny značky, nicméně nejčastěji u nás
					uvidíte vozy Subaru, Toyota, Porsche, Audi, Ford, Opel, Land
					Rover a BMW. Nabízíme především mechanické práce na vozech,
					včetně repasí motorů a převodovek, úprav podvozků a brzdových
					systémů. Jako oficiální premium dealer společnosti BSR se
					dlouhodobě zabýváme optimalizací software a zvyšováním
					výkonových parametrů pohonných jednotek, a to jak pro osobní
					vozy, tak i obytné vozy většiny značek.`,
		image: raceCarServiceImage,
		link: "/sluzby/servis-sportovnich-aut",
		features: [],
	},
];

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<div className="relative  pb-10">
					<div className="absolute inset-x-0 bottom-0 h-2/3 bg-grayPrimary" />
					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
							<div className="absolute inset-0 ">
								<Image
									alt="Fotografie týmu Racing 21"
									src={headerImage}
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32 h-[500px]">
								<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">Racing21</span>
									<span className="block text-red-600">
										Nejen závodní rally tým
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PageLayout>
				<ContentItem item={serviceItems[0]} imagePosition={"RIGHT"} />
				<ContentItem item={serviceItems[1]} imagePosition={"LEFT"} />
				<ContactForm />
			</PageLayout>
		</>
	);
}
