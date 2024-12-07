import client from "../../../../../tina/__generated__/client";
import Image from "next/image";
import Link from "next/link";
import { normalizeNameForUrlSlug } from "@/utils/utils";

const PLACEHOLDER_IMAGE =
	"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466654/DSC_0406_btensm.webp";

export const ChampionshipList = async () => {
	const { data } = await client.queries.ChampionshipCollection({ relativePath: "Souteze.md" });

	if (!data) {
		return null;
	}

	return (
		<div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>
			{data.ChampionshipCollection.soutez?.map((championship) => {
				if (!championship) {
					return null;
				} else {
					return (
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
					);
				}
			})}
		</div>
	);
};
