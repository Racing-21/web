import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { Card } from "@/app/ui/Card";
import Image from "next/image";

export type ServiceNavigationCardProps = {
	image: string | StaticImport;
	title: string;
	altImageText: string;
	link: string;
};

export const ServiceNavigationCard = ({
	image,
	title,
	altImageText,
	link,
}: ServiceNavigationCardProps) => {
	return (
		<Link
			href={link}
			className={
				"group w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center card hover:cursor-pointer"
			}
		>
			<Card
				className={
					"h-[200px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg"
				}
			>
				<div className="absolute inset-0 overflow-hidden ">
					<Image
						alt={altImageText}
						src={image}
						layout={"fill"}
						objectFit={"cover"}
						className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
					/>
					<div className="absolute inset-0 bg-black opacity-60 h-full w-full "></div>
				</div>
				<h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center md:whitespace-nowrap text-3xl font-bold z-10">
					{title}
					<div className="relative mt-1 border-transparent border-b-2 group-hover:border-red-500 underline"></div>
				</h3>
			</Card>
		</Link>
	);
};