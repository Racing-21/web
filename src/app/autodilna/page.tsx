"use client";

import headerImage from "@/images/autodilna/header.webp";
import Image from "next/image";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/16/solid";
import raceCarServiceImage from "@/images/autodilna/zavodni-vozy.webp";
import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";

const features = [
	{
		name: "Push to deploy.",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "SSL certificates.",
		description:
			"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
		icon: LockClosedIcon,
	},
	{
		name: "Database backups.",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon,
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
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<div className="overflow-hidden bg-grayPrimary rounded-xl py-18 sm:py-24 mt-6">
					<div className="mx-auto px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="flex items-start justify-end lg:order-last">
								<Image
									alt="Servis závodních vozů"
									src={racePrepImage}
									width={2432}
									height={500}
									className="max-h-[500px] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
								/>
							</div>
							<div className="lg:ml-auto lg:pl-4 lg:pt-4">
								<div className="lg:max-w-screen-lg">
									<h2 className="text-base font-semibold leading-7 text-red-600">
										Příprava na závody
									</h2>
									<p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
										Soutěžní a závodní vozy
									</p>
									<p className="mt-6 text-lg leading-8 text-gray-100">
										S vysoce profesionálním týmem techniků a mechaniků se
										zaměřujeme na kompletní stavbu nebo přestavbu sportovních
										vozů pro všechny disciplíny motorsportu, včetně jejich
										pravidelné servisní údržby. Současně dokážeme poskytnout
										kompletní servisní zázemí s doprovodem včetně přípravy vozů
										naším personálem, materiálního zajištění a nutných
										administrativních úkonů, a to na všech sportovních podnicích
										v České republice i v zahraničí. Aktuálně nabízíme k
										pronájmů několik vozů různých kategorií pro automobilové
										soutěže.
									</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
										{features.map((feature) => (
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
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="overflow-hidden bg-grayPrimary rounded-xl py-18 sm:py-24 mt-6">
					<div className="mx-auto px-6 lg:px-8">
						<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
							<div className="lg:ml-auto lg:pl-4 lg:pt-4">
								<div className="lg:max-w-screen-lg">
									<h2 className="text-base font-semibold leading-7 text-red-600">
										Servis sportovních vozů
									</h2>
									<p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
										Mechanické práce na sportovních vozech
									</p>
									<p className="mt-6 text-lg leading-8 text-gray-100">
										Máme rádi a umíme všechny značky, nicméně nejčastěji u nás
										uvidíte vozy Subaru, Toyota, Porsche, Audi, Ford, Opel, Land
										Rover a BMW. Nabízíme především mechanické práce na vozech,
										včetně repasí motorů a převodovek, úprav podvozků a
										brzdových systémů. Jako oficiální premium dealer společnosti
										BSR se dlouhodobě zabýváme optimalizací software a
										zvyšováním výkonových parametrů pohonných jednotek, a to jak
										pro osobní vozy, tak i obytné vozy většiny značek.
									</p>
									<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
										{features.map((feature) => (
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
								</div>
							</div>
							<div className="flex items-start justify-end order-first">
								<Image
									alt="Servis závodních vozů"
									src={raceCarServiceImage}
									width={2432}
									height={500}
									className="max-h-[500px] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
