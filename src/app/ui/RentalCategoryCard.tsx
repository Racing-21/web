import { MaybeString } from "@/app/ui/VehicleInformationDetail";
import { Card } from "@/app/ui/Card";
import Image from "next/image";

export const RentalCategoryCard = ({
	category,
}: {
	category: {
		name: MaybeString;
		shortDescription: MaybeString;
		image: MaybeString;
	};
}) => {
	return (
		<div
			className={
				"w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center hover:cursor-pointer card"
			}
		>
			<Card
				className={`h-[300px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg}`}
			>
				<div className="absolute inset-0 overflow-hidden ">
					{category.image && (
						<Image
							alt={category.name ?? " "}
							src={category.image}
							fill
							objectFit={"cover"}
							priority
							className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
						/>
					)}
					<div className="absolute inset-0 bg-black opacity-20 h-full w-full "></div>
				</div>
			</Card>
			<p className="mt-3 left-0 w-full text-white font-bold line-clamp-2 h-[30px]">
				{category.name}
			</p>
			<p className="left-0 w-full text-gray-400 text-sm line-clamp-2">
				{category.shortDescription}
			</p>
		</div>
	);
};
