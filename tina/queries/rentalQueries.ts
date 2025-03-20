export const venueQuery = `query pronajem($relativePath: String!) {
  pronajem(relativePath: $relativePath) {
    prostory {
      name
      shortDescription
      longDescription
      price {
        price
        unit
      }
      image
      gallery
    }
  }
}`;

export const trailersQuery = `query {
        pronajemPrivesuConnection {
            edges {
                node {
                    _sys {
                        filename
                        relativePath
                    }
                     __typename
					  privesy {
					    __typename
					    name
					    shortDescription
					    longDescription
					    price {
					      __typename
					      price
					      unit
					    }
					    image
					    gallery
					  }
                }
            }
        }
    }`;

export const equipmentQuery = `query pronajemTechniky($relativePath: String!) {
  pronajemTechniky(relativePath: $relativePath) {
    technika {
      name
      shortDescription
      longDescription
      price {
        price
        unit
      }
      image
      gallery
    }
  }
}`;

export const facilitiesQuery = `query pronajemZazemi($relativePath: String!) {
  pronajemZazemi(relativePath: $relativePath) {
    zazemi {
      name
      shortDescription
      longDescription
      price {
        price
        unit
      }
      image
      gallery
    }
  }
}`;
