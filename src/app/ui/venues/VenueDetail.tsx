import { TabPanel } from "@headlessui/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { PhotoGallery } from "@/app/ui/PhotoGallery";

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
		<TabPanel key={`tabPanel_${venue.name}`}>
			<div className={"bg-grayPrimary py-10 sm:py-120 rounded-lg px-6 flex gap-10 h-full"}>
				<PhotoGallery images={venueImages} />
				<div className={"h-[400px] flex flex-col"}>
					<h2 className="font-bold text-2xl mb-2">{venue.name}</h2>
					<div className="venue__longDescription mb-2">
						<TinaMarkdown content={venue.longDescription} />
					</div>
					<div className="venue__longDescription mt-auto">
						<h3 className={"font-bold"}>Ceník:</h3>
						<div className={"w-1/3 grid grid-cols-2"}>
							{venue.price.map((price) => (
								<>
									<div>
										{new Intl.NumberFormat("cs-CZ", {
											style: "currency",
											currency: "CZK",
										}).format(price.price)}
									</div>
									<div>{normalizePriceUnit(price.unit)}</div>
								</>
							))}
						</div>
					</div>
					<button
						type="button"
						className="mt-4 w-[200px] rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
					>
						Zjistit dostupnost
					</button>
				</div>
			</div>
		</TabPanel>
	);
}
