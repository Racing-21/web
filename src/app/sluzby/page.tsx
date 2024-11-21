import headerImage from "@/images/autodilna/header.webp";
import { ContactForm } from "@/app/ui/ContactForm";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import { ContentItem } from "@/app/ui/ContentItem";
import client from "../../../tina/__generated__/client";
import { HeroSection } from "@/app/ui/HeroSection";

export default async function Page() {
	const { data: serviceItems } = await client.queries.sluzby({
		relativePath: "Sluzby.md",
	});

	console.log(serviceItems);

	return (
		<>
			<HeroSection
				image={headerImage}
				title={"Racing 21"}
				subtitle={"Široká nabídka služeb pro vaše závodní potřeby"}
			/>
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
