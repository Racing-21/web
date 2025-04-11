import client from "../../tina/__generated__/client";
import { UpcomingEventsCard } from "@/components/UpcomingEventCard";
import { newsQuery } from "../../tina/queries/newsQueries";
import { UpcomingEvents } from "@/components/UpcomingEvents";

type NewsItem = {
	name: string;
	slug: string;
	date: string;
	shortDescription: string;
	longDescription: string;
	image: string;
};

export async function NewsSection({ numberOfNews }: { numberOfNews?: number }) {
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

	if (numberOfNews) {
		const latestNews: NewsItem[] = data.aktuality.aktuality?.slice(0, numberOfNews);

		return (
			<div
				className={"w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 rounded-lg"}
			>
				<div
					className={"md:col-span-2 lg:col-span-4 grid-cols-1 lg:grid-cols-2 grid gap-4"}
				>
					{latestNews?.map((post) => (
						<UpcomingEventsCard
							post={post}
							key={`${post?.name}-${post?.date}-${post?.slug}`}
						/>
					))}
				</div>
				<div className={"md:col-span-2 lg:col-span-2"}>
					<UpcomingEvents />
				</div>
			</div>
		);
	}

	return (
		<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
			{data.aktuality.aktuality?.map((post: NewsItem) => (
				<UpcomingEventsCard post={post} key={`${post?.name}-${post?.date}-${post?.slug}`} />
			))}
		</div>
	);
}
