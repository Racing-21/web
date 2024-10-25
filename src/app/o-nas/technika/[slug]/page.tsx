import Image from "next/image";
import VehicleInformationDetail, { Vehicle } from "@/app/ui/VehicleInformationDetail";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import type { Metadata } from "next";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import client from "../../../../../tina/__generated__/client";

import { parseVehicleImages } from "@/utils/utils";

export const metadata: Metadata = {
	title: "Racing21 - Technika",
	description: "Přehled soutěžních vozů týmu Racing 21",
};

export default async function Page({ params }: { params: { slug: string } }) {
	const { data } = await client.queries.technika({ relativePath: "Technika.md" });

	if (!data) {
		return null;
	}

	const vehicle: Vehicle | null =
		data.technika.technika?.find((vehicle) => vehicle?.slug === params.slug) ?? null;

	if (!vehicle) {
		return null;
	}

	const vehicleImages = parseVehicleImages(vehicle?.images);

	return (
		<>
			<div>
				{/* Hero card */}
				<div className="relative  pb-10">
					<div className="absolute inset-x-0 bottom-0 h-2/3 bg-grayPrimary" />
					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
							<div className="absolute inset-0 ">
								{vehicleImages && (
									<Image
										alt="Fotografie týmu Racing 21"
										src={vehicleImages[0]}
										fill={true}
										className="h-full w-full object-cover"
									/>
								)}

								<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32 h-[500px]">
								<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">Racing21</span>
									<span className="block text-red-600">{vehicle?.name}</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PageLayout>
				<div className={"px-6  mt-4"}>
					<Breadcrumbs />
				</div>
				<div className="w-full px-6 py-6 mt-2">
					<VehicleInformationDetail vehicle={vehicle} />
				</div>
			</PageLayout>
		</>
	);
}
