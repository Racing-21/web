import { Breadcrumbs } from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import client from "../../../../../tina/__generated__/client";
import {
	Maybe,
	TeamMembersTeamMember,
	TeamMembersTeamMemberRacingTeamAchievements,
} from "../../../../../tina/__generated__/types";
import { HeroSection } from "@/components/HeroSection";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TrophyIcon } from "@heroicons/react/20/solid";
import { normalizeNameForUrlSlug } from "@/utils/utils";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Racing21 - Technika",
	description: "Přehled soutěžních vozů týmu Racing 21",
};

const Achievements = ({
	achievements,
}: {
	achievements: Maybe<TeamMembersTeamMemberRacingTeamAchievements>[];
}) => {
	return (
		<div className="flow-root ">
			<ul role="list" className="flex flex-col gap-3">
				{achievements
					?.filter((achievement) => achievement !== null)
					.map((achievement: TeamMembersTeamMemberRacingTeamAchievements) => (
						<li key={`${achievement.name}-${achievement.year}-${achievement.name}`}>
							<div className="p-4 bg-grayPrimary rounded-xl">
								<div className=" flex space-x-3">
									<div className="size-8">
										<TrophyIcon
											color={`${achievement.ranking === 1 ? "gold" : achievement.ranking === 2 ? "silver" : "bronze"}`}
										/>
									</div>
									<div className="flex min-w-0 w-full items-center">
										<p className="text-sm text-gray-100 mr-auto">
											{achievement.year} - {achievement.name}
										</p>
									</div>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	);
};

// Define interface for TinaMarkdown component props
interface RichTextProps {
	children?: ReactNode;
}

const AboutText = ({ props }: { props: RichTextProps | undefined }) => {
	return <div>{props?.children}</div>;
};

export default async function Page({ params }: { params: { slug: string } }) {
	const { data } = await client.queries.teamMembers({ relativePath: "ClenoveTymu.md" });

	if (!data) {
		return null;
	}

	const teamMember: TeamMembersTeamMember | null =
		data.teamMembers.teamMember?.find((member) => {
			const normalizedName = normalizeNameForUrlSlug(member?.name);
			return normalizedName === params.slug;
		}) ?? null;

	if (!teamMember || teamMember.__typename !== "TeamMembersTeamMemberRacingTeam") {
		return null;
	}

	const { name, image, achievements, about } = teamMember;

	return (
		<>
			<div>
				{/* Hero card */}
				<HeroSection
					image={
						"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1732466628/Rally_Pac%CC%8Cejov_23-2124_ks2v8n.webp"
					}
					title={"Racing21"}
					subtitle={"Nejen soutěžní rally tým"}
				/>
			</div>
			<PageLayout>
				<div className={"px-6  mt-4"}>
					<Breadcrumbs />
				</div>
				<div className={"flex flex-col md:flex-row md:justify-between gap-8"}>
					<div className="flex flex-col w-full md:w-1/2 p-6 bg-grayPrimary rounded-xl items-center h-fit">
						{image && (
							<Image
								alt={name}
								src={image}
								className=" h-52 w-52 rounded-full grayscale-0 object-cover"
								height={300}
								width={400}
							/>
						)}
						<h3 className={"w-full text-center mt-4 text-2xl font-bold"}>{name}</h3>
						<div className={"mt-2 p-2 teamMember-bio"}>
							<TinaMarkdown
								content={about}
								components={{
									p: (props: RichTextProps | undefined) => (
										<AboutText props={props} />
									),
								}}
							/>
						</div>
					</div>
					<div className="flex flex-col w-full md:w-1/2 ">
						{achievements && achievements.length > 0 && (
							<div className={"p-0"}>
								<h3 className={"p-0 text-xl font-bold mb-4"}>Úspěchy</h3>
								<Achievements
									achievements={achievements}
									key={(Math.random() * 10000).toString()}
								/>
							</div>
						)}
					</div>
				</div>
			</PageLayout>
		</>
	);
}
