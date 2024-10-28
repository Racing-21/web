import client from "../../../tina/__generated__/client";
import { UpcomingEventsCard } from "@/app/ui/UpcomingEventCard";

export async function NewsSection() {
	const { data } = await client.queries.aktuality({ relativePath: "Aktuality.md" });

	if (!data) {
		return null;
	}

	const latesNews = data.aktuality.aktuality?.slice(0, 3);

	return (
		<div className={"grid grid-cols-1 md:grid-cols-3 gap-4 rounded-lg"}>
			{latesNews?.map((post) => (
				<UpcomingEventsCard post={post} key={`${post?.name}-${post?.date}-${post?.slug}`} />
			))}
		</div>
	);
}
