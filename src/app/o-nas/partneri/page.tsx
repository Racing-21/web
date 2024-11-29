import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import client from "../../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";

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
	const { data } = await client.queries.partners({ relativePath: "Partners.md" });

	if (!data.partners.partner || data.partners.partner.length === 0) {
		return null;
	}

	const partnerList = data.partners.partner;

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection image={racePrepImage} title={"Racing 21"} content={"Naši partneři"} />
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Partneři týmu racing 21
					</h2>
					<div className="bg-grayPrimary px-6 py-6 rounded-lg">
						<div className="divide-y divide-black overflow-hidden rounded-lg bg-white sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 border-transparent">
							{partnerList.map((partner) => {
								if (!partner) {
									return null;
								}
								return (
									<div
										key={partner?.link}
										className={
											"flex group relative bg-grayPrimary px-2 md:px-6 py-4 border-1 border-grayPrimary flex-col md:flex-row focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"
										}
									>
										<Link
											href={partner?.link}
											className={
												"group overflow-hidden relative flex flex-col active:outline-none"
											}
											target={"_blank"}
										>
											<div className={"flex items-center"}>
												<div className="rounded-full p-1 e h-[100px] w-[100px] flex items-center justify-center">
													<Image
														key={partner.link}
														alt={partner.name}
														src={partner.logo as string}
														objectFit={"cover"}
														width={80}
														height={80}
													/>
												</div>
												<h4 className={"group-hover:text-gray-800"}>
													{partner?.name}
												</h4>
											</div>

											<div
												className={
													"flex-col items-center justify-between mb-4"
												}
											>
												<p className={"text-sm group-hover:text-gray-800 "}>
													<TinaMarkdown content={partner.description} />
												</p>
											</div>
											<p
												className={
													"bottom-0 mt-auto group-hover:text-red-900"
												}
											>
												Stránky partnera
											</p>
										</Link>
									</div>
								);
							})}
							{partnerList.length % 2 === 1 && (
								<div
									className={
										"flex group relative bg-grayPrimary px-2 md:px-6 py-4 border-1 border-grayPrimary flex-col md:flex-row focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
									}
								></div>
							)}
						</div>
					</div>
				</div>
				<div className="w-full flex flex-col">
					<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
					<Testimonials />
				</div>
			</PageLayout>
		</>
	);
}
