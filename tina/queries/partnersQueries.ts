export const partnersQuery = `query partners($relativePath: String!) {
    partners(relativePath: $relativePath) {
        partner {
            name
            logo
            link
        }
    }
}`;
