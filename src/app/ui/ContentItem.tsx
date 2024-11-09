import { ComponentType, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { Maybe, MaybeString } from "@/app/ui/VehicleInformationDetail";

type Feature = {
	name: string;
	description?: string;
	icon?: ComponentType<SVGProps<SVGSVGElement>>;
};
type ContentItemType = {
	title?: string;
	headline?: string;
	description?: string;
	link?: string;
	image?: MaybeString;
	features?: Feature[];
};
export const ContentItem = ({
	item,
	imagePosition,
}: {
	item: Maybe<ContentItemType>;
	imagePosition: "RIGHT" | "LEFT";
}) => {
	if (!item) {
		return null;
	}

	return (
		<div className="w-full flex flex-col">
			<div className="overflow-hidden bg-grayPrimary rounded-xl py-8 mt-6">
				<div className="mx-auto px-6 lg:px-8">
					<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
						<div
							className={`flex items-start justify-center order-first ${imagePosition === "RIGHT" ? "md:justify-start lg:order-last" : " md:justify-end"}`}
						>
							{item.image && (
								<Image
									alt="Servis závodních vozů"
									src={item.image}
									width={2432}
									height={500}
									className="max-h-[500px] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:w-[64rem]"
								/>
							)}
						</div>
						<div className=" pb-10 md:pb-0 lg:ml-auto lg:pl-4 lg:pt-4">
							<div className="lg:max-w-screen-lg">
								<h2 className="text-base font-semibold leading-7 text-red-600">
									{item.title}
								</h2>
								<p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
									{item.headline}
								</p>
								<p className="mt-6 text-lg leading-7 text-gray-100">
									{item.description}
								</p>
								<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-100 lg:max-w-none">
									{item.features?.map((feature) => (
										<div key={feature.name} className="relative pl-9">
											<dt className="inline font-semibold text-red-600">
												{feature.icon && (
													<feature.icon
														aria-hidden="true"
														className="absolute left-1 top-1 h-5 w-5 text-gray-400"
													/>
												)}

												{feature.name}
											</dt>
											<dd className="inline">{feature.description}</dd>
										</div>
									))}
								</dl>
								{item.link && (
									<Link
										href={item.link}
										className="inline-block mt-4 rounded-lg bg-red-600 px-3 py-2 text-xl font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900        "
									>
										Více informací
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
