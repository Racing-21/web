export const newsQuery = `query aktuality($relativePath: String!) {
    aktuality(relativePath: $relativePath) {
        aktuality {
            name
            slug
            date
            shortDescription
            longDescription
            image
        }
    }
}`;
