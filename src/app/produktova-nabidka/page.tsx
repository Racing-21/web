import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

const PARTNER_SITES = [
	{
		id: 1,
		name: "HRX",
		href: "https://www.hrxtech.cz",
		subheadline: "Prémiové FIA certifikované soutěžní a týmové oblečení italské značky HRX",
		products: [
			{
				category: "Soutěžní kombinézy",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732377908/emozione3_g9iwxm.webp",
			},
			{
				category: "Soutěžní rukavice",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732378777/racer_gloves-red_2000x2000_9e7ed4be-b529-4d1e-9253-a44bd432738c_vb47zy.webp",
			},
		],
	},
	{
		id: 2,
		name: "Turatello",
		href: "https://www.turatello-privesy.cz",
		subheadline: "Kryté přívěsy a návěsy italského výrobce TURATELLO",
		products: [
			{
				category: "Přívěsy",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744037166/Turatello_lutswa.jpg",
			},
		],
	},
	{
		id: 3,
		name: "Flex",
		href: "https://www.naradi-flex.cz",
		subheadline: "Profesionální elektro nářadí FLEX",
		products: [
			{
				category: "Hlavní stránka",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744037166/FLEX_gpiubc.webp",
			},
		],
	},
	{
		id: 5,
		name: "Sonax",
		href: "https://www.sonax.cz",
		subheadline: "Kvalitní německá autokosmetika SONAX",
		products: [
			{
				category: "Hlavní stránka",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744037166/sonax_p0x0zh.jpg",
			},
		],
	},
	{
		id: 6,
		name: "Winmax",
		href: "https://www.winmax-racing.cz",
		subheadline: "Brzdové destičky Winmax",
		products: [
			{
				category: "Hlavní stránka",
				categoryImage:
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1744037166/winmaxprodukty_ieddvn.jpg",
			},
		],
		cta: "Navštívit web",
	},
];

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466721/Rally_Bohemia_23-4359_dl4xtr.webp"
					}
					title={"Racing 21"}
					subtitle={"Produktová nabídka"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<section className="py-10 sm:py-120 rounded-lg px-6">
						<ul
							role="list"
							className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 divide-gray-100"
						>
							{PARTNER_SITES.map((item) => (
								<li key={item.id} className="flex flex-col py-2 md:py-0">
									<div
										className="overflow-hidden rounded-lg shadow relative min-w-0 md:mb-0 bg-grayPrimary h-full w-full flex flex-col
									justify-between px-4 py-5 sm:p-6"
									>
										<div className="flex items-start gap-x-3 border-red-600 border-b-2 mb-2">
											<p className="text-xl font-semibold text-gray-200">
												{item.name}
											</p>
										</div>
										<div className="flex gap-4 mb-2">
											{item.products &&
												item.products?.length > 1 &&
												item.products?.map((item) => (
													<div
														key={item.category}
														className="relative rounded-lg h-[100px] w-[100px] md:w-[200px] md:h-[200px]"
													>
														<Image
															className="relative rounded-lg"
															src={item.categoryImage}
															alt={item.category}
															fill
															style={{
																objectFit: "cover",
																objectPosition: "top",
															}}
														/>
													</div>
												))}
										</div>
										<div className="flex gap-4 mb-2">
											{item.products &&
												item.products?.length == 1 &&
												item.products?.map((item) => (
													<div
														key={item.category}
														className="relative rounded-lg h-[200px] w-full"
													>
														<Image
															className="relative rounded-lg"
															src={item.categoryImage}
															alt={item.category}
															style={{
																objectFit: "cover",
															}}
															fill
														/>
													</div>
												))}
										</div>

										<div className="mt-auto mb-2 flex gap-x-2 text-xs/5 text-gray-50 h-[75px] line-clamp-3	">
											<p className="">{item.subheadline}</p>
										</div>

										{item.href && (
											<div className="flex flex-none items-center bottom-0">
												<a
													href={item.href}
													target="_blank"
													className="rounded-full w-full text-center bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-inset ring-gray-300 hover:bg-black hover:text-gray-200 sm:block"
												>
													{item.cta ?? "Navštívit e-shop"}
													<span className="sr-only">, {item.name}</span>
												</a>
											</div>
										)}
									</div>
								</li>
							))}
						</ul>
					</section>
				</div>
				{/*<div className="w-full px-6 py-3 mt-6 flex-col">*/}
				{/*	<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>*/}
				{/*	<Testimonials />*/}
				{/*</div>*/}
			</PageLayout>
		</>
	);
}
