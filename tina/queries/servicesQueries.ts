export const servicesQuery = `query sluzby($relativePath: String!) {
  sluzby(relativePath: $relativePath) {
    sluzby {
      title
      headline
      description
      image
      link
    }
  }
}`;
