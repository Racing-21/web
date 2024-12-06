import headerImage from "@/images/team/header.webp";
import Image from "next/image";
import { ServiceNavigationCard } from "@/components/ServiceNavigationCard";
import { PageLayout } from "@/components/layout/PageLayout";
import client from "../../../../tina/__generated__/client";
import { parseVehicleImages } from "@/utils/utils";
import { HeroSection } from "@/components/HeroSection";

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
						{vehicles?.map((vehicle) => (
							<ServiceNavigationCard
								key={vehicle.slug}
								link={`technika/${vehicle.slug}`}
								title={vehicle.name}
								altImageText={vehicle.name}
								image={vehicle.images[0]}
								priority
							/>
						))}
					</div>
				</div>
			</PageLayout>
		</>
	);
}
