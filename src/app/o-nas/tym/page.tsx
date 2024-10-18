import headerImage from "@/images/team/header.webp";
import janecekImage from "@/images/team/karelJanecek.webp";
import stajfImage from "@/images/team/vojtechStajf.webp";
import havelkovaImage from "@/images/team/veronikaHavelkova.webp";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { HeroSection } from "@/app/ui/HeroSection";
import { TeamMemberProfile } from "@/app/o-nas/tym/components/TeamMemberProfile";
import client from "../../../../tina/__generated__/client";

export default async function Page() {
	const { data } = await client.queries.teamMembers({ relativePath: "TeamMembers.md" });

	if (!data) {
		return null;
	}

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={headerImage}
					title={"Racing21"}
					subtitle={"Nejen závodní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Členové závodního týmu racing 21
					</h2>
					<div className={"flex rounded-lg bg-grayPrimary p-6"}>
						<ul
							role="list"
							className="w-full mx-auto grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-3 "
						>
							{data.teamMembers.teamMember?.map((person) =>
								!person ? null : (
									<TeamMemberProfile
										person={person}
										key={`${person?.name}-profile`}
									/>
								),
							)}
						</ul>
					</div>
				</div>
			</PageLayout>
		</>
	);
}
