import headerImage from "@/images/autodilna/header.webp";
import Image from "next/image";
import raceCarServiceImage from "@/images/autodilna/zavodni-vozy.webp";
import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { ContactForm } from "@/app/ui/ContactForm";
import { PageLayout } from "@/app/ui/layout/PageLayout";

type Feature = {
	name: string;
	description: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type ServiceItem = {
	title: string;
	headline: string;
	description: string;
	link: string;
	image: StaticImport;
	features: Feature[];
};

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
		link: "/autodilna/servis-zavodnich-aut",
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
		link: "/autodilna/servis-sportovnich-aut",
		features: [],
	},
];

const ServiceItem = ({
	item,
	imagePosition,
}: {
	item: ServiceItem;
	imagePosition: "RIGHT" | "LEFT";
}) => {
	return (
		<div className="w-full flex flex-col">
			<div className="overflow-hidden bg-grayPrimary rounded-xl py-8 mt-6">
				<div className="mx-auto px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div
							className={`flex items-start justify-center order-first ${imagePosition === "RIGHT" ? "md:justify-start lg:order-last" : " md:justify-end"}`}
						>
							<Image
								alt="Servis závodních vozů"
								src={item.image}
								width={2432}
								height={500}
								className="max-h-[500px] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:w-[64rem]"
							/>
						</div>
						<div className=" pb-10 md:pb-0 lg:ml-auto lg:pl-4 lg:pt-4">
							<div className="lg:max-w-screen-lg">
								<h2 className="text-base font-semibold leading-7 text-red-600">
									{item.title}
								</h2>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
									{item.headline}
								</p>
								<p className="mt-6 text-lg leading-8 text-gray-100">
									{item.description}
								</p>
								<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
									{item.features.map((feature) => (
										<div key={feature.name} className="relative pl-9">
											<dt className="inline font-semibold text-red-600">
												<feature.icon
													aria-hidden="true"
													className="absolute left-1 top-1 h-5 w-5 text-gray-400"
												/>
												{feature.name}
											</dt>{" "}
											<dd className="inline">{feature.description}</dd>
										</div>
									))}
								</dl>
								<Link
									href={item.link}
									className="inline-block mt-4 rounded-lg bg-red-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900        "
								>
									Více informací
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

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
				<ServiceItem item={serviceItems[0]} imagePosition={"RIGHT"} />
				<ServiceItem item={serviceItems[1]} imagePosition={"LEFT"} />
				<ContactForm />
			</PageLayout>
		</>
	);
}
