import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Card } from "@/app/ui/Card";
import Image from "next/image";

export type UpcomingEventCardProps = {
	image?: string | StaticImport | null;
	title: string;
	altImageText: string;
	description: string;
	cardClassName?: string;
};

export const UpcomingEventsCard = ({
	image,
	title,
	altImageText,
	description,
	cardClassName,
}: UpcomingEventCardProps) => {
	return (
		<div
			className={
				"w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center hover:cursor-pointer card"
			}
		>
			<Card
				className={`h-[200px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg ${cardClassName}`}
			>
				<div className="absolute inset-0 overflow-hidden ">
					{image && (
						<Image
							alt={altImageText}
							src={image}
							layout={"fill"}
							objectFit={"cover"}
							className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
						/>
					)}
					<div className="absolute inset-0 bg-black opacity-60 h-full w-full "></div>
				</div>
			</Card>
			<p className="mt-3 left-0 w-full text-white font-bold ">{title}</p>
			<p className="left-0 w-full text-gray-400 text-sm">{description}</p>
		</div>
	);
};
