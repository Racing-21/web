export const teamMembersQuery = `query teamMembers($relativePath: String!) {
  teamMembers(relativePath: $relativePath) {
	 teamMember {
	    __typename
	    ... on TeamMembersTeamMemberRacingTeam {
	      name
	      sex
	      role
	      achievements {
	        __typename
	        name
	        year
	        ranking
	        category
	      }
	      about
	      image
	    }
	    ... on TeamMembersTeamMemberBackOffice {
	      name
	      role
	      sex
	      image
	    }
	  }
  }
}`;

export const teamMemberBySlugQuery = `query teamMemberBySlug($relativePath: String!, $slug: String!) {
  teamMembers(relativePath: $relativePath) {
    clenove(filter: {slug: {eq: $slug}}) {
      name
      role
      image
      slug
      bio
      gallery
      facebook
      instagram
      twitter
      linkedIn
    }
  }
}`;
