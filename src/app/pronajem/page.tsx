import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/app/ui/HeroSection";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { UpcomingEventsCard } from "@/app/ui/UpcomingEventCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import client from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ContactForm } from "@/app/ui/ContactForm";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

export default async function Page() {
	const { data } = await client.queries.pronajem({ relativePath: "Prostory.md" });

	if (!data) {
		return null;
	}

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={racePrepImage}
					title={"Racing 21"}
					content={"Detailní informace o našem týmu"}
				/>
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<section className="bg-grayPrimary py-10 sm:py-120 rounded-lg px-6">
						<p className="text-center">
							Potřebujete místo, kde uspořádáte konferenci nebo prezentaci nového
							produktu? V našich prostorách dodáte vašemu eventu nádech jedinečnosti.
							Velká konferenční místnost s barem a technickým zázemím je ideální místo
							pro přednášky a následný networking. V našem showroomu pak můžete
							prezentovat klientům svůj produkt v prostředí, díky kterému na Vaši
							prezentaci jen tak nezapomenou.
						</p>
					</section>
				</div>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Dostupné prostory</h2>

					<TabGroup className="flex flex-col">
						<TabList>
							<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
								{data.pronajem?.prostory?.map(
									(prostor) =>
										prostor && (
											<Tab key={prostor.name}>
												<UpcomingEventsCard
													title={prostor.name}
													altImageText={"Obrázek konferenční místnosti"}
													image={prostor?.image}
													description={prostor.shortDescription}
												/>
											</Tab>
										),
								)}
							</div>
						</TabList>
						<TabPanels className="mt-6">
							{data.pronajem?.prostory?.map(
								(prostor) =>
									prostor && (
										<TabPanel key={`tabPanel_${prostor.name}`}>
											<div
												className={
													"bg-grayPrimary py-10 sm:py-120 rounded-lg px-6 flex gap-10 h-full"
												}
											>
												<TabGroup className="flex flex-col-reverse w-1/2">
													<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
														<TabList className="grid grid-cols-4 gap-6">
															{prostor.gallery?.map((image) => (
																<Tab
																	key={image}
																	className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
																>
																	<span className="sr-only">
																		{image}
																	</span>
																	<span className="absolute inset-0 overflow-hidden rounded-md">
																		{image && (
																			<Image
																				alt=""
																				priority
																				src={image}
																				width={200}
																				height={150}
																				className="h-full w-full object-cover object-center"
																			/>
																		)}
																	</span>
																	<span
																		aria-hidden="true"
																		className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
																	/>
																</Tab>
															))}
														</TabList>
													</div>

													<TabPanels className="aspect-h-1 aspect-w-1 w-full">
														{prostor.gallery?.map((image) => (
															<TabPanel
																key={image}
																className={
																	"relative h-[400px] w-full"
																}
															>
																{image && (
																	<Image
																		alt={
																			prostor.shortDescription
																		}
																		src={image}
																		fill
																		priority
																		className="h-full w-full object-cover object-center sm:rounded-lg"
																	/>
																)}
															</TabPanel>
														))}
													</TabPanels>
												</TabGroup>
												<div className={"h-[400px] flex flex-col"}>
													<h2 className="font-bold text-2xl mb-2">
														{prostor.name}
													</h2>
													<TinaMarkdown
														content={prostor.longDescription}
													/>
													<button
														type="button"
														className="mt-auto w-[200px] rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
													>
														Zjistit dostupnost
													</button>
												</div>
											</div>
										</TabPanel>
									),
							)}
						</TabPanels>
					</TabGroup>
				</div>
				<div className="w-full flex flex-col">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>Kontaktní formulář</h2>
					<ContactForm />
				</div>

				<div className="w-full flex flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
