export const generalServiceQuery = `query generalService($relativePath: String!) {
  generalService(relativePath: $relativePath) {
    categories {
      name
      image
      features {
        value
      }
    }
    priceList {
      title
      sections {
        title
        items {
          name
          price
          priceFrom
          priceTo
        }
      }
    }
  }
}`;
