import client from "../../tina/__generated__/client";
import { upcomingEventsQuery } from "../../tina/queries/upcomingEventsQueries";
import { Card } from "@/components/Card";
import { CalendarIcon } from "@heroicons/react/24/outline";

type EventItem = {
	name: string;
	date: string;
	description?: string;
};

export async function UpcomingEvents() {
	const { data } = await client.request(
		{
			query: upcomingEventsQuery,
			variables: { relativePath: "UpcomingEvents.md" },
		},
		{},
	);

	if (
		!data ||
		!data.upcomingEvents.upcomingEvents ||
		data.upcomingEvents.upcomingEvents.length === 0
	) {
		return null;
	}

	// Sort events by date (closest first)
	const sortedEvents = [...data.upcomingEvents.upcomingEvents].sort((a, b) => {
		return new Date(a.date).getTime() - new Date(b.date).getTime();
	});

	// Get only future events or events happening today
	const now = new Date();
	now.setHours(0, 0, 0, 0); // Set to beginning of day for fair comparison

	const futureEvents = sortedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		eventDate.setHours(0, 0, 0, 0);
		return eventDate >= now;
	});

	// Take only the first 3 upcoming events
	const upcomingEvents = futureEvents.slice(0, 3);

	if (upcomingEvents.length === 0) {
		return null;
	}

	return (
		<Card className="bg-grayPrimary p-4 h-full">
			<h3 className="text-xl font-bold text-red-600 mb-4">Nadcházející události</h3>
			<div className="space-y-4">
				{upcomingEvents.map((event: EventItem) => (
					<div
						key={`${event.name}-${event.date}`}
						className="border-b border-gray-700 pb-3 last:border-0"
					>
						<div className="flex items-center">
							<CalendarIcon className="h-5 w-5 text-red-600 mr-2" />
							<p className="text-white font-semibold">{event.name}</p>
						</div>
						<p className="text-gray-300 text-sm mt-1">
							{new Date(event.date).toLocaleDateString("cs-CZ", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</p>
						{event.description && (
							<p className="text-gray-400 text-sm mt-2">{event.description}</p>
						)}
					</div>
				))}
			</div>
		</Card>
	);
}
