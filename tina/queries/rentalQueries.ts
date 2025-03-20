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

export const trailersQuery = `query pronajemPrivesu($relativePath: String!) {
  pronajemPrivesu(relativePath: $relativePath) {
    privesy {
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
