import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import Image from "next/image";

type Image = {
	src: string;
	alt: string;
};

function PhotoGallery({ images }: { images: Image[] }) {
	return (
		<TabGroup className="flex flex-col-reverse w-1/2">
			<div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
				<TabList className="grid grid-cols-4 gap-6">
					{images.map((image, index) => (
						<Tab
							key={`${image.alt}_${index}_Thumbnail`}
							className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
						>
							<span className="sr-only">{image.src}</span>
							<span className="absolute inset-0 overflow-hidden rounded-md">
								{image && (
									<Image
										alt={image.alt}
										priority
										src={image.src}
										width={200}
										height={150}
										className="h-full w-full object-cover object-center"
									/>
								)}
							</span>
							<span
								aria-hidden="true"
								className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
							/>
						</Tab>
					))}
				</TabList>
			</div>

			<TabPanels className="aspect-h-1 aspect-w-1 w-full">
				{images.map((image, index) => (
					<TabPanel
						key={`${image.alt}_${index}_preview`}
						className={"relative h-[400px] w-full"}
					>
						{image && (
							<Image
								alt={image.alt}
								src={image.src}
								fill
								priority
								className="h-full w-full object-cover object-center sm:rounded-lg"
							/>
						)}
					</TabPanel>
				))}
			</TabPanels>
		</TabGroup>
	);
}

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
