"use client";

import headerImage from "@/images/team/header.webp";
import Image from "next/image";
import janecekImage from "@/images/team/karelJanecek.webp";
import stajfImage from "@/images/team/vojtechStajf.webp";
import havelkovaImage from "@/images/team/veronikaHavelkova.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useState } from "react";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { HeroSection } from "@/app/ui/HeroSection";

type Achievement = {
	name: string;
	year: number;
	category?: string;
};

type Person = {
	name: string;
	role: string;
	image: string | StaticImport;
	about: string;
	achievements: Achievement[];
};

const people = [
	{
		name: "Vojtěch Štajf",
		about: "Absolvent magisterského studia masové komunikace a mezinárodních studií FSV UK. V letech 2001-2002 zástupce továrního týmu Škoda motorsport v Mistrovství světa v rallye pro tisk, sportovní a motoristický novinář.",
		achievements: [
			{
				name: "Mistr ČR Sprintrally ",
				year: 2023,
				category: "P2+",
			},
		],
		image: stajfImage,
		role: "jezdec",
	},
	{
		name: "Karel Janeček",
		image: janecekImage,
		role: "jezdec",
		about:
			"Matematik, ekonom, sociální inovátor a spolumajitel závodního týmu Racing21.\n" +
			"\n" +
			"Matematika ho provází celým životem a díky ní uspěl v minulosti také v byznysu. Peníze jsou pro něj energii, která má pomáhat tam, kde to má smysl. Proto také podporuje vědu, vzdělávání, umění, instituce i nadané jednotlivce a většinu svého času věnuje právě projektům, které mohou zlepšit atmosféru ve společnosti a její fungování. Dlouhodobě pomáhá naší společnosti, jak osobně, tak v rámci šesti nadací, které založil. Primárně se nyní zaměřuje na volební systém D21, ochranu svobody slova, práci s vědci v nadaci Science 21 a propagaci revoluční edukativní hry Mathesso. Příležitostně se také účastní automobilových soutěží v roli navigátora jezdce Vojtěcha Štajfa, se kterým soutěžní tým Racing21 založil v roce 2015.",
		achievements: [],
	},
	{
		name: "Veronika Havelková",
		image: havelkovaImage,
		role: "navigátorka",
		about: "Již dlouholetá navigátorka, hlavní profesí zdravotnický záchranář ve Středočeském kraji.",
		achievements: [
			{
				name: "Absolutní mistr Slovenska",
				year: 2016,
			},
			{
				name: "Absolutní mistr Slovenska",
				year: 2017,
			},
			{
				name: "Vítězka Manateq International Rally of Qatar",
				year: 2018,
			},
		],
	},
];

const TeamMemberProfile = ({ person }: { person: Person }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDialog = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<li
				key={person.name}
				className={
					"relative bg-black rounded-xl p-6 hover:bg-grayPrimary cursor-pointer shadow-black shadow-md"
				}
				onClick={() => handleToggleDialog()}
			>
				<Image
					alt={person.name}
					src={person.image}
					width={150}
					height={150}
					objectFit={"contain"}
					className="mx-auto h-[150px] w-[150] rounded-full grayscale object-cover"
				/>

				<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-100">
					{person.name}
				</h3>
				<p className="text-sm leading-6 text-red-600 font-bold uppercase">{person.role}</p>
			</li>
			<Dialog open={isOpen} onClose={() => handleToggleDialog()} className="relative z-50">
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4 overflow-y-auto">
					<DialogPanel className="max-w-screen-lg space-y-4 rounded-xl bg-grayPrimary p-12 shadow-gray-400">
						<div className={"flex justify-start flex-col md:flex-row "}>
							<Image
								alt={person.name}
								src={person.image}
								className="mr-6 h-52 w-52  rounded-lg grayscale-0"
							/>
							<div className={"flex flex-col"}>
								<DialogTitle className="font-bold">{person.name}</DialogTitle>
								<Description>{person.about}</Description>
							</div>
						</div>
						<div>
							<h3>Úspěchy</h3>
							<ul>
								{person.achievements.map((item) => (
									<li key={`${item.name}-${item.year}-${person.name}`}>
										<h4>
											{item.name} - {item.year}
										</h4>
									</li>
								))}
							</ul>
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};

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
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Členové závodního týmu racing 21
					</h2>
					<div className={"flex rounded-lg bg-grayPrimary p-6"}>
						<ul
							role="list"
							className="w-full mx-auto grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3 "
						>
							{people.map((person) => (
								<TeamMemberProfile person={person} key={`${person.name}-profile`} />
							))}
						</ul>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
