import Image from "next/image";
import racePrepImage from "@/images/autodilna/priprava-na-zavody.webp";
import Testimonials from "@/app/ui/Testimonials";
import { Metadata } from "next";
import RaceCarServiceInfo from "@/app/ui/RaceCarServiceInfo";

export const metadata: Metadata = {
	title: "Racing 21 - Servis závodních aut",
	openGraph: {
		type: "website",
		title: "Racing 21 - Servis závodních aut",
		description: "Nabízíme širokou nabídku služeb v oblasti servisu závodních aut",
	},
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
									src={racePrepImage}
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
				<RaceCarServiceInfo />
			</div>
			<div className="w-full px-6 py-6 mt-6 flex-col">
				<h2 className={"text-2xl font-bold mb-2"}>Řekli o nás</h2>
				<Testimonials />
			</div>
		</>
	);
}
