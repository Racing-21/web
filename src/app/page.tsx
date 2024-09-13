import Image from "next/image";
import headerImage from "@/images/homepage/header.jpg";
import serviceCardImage from "@/images/homepage/serviceCard.webp";
import { Metadata } from "next";
import { Card } from "@/app/ui/Card";

export const metadata: Metadata = {
	title: "Racing21",
};

export default function Home() {
	return (
		<>
			<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-[21rem] sm:py-[16rem] lg:px-8">
				<Image
					alt=""
					src={headerImage}
					className="absolute inset-0 -z-10 h-full w-full object-cover"
					height={600}
				/>
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Racing21
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-300"></p>
				</div>
			</div>
			<div className="w-full px-6 py-6">
				<h3>racing 21</h3>
				<div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
					<Card className={"h-[300px]"}>
						<p>Rally tým</p>
					</Card>
					<Card className={"h-[300px] flex-col content-center items-center relative"}>
						<Image
							alt={"Servis vozidel"}
							src={serviceCardImage}
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gray-900 opacity-60 h-full w-full"></div>
						<div className="absolute inset-0 flex items-center justify-center">
							<h2 className="text-white text-3xl font-bold">Servis vozidel</h2>
						</div>
					</Card>
					<Card className={"h-[300px]"}>
						<p>Pronájem vozidel</p>
					</Card>
				</div>
			</div>
		</>
	);
}
