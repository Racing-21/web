export const technikaQuery = `query technika($relativePath: String!) {
  technika(relativePath: $relativePath) {
   __typename
	  technika {
	    __typename
	    name
	    slug
	    general {
	      __typename
	      length
	      width
	      wheelbase
	      weight
	      body
	    }
	    engine {
	      __typename
	      engineType
	      volume
	      power
	      torque
	      bore
	      compressRatio
	      restrictor
	      controlUnit
	    }
	    drivetrain {
	      __typename
	      drive
	      transmission
	      clutch
	    }
	    brakes {
	      __typename
	      type_front
	      type_rear
	      discs
	      dimensions_front
	      dimensions_rear
	      calipers
	    }
	    suspension {
	      __typename
	      front
	      rear
	      drive
	    }
	    rims {
	      __typename
	      dimensions_front
	      dimensions_rear
	    }
	    tires {
	      __typename
	      dimensions_front
	      dimensions_rear
	    }
	    images
	  }
  }
}`;

export const technikaBySlugQuery = `query technikaBySlug($relativePath: String!, $slug: String!) {
  technika(relativePath: $relativePath) {
    technika(filter: {slug: {eq: $slug}}) {
      name
      slug
      description
      image
      gallery
      specifications {
        key
        value
      }
    }
  }
}`;
