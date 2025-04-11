export const upcomingEventsQuery = `query upcomingEvents($relativePath: String!) {
    upcomingEvents(relativePath: $relativePath) {
        upcomingEvents {
            name
            date
            description
        }
    }
}`;
