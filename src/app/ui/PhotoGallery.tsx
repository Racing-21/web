import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

type Image = {
	src: string;
	alt: string;
};

export function PhotoGallery({ images }: { images: Image[] }) {
	return (
		<TabGroup className={`flex flex-col-reverse w-full`}>
			<div className="mx-auto mt-4 lg:mt-6 w-full sm:block md:max-w-none">
				<TabList className="flex flex-row w-full gap-4 flex-wrap">
					{images.map((image, index) => (
						<Tab
							key={`${image.alt}_${index}_Thumbnail`}
							className="group w-[80px] h-[80px] relative flex cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
						>
							<span className="sr-only">{image.src}</span>
							<span className="absolute inset-0 overflow-hidden rounded-md">
								{image && (
									<Image
										alt={image.alt}
										priority
										src={image.src}
										fill
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
					<TabPanel key={`${image.alt}_${index}_preview`} className={`relative w-full`}>
						{image && (
							<Image
								alt={image.alt}
								src={image.src}
								height={450}
								width={800}
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
