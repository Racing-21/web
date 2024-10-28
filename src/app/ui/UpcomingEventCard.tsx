import { Card } from "@/app/ui/Card";
import Image from "next/image";
import { AktualityAktuality } from "../../../tina/__generated__/types";
import { Maybe } from "@/app/ui/VehicleInformationDetail";
import Link from "next/link";

export type UpcomingEventCardProps = {
	post?: Maybe<AktualityAktuality>;
	cardClassName?: string;
};

export const UpcomingEventsCard = ({ post, cardClassName }: UpcomingEventCardProps) => {
	if (!post) {
		return null;
	}

	return (
		<Link href={`/media/aktuality/${post.slug}`}>
			<div
				className={
					"w-full overflow-hidden px-5 py-5 bg-grayPrimary rounded-lg flex-col content-center items-center hover:cursor-pointer card"
				}
			>
				<Card
					className={`h-[200px] flex-col content-center items-center relative w-full overflow-hidden rounded-lg shadow-lg ${cardClassName}`}
				>
					<div className="absolute inset-0 overflow-hidden ">
						{post.image && (
							<Image
								alt={post.name}
								src={post.image}
								layout={"fill"}
								objectFit={"cover"}
								className="transition-transform duration-200 ease-in-out transform hover:scale-105 "
							/>
						)}
						<div className="absolute inset-0 bg-black opacity-60 h-full w-full "></div>
					</div>
				</Card>
				<p className="mt-3 left-0 w-full text-white font-bold ">{post.name}</p>
				<p className="left-0 w-full text-gray-400 text-sm">{post.shortDescription}</p>
			</div>
		</Link>
	);
};
