import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContentItem } from "@/components/ContentItem";
import client from "../../../tina/__generated__/client";
import { HeroSection } from "@/components/HeroSection";
import { servicesQuery } from "../../../tina/queries/servicesQueries";

type ServiceItem = {
	title?: string;
	headline?: string;
	description?: string;
	image?: string;
	link?: string;
	features?: Array<{
		name: string;
		description?: string;
	}>;
};

export default async function Page() {
	const { data: serviceItems } = await client.request(
		{
			query: servicesQuery,
			variables: { relativePath: "Sluzby.md" },
		},
		{},
	);

	return (
		<>
			<HeroSection
				image={
					"https://res.cloudinary.com/dkhdp7qmd/image/upload/v1731151143/DSC04215_utvoed.webp"
				}
				title={"Racing 21"}
				subtitle={"Široká nabídka služeb pro vaše vozy"}
			/>
			<PageLayout>
				{serviceItems.sluzby.sluzby?.map((item: ServiceItem, i: number) => (
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
