import headerImage from "@/images/autodilna/header.webp";
import Image from "next/image";
import { ContactForm } from "@/app/ui/ContactForm";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { ContentItem } from "@/app/ui/ContentItem";
import client from "../../../tina/__generated__/client";

export default async function Page() {
	const { data: serviceItems } = await client.queries.sluzby({
		relativePath: "Sluzby.md",
	});

	console.log(serviceItems);

	return (
		<>
			<div>
				{/* Hero card */}
				<div className="relative  pb-10">
					<div className="absolute inset-x-0 bottom-0 h-2/3 bg-grayPrimary" />
					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
							<div className="absolute inset-0 ">
								<Image
									alt="Fotografie týmu Racing 21"
									src={headerImage}
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32 h-[500px]">
								<h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
									<span className="block text-white">Racing21</span>
									<span className="block text-red-600">
										Nejen závodní rally tým
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PageLayout>
				{serviceItems.sluzby.sluzby?.map((item, i) => (
					<ContentItem
						key={item?.title}
						item={item}
						imagePosition={i % 2 === 0 ? "RIGHT" : "LEFT"}
					/>
				))}

				<ContactForm />
			</PageLayout>
		</>
	);
}
