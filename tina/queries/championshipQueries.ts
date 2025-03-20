export const championshipsQuery = `query ChampionshipCollection($relativePath: String!) {
  ChampionshipCollection(relativePath: $relativePath) {
    soutez {
        name
	    year
	    category
	    spreadsheetId
	    image
    }
  }
}`;

export const championshipBySlugQuery = `query ChampionshipBySlug($relativePath: String!, $slug: String!) {
  ChampionshipCollection(relativePath: $relativePath) {
    soutez(filter: {slug: {eq: $slug}}) {
      name
      year
      slug
      description
      results {
        event
        position
        date
      }
    }
  }
}`;
