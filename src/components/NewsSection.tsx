import client from "../../tina/__generated__/client";
import { UpcomingEventsCard } from "@/components/UpcomingEventCard";
import { newsQuery } from "../../tina/queries/newsQueries";

type NewsItem = {
	name: string;
	slug: string;
	date: string;
	shortDescription: string;
	longDescription: string;
	image: string;
};

export async function NewsSection() {
	const { data } = await client.request(
		{
			query: newsQuery,
			variables: { relativePath: "Aktuality.md" },
		},
		{},
	);

	if (!data) {
		return null;
	}

	const latesNews = data.aktuality.aktuality?.slice(0, 3);

	return (
		<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
			{latesNews?.map((post: NewsItem) => (
				<UpcomingEventsCard post={post} key={`${post?.name}-${post?.date}-${post?.slug}`} />
			))}
		</div>
	);
}
