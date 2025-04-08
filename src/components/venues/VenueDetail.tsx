"use client";

import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { PhotoGallery } from "@/components/PhotoGallery";

type VenueType = {
	name: string;
	shortDescription: string;
	longDescription: TinaMarkdownContent | TinaMarkdownContent[];
	image: string;
	gallery?: Array<string | null> | null;
	price: Array<{ price: number; unit: string }>;
};

function normalizePriceUnit(priceUnit: string) {
	switch (priceUnit) {
		case "day":
			return "/ den";
		case "hour":
			return "/ hodinu";
		case "halfDay":
			return "/ 4 hodiny";
	}
}

export function VenueDetail({ venue }: { venue: VenueType }) {
	const venueImages = venue.gallery
		? venue.gallery
				?.filter((image) => image !== null)
				.map((image) => {
					return {
						src: image,
						alt: venue.name,
					};
				})
		: [];

	return (
		<div
			className={
				"bg-grayPrimary py-10 sm:py-120 rounded-lg px-6 flex flex-col md:grid md:grid-cols-4 lg:grid-cols-6 gap-10 h-fit"
			}
		>
			{/*<PhotoGallery images={venueImages} />*/}
			<div className={"col-span-3"}>
				<PhotoGallery images={venueImages} />
			</div>
			<div className={"flex flex-col col-span-3 lg:col-span-3 "}>
				<h2 className="font-bold text-2xl mb-2">{venue.name}</h2>
				<div className="venue__longDescription mb-2 text-sm">
					<TinaMarkdown content={venue.longDescription} />
				</div>
				<div className="venue__longDescription mt-auto">
					<h3 className={"font-bold mt-3"}>Ceník:</h3>
					<div className={"w-full flex flex-col"}>
						{venue.price.map((price) => (
							<>
								<p className="font-bold text-lg mb-2 w-full">
									{new Intl.NumberFormat("cs-CZ", {
										style: "currency",
										currency: "CZK",
										minimumFractionDigits: 0,
										maximumFractionDigits: 0,
									}).format(price.price)}{" "}
									{normalizePriceUnit(price.unit)}
								</p>
							</>
						))}
					</div>
				</div>
				<button
					type="button"
					onClick={(e) => {
						e.preventDefault();
						const goToTop = document.getElementById("contact-form");
						if (goToTop) {
							goToTop.scrollIntoView({ behavior: "smooth", block: "start" });
						}
					}}
					className="mt-4 w-full md:w-[200px] rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:bg-red-900s hover:text-white"
				>
					Zjistit dostupnost
				</button>
			</div>
		</div>
	);
}
