import headerImage from "@/images/autodilna/header.webp";
import { ContactForm } from "@/components/ContactForm";
import { PageLayout } from "@/components/layout/PageLayout";
import { ContentItem } from "@/components/ContentItem";
import client from "../../../tina/__generated__/client";
import { HeroSection } from "@/components/HeroSection";

export default async function Page() {
	const { data: serviceItems } = await client.queries.sluzby({
		relativePath: "Sluzby.md",
	});

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
