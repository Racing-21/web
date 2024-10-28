import Image from "next/image";
import { Breadcrumbs } from "@/app/ui/Breadcrumbs";
import type { Metadata } from "next";
import { PageLayout } from "@/app/ui/layout/PageLayout";
import client from "../../../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { AktualityAktuality } from "../../../../../tina/__generated__/types";
import { PhotoGallery } from "@/app/ui/PhotoGallery";

export const metadata: Metadata = {
	title: "Racing21 - Technika",
	description: "Přehled soutěžních vozů týmu Racing 21",
};

export default async function Page({ params }: { params: { slug: string } }) {
	const { data } = await client.queries.aktuality({ relativePath: "Aktuality.md" });

	if (!data) {
		return null;
	}

	const post: AktualityAktuality | null =
		data.aktuality.aktuality?.find((post) => post?.slug === params.slug) ?? null;

	if (!post) {
		return null;
	}

	const postImages = post.gallery
		? post.gallery
				?.filter((image) => image !== null)
				.map((image) => {
					return {
						src: image,
						alt: post.name,
					};
				})
		: [];

	return (
		<>
			<div>
				{/* Hero card */}
				<div className="relative  pb-10">
					<div className="absolute inset-x-0 bottom-0 h-2/3 bg-grayPrimary" />
					<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
							<div className="absolute inset-0 ">
								{post.image && (
									<Image
										alt="Fotografie týmu Racing 21"
										src={post.image}
										fill={true}
										className="h-full w-full object-cover"
									/>
								)}

								<div className="absolute inset-0 bg-grayPrimary opacity-50 mix-blend-multiply" />
							</div>
							<div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32 h-[500px]"></div>
						</div>
					</div>
				</div>
			</div>
			<PageLayout>
				<div className={"px-6  mt-4"}>
					<Breadcrumbs />
				</div>

				<div className="w-full px-6 py-6 mt-2 blogPost max-w-[1200px] m-auto">
					<h1 className=" text-5xl font-bold tracking-tight mb-4">{post?.name}</h1>
					<p>{post.date && Intl.DateTimeFormat("cs-CZ").format(new Date(post.date))}</p>
					<TinaMarkdown content={post.longDescription} />
					<PhotoGallery images={postImages} fullwidth />
				</div>
			</PageLayout>
		</>
	);
}