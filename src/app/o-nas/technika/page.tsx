import { ServiceNavigationCard } from "@/components/ServiceNavigationCard";
import { PageLayout } from "@/components/layout/PageLayout";
import client from "../../../../tina/__generated__/client";
import { parseVehicleImages } from "@/utils/utils";
import { HeroSection } from "@/components/HeroSection";
import { technikaQuery } from "../../../../tina/queries/technikaQueries";
import { TechnikaTechnika } from "../../../../tina/__generated__/types";
import { StaticImageData } from "next/image";

export default async function Page() {
	const { data } = await client.request(
		{
			query: technikaQuery,
			variables: { relativePath: "Technika.md" },
		},
		{},
	);

	if (!data) {
		return null;
	}
	const vehicles = data.technika.technika?.map((vehicle: TechnikaTechnika) => ({
		...vehicle,
		images: parseVehicleImages(vehicle?.images),
	}));

	return (
		<>
			<div>
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1729847047/cadet_2_imrd6s.webp"
					}
					title={"Racing 21"}
					subtitle={"S čím závodíme"}
				/>
			</div>
			<PageLayout>
				<div className="w-full flex flex-col">
					<h2 className={"w-full text-2xl capitalize font-bold mb-2"}>Naše technika</h2>
					<div className={"flex flex-col gap-4 rounded-lg md:flex-row"}>
						{vehicles?.map((vehicle: TechnikaTechnika) => (
							<ServiceNavigationCard
								key={vehicle.slug}
								link={`technika/${vehicle.slug}`}
								title={vehicle.name}
								altImageText={vehicle.name}
								image={
									vehicle.images?.[0] ??
									("/placeholder.jpg" as unknown as StaticImageData)
								}
								priority
							/>
						))}
					</div>
				</div>
			</PageLayout>
		</>
	);
}
