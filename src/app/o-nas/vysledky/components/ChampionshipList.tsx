import client from "../../../../../tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";
import { normalizeNameForUrlSlug } from "@/utils/utils";
import { championshipsQuery } from "../../../../../tina/queries/championshipQueries";
import { ChampionshipCollectionSoutez } from "../../../../../tina/__generated__/types";

const PLACEHOLDER_IMAGE =
	"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466654/DSC_0406_btensm.webp";

type Championship = {
	name: string;
	year: number;
	image: string;
	category?: string;
	spreadsheetId: string;
};

export const ChampionshipList = async () => {
	const { data } = await client.request(
		{
			query: championshipsQuery,
			variables: {
				relativePath: "Souteze.md",
			},
		},
		{},
	);

	if (!data) {
		return null;
	}

	// Group championships by year
	const championshipsByYear: Record<number, ChampionshipCollectionSoutez[]> = {};

	data.ChampionshipCollection.soutez?.forEach((championship: Championship) => {
		if (!championship) return;

		const year = championship.year;
		if (!championshipsByYear[year]) {
			championshipsByYear[year] = [];
		}
		championshipsByYear[year].push(championship);
	});

	// Sort years in descending order (newest first)
	const sortedYears = Object.keys(championshipsByYear)
		.map(Number)
		.sort((a, b) => b - a);

	return (
		<div className="flex flex-col space-y-8">
			{sortedYears.map((year) => (
				<div key={year} className="space-y-4">
					<h2 className="text-2xl font-bold">{year}</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{championshipsByYear[year].map((championship) => (
							<Link
								href={`/o-nas/vysledky/${normalizeNameForUrlSlug(championship.name)}-${championship.year}`}
								key={championship.spreadsheetId}
							>
								<div className={"rounded-xl bg-grayPrimary p-4"}>
									<Image
										src={championship.image ?? PLACEHOLDER_IMAGE}
										alt={`${championship.name}:${championship.year}`}
										width={480}
										height={360}
										className="rounded-xl w-full"
									/>
									<div className={"flex flex-col"}>
										<p className={"mt-2 font-bold mb-0"}>{championship.name}</p>
										<p className={"mt-0 text-sm"}>{championship.year}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
