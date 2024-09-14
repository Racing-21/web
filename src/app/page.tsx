import Image from "next/image";
import headerImage from "@/images/homepage/header.jpg";
import serviceCardImage from "@/images/homepage/serviceCard.webp";
import rallyTeamCardImage from "@/images/homepage/rallyTeamCard.webp";
import rentalCardImage from "@/images/homepage/rentalCard.webp";
import { Metadata } from "next";
import { Card } from "@/app/ui/Card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const metadata: Metadata = {
	title: "Racing21",
};

const ServiceCard = ({
	image,
	title,
	altImageText,
}: {
	image: string | StaticImport;
	title: string;
	altImageText: string;
}) => {
	return (
		<div
			className={
				"w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center card  hover:cursor-pointer"
			}
		>
			<Card
				className={
					"h-[200px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg"
				}
			>
				<div className="absolute inset-0 overflow-hidden ">
					<Image
						alt={altImageText}
						src={image}
						layout={"fill"}
						objectFit={"cover"}
						className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
					/>
					<div className="absolute inset-0 bg-black opacity-60 h-full w-full "></div>
				</div>
				<h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center md:whitespace-nowrap text-3xl font-bold z-10">
					{title}
					<div className="relative border-b-2 border-red-500 mt-1 underline"></div>
				</h3>
			</Card>
		</div>
	);
};

const UpcomingEventsCard = ({
	image,
	title,
	altImageText,
	description,
}: {
	image: string | StaticImport;
	title: string;
	altImageText: string;
	description: string;
}) => {
	return (
		<div
			className={
				"w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center hover:cursor-pointer card"
			}
		>
			<Card
				className={
					"h-[200px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg  "
				}
			>
				<div className="absolute inset-0 overflow-hidden ">
					<Image
						alt={altImageText}
						src={image}
						layout={"fill"}
						objectFit={"cover"}
						className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
					/>
					<div className="absolute inset-0 bg-black opacity-60 h-full w-full "></div>
				</div>
			</Card>
			<p className="mt-3 left-0 w-full text-white font-bold ">{title}</p>
			<p className="left-0 w-full text-gray-400 text-sm">{description}</p>
		</div>
	);
};

export default function Home() {
	return (
		<>
			<div>
				{/* Hero card */}
				<div className="relative">
					<div className="absolute inset-x-0 bottom-0 h-1/2 bg-grayPrimary" />
					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
							<div className="absolute inset-0">
								<Image
									alt="People working on laptops"
									src={headerImage}
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
								<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">Racing21</span>
									<span className="block text-red-600">
										Nejen závodní rally tým
									</span>
								</h1>
								<p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
									Spojuje nás vášeň pro automobily. Kromě vlastního rally týmu
									provozujeme také autodílnu, ve které dostaneme váš závodní vůz
									do perfektního stavu. Kromě závodních speciálů se zaměřujeme
									také na restaurování veteránů a youngtimerů.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Logo cloud */}
				<div className="bg-grayPrimary">
					<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
						<p className="text-center text-base font-semibold text-gray-500">
							Produkty, které nám pomáhají v tom co děláme
						</p>
						<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
							<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
								<img
									alt="Tuple"
									src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
									className="h-12"
								/>
							</div>
							<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
								<img
									alt="Mirage"
									src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
									className="h-12"
								/>
							</div>
							<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
								<img
									alt="StaticKit"
									src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
									className="h-12"
								/>
							</div>
							<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
								<img
									alt="Transistor"
									src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
									className="h-12"
								/>
							</div>
							<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
								<img
									alt="Workcation"
									src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
									className="h-12"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<div className="relative overflow-hidden px-6 py-[18rem] sm:py-[16rem] lg:px-8">*/}
			{/*	<div className="absolute left-0 text-center w-full ">*/}
			{/*		<h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">*/}
			{/*			Racing21*/}
			{/*		</h2>*/}
			{/*		<p className="mt-6 text-lg leading-8 text-gray-300"></p>*/}
			{/*	</div>*/}
			{/*	<Image alt="" src={headerImage} layout={"fill"} objectFit={"cover"} />*/}
			{/*	<div className="absolute inset-0 bg-black opacity-20 h-full w-full"></div>*/}
			{/*</div>*/}
			<div className="w-full px-6 py-6 mt-6">
				<h2 className={"text-2xl capitalize font-bold mb-2"}>Racing 21</h2>
				<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
					<ServiceCard
						title={"Závodní tým"}
						altImageText={"Sekce o závodním týmu Racing 21"}
						image={rallyTeamCardImage}
					/>
					<ServiceCard
						title={"Servis vozidel"}
						altImageText={"Servis vozidel"}
						image={serviceCardImage}
					/>
					<ServiceCard
						title={"Pronájem vozidel a prostor"}
						altImageText={"Sekce o pronájmu vozidel a prostor"}
						image={rentalCardImage}
					/>
				</div>
			</div>
			<div className="w-full px-6 py-6 mt-6">
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
		</>
	);
}
