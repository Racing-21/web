"use client";
import Image from "next/image";
import { TeamMembersTeamMember } from "../../../../../tina/__generated__/types";

enum teamRoles {
	acceptanceMechanic = "Přijímací technik",
	driver = "Soutěžní jezdec",
	navigator = "Navigátor",
	mechanic = "Mechanik",
	videoCrew = "Video tým",
	photographer = "Fotograf",
	chiefMechanic = "Technik",
	catering = "Catering",
	teamCoordinator = "Koordinátor týmu",
	scout = "Průzkum trati",
	prManager = "PR manažer",
	founder = "Spolumajitel týmu",
}

enum teamRolesFemales {
	acceptanceMechanic = "Přijímací technička",
	driver = "Soutěžní jezdkyně",
	navigator = "Navigátorka",
	mechanic = "Mechanička",
	videoCrew = "Video tým",
	photographer = "Fotografka",
	chiefMechanic = "Technička",
	catering = "Catering",
	teamCoordinator = "Koordinátorka týmu",
	scout = "Průzkum trati",
	prManager = "PR manažerka",
	founder = "Spolumajitel týmu",
}

export const TeamMemberProfile = ({ person }: { person: TeamMembersTeamMember }) => {
	return (
		<>
			<li
				key={person.name}
				className={
					"relative bg-black rounded-xl p-6 hover:bg-grayPrimary cursor-pointer shadow-black shadow-md h-full"
				}
			>
				{person.image && (
					<Image
						alt={person.name}
						src={person.image}
						width={150}
						height={150}
						className="mx-auto h-[150px] w-[150] rounded-full grayscale object-cover"
					/>
				)}
				<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-100">
					{person.name}
				</h3>
				{person.role &&
					person.role.map((role) => (
						<p
							key={`${person.name}_${role}`}
							className="text-sm leading-6 text-red-600 font-bold uppercase"
						>
							{person.sex?.includes("F")
								? teamRolesFemales[role as keyof typeof teamRoles]
								: teamRoles[role as keyof typeof teamRoles]}
						</p>
					))}
			</li>
		</>
	);
};
