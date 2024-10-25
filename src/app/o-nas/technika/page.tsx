import headerImage from "@/images/team/header.webp";
import Image from "next/image";
import { ServiceNavigationCard } from "@/app/ui/ServiceNavigationCard";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import client from "../../../../tina/__generated__/client";
import { MaybeString } from "@/app/ui/VehicleInformationDetail";

export function parseVehicleImages(images: MaybeString | (string | null)[]) {
	if (Array.isArray(images)) {
		return images.filter((image) => image !== null);
	} else if (images !== null && images !== undefined) {
		return [images];
	} else {
		return [];
	}
}

export default async function Page() {
	const { data } = await client.queries.technika({ relativePath: "Technika.md" });

	if (!data) {
		return null;
	}
	const vehicles = data.technika.technika?.map((vehicle) => ({
		...vehicle,
		images: parseVehicleImages(vehicle?.images),
	}));

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
									<span className="block text-red-600">S čím závodíme</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<h2 className={"w-full text-2xl capitalize font-bold mb-2"}>Naše technika</h2>
					<div className={"flex flex-col gap-4 rounded-lg md:flex-row"}>
						{vehicles?.map((vehicle) => (
							<ServiceNavigationCard
								key={vehicle.slug}
								link={`technika/${vehicle.slug}`}
								title={vehicle.name}
								altImageText={vehicle.name}
								image={vehicle.images[0]}
							/>
						))}
					</div>
				</div>
			</PageLayout>
		</>
	);
}
