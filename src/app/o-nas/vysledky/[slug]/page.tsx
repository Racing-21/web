import client from "../../../../../tina/__generated__/client";
import { ChampionshipCollectionSoutez } from "../../../../../tina/__generated__/types";
import { normalizeNameForUrlSlug } from "@/utils/utils";
import { HeroSection } from "@/components/HeroSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import React from "react";
import { ResultSection } from "@/app/o-nas/vysledky/components/ResultSection";

export default async function Page({ params }: { params: { slug: string } }) {
	const { data } = await client.queries.ChampionshipCollection({ relativePath: "Souteze.md" });

	if (!data) {
		return null;
	}

	const championship: ChampionshipCollectionSoutez | null =
		data.ChampionshipCollection.soutez?.find((championship) => {
			const normalizedName = normalizeNameForUrlSlug(championship?.name);
			return params.slug === encodeURIComponent(`${normalizedName}-${championship?.year}`);
		}) ?? null;

	if (!championship) {
		return null;
	}

	const { spreadsheetId } = championship;

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466628/Rally_Pac%CC%8Cejov_23-2124_ks2v8n.webp"
					}
					title={"Racing21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className={"px-6  mt-4"}>
					<Breadcrumbs />
				</div>
				<div className={"w-full flex flex-col md:flex-row md:justify-between gap-8"}>
					<ResultSection spreadsheetId={spreadsheetId} />
				</div>
			</PageLayout>
		</>
	);
}
