import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import { HeroSection } from "@/app/ui/HeroSection";
import { PARTNERS } from "@/app/media/partneri/partners";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Racing 21 - O nás",
	openGraph: {
		type: "website",
		title: "Racing 21 - O nás",
		description:
			"Náš tým zkušených mechaniků dostane vašeho veterána nebo youngtimera zpátky do skvělé kondice.",
	},
};

export default function Page() {
	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection image={racePrepImage} title={"Racing 21"} content={"Naši partneři"} />
			</div>
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<h2 className={"text-2xl capitalize font-bold mb-2"}>Partneři týmu racing 21</h2>
				<div className="bg-grayPrimary px-6 py-6 rounded-lg">
					<div className="divide-y divide-black overflow-hidden rounded-lg bg-white sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 border-transparent">
						{PARTNERS.map((partner) => (
							<div
								key={partner.link}
								className={
									"flex group relative bg-grayPrimary px-2 md:px-6 py-4 border-1 border-grayPrimary flex-col md:flex-row focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-gray-50"
								}
							>
								<Link
									href={partner.link}
									className={"group overflow-hidden relative flex flex-col"}
									target={"_blank"}
								>
									<div className={"flex items-center"}>
										<div className="rounded-full p-1 e h-[100px] w-[100px] flex items-center justify-center">
											<Image
												key={partner.link}
												alt={partner.name}
												src={partner.logo}
												objectFit={"cover"}
												width={80}
												height={80}
											/>
										</div>
										<h4>{partner.name}</h4>
									</div>

									<div className={"flex-col items-center justify-between mb-2"}>
										<p className={"text-sm group-hover:text-gray-800 "}>
											{partner.description}
										</p>
									</div>
									<p className={"bottom-0 mt-auto group-hover:text-gray-800 "}>
										Stránky partnera
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full px-6 py-3 mt-6 flex-col">
				<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
				<Testimonials />
			</div>
		</>
	);
}
