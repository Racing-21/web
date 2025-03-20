export const newsConnectionQuery = `query aktualityConnection {
  aktualityConnection {
    totalCount
    edges {
      node {
        id
        aktuality {
          name
          slug
          date
          shortDescription
          longDescription
          image
        }
      }
    }
  }
}`; 