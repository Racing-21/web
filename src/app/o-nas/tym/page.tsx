import { PageLayout } from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/HeroSection";
import { TeamMemberProfile } from "@/app/o-nas/tym/components/TeamMemberProfile";
import client from "../../../../tina/__generated__/client";
import Link from "next/link";
import { normalizeNameForUrlSlug } from "@/utils/utils";

export default async function Page() {
	const { data } = await client.queries.teamMembers({ relativePath: "ClenoveTymu.md" });

	if (!data) {
		return null;
	}

	const backOfficeTeamMembers = data.teamMembers.teamMember?.filter(
		(teamMember) => teamMember?.__typename === "TeamMembersTeamMemberBackOffice",
	);

	const racingTeamMembers = data.teamMembers.teamMember?.filter(
		(teamMember) => teamMember?.__typename === "TeamMembersTeamMemberRacingTeam",
	);

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
				<div className="w-full">
					<h2 className={"text-2xl capitalize font-bold mb-2"}>
						Členové závodního týmu racing 21
					</h2>
					<div className={"flex rounded-lg bg-grayPrimary p-6"}>
						<ul
							role="list"
							className="w-full mx-auto grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-4 "
						>
							{racingTeamMembers?.map((person) =>
								!person || !person.name ? null : (
									<Link
										href={`/o-nas/tym/${normalizeNameForUrlSlug(person.name)}`}
										key={person.name.replace(" ", "-")}
									>
										<TeamMemberProfile
											person={person}
											key={`${person?.name}-profile`}
										/>
									</Link>
								),
							)}
						</ul>
					</div>
					<h2 className={"mt-4 text-2xl capitalize font-bold mb-2"}>Relizační tým</h2>
					<div className={"flex rounded-lg bg-grayPrimary p-6"}>
						<ul
							role="list"
							className="w-full mx-auto grid grid-cols-1 gap-x-8 gap-y-12 text-center md:grid-cols-3 "
						>
							{backOfficeTeamMembers?.map((person) =>
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
