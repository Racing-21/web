"use client";

import { useState } from "react";
import Image from "next/image";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import {
	TeamMembersTeamMember,
	TeamMembersTeamMemberAchievements,
} from "../../../../../tina/__generated__/types";
import { uuidV4 } from "mongodb/src/utils";

const Achievement = ({ achievement }: { achievement: TeamMembersTeamMemberAchievements }) => {
	return (
		<li key={`${achievement.name}-${achievement.year}-${achievement.name}`}>
			<h4>
				{achievement.name} - {achievement.year}
			</h4>
		</li>
	);
};

export const TeamMemberProfile = ({ person }: { person: TeamMembersTeamMember }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDialog = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<li
				key={person.name}
				className={
					"relative bg-black rounded-xl p-6 hover:bg-grayPrimary cursor-pointer shadow-black shadow-md"
				}
				onClick={() => handleToggleDialog()}
			>
				{person.image && (
					<Image
						alt={person.name}
						src={person.image}
						width={150}
						height={150}
						objectFit={"contain"}
						className="mx-auto h-[150px] w-[150] rounded-full grayscale object-cover"
					/>
				)}
				<h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-100">
					{person.name}
				</h3>
				<p className="text-sm leading-6 text-red-600 font-bold uppercase">{person.role}</p>
			</li>
			<Dialog open={isOpen} onClose={() => handleToggleDialog()} className="relative z-50">
				<DialogBackdrop className="fixed inset-0 bg-black/50" />
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4 overflow-y-auto">
					<DialogPanel className="max-w-screen-lg space-y-4 rounded-xl bg-grayPrimary p-12 shadow-gray-400">
						<div className={"flex justify-start flex-col md:flex-row "}>
							{person.image && (
								<Image
									alt={person.name}
									src={person.image}
									className="mr-6 h-52 w-52  rounded-lg grayscale-0"
								/>
							)}
							<div className={"flex flex-col"}>
								<DialogTitle className="font-bold">{person.name}</DialogTitle>
								<Description>{person.about}</Description>
							</div>
						</div>
						{person.achievements && person.achievements.length > 0 && (
							<div>
								<h3>Úspěchy</h3>
								<ul>
									{person.achievements?.map((item) =>
										item ? (
											<Achievement
												achievement={item}
												key={uuidV4().toString()}
											/>
										) : null,
									)}
								</ul>
							</div>
						)}
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
};
