// Imported packages
import React from 'react'
import { graphql } from 'gatsby'
// Imported components
import Hero from './1_Hero'
import Staff from './2_Staff'
import Routine from './3_Routine'
import Details from './4_Details'
import ReviewsPreview from '../../components/FrontPage/ReviewsPreview'
import Prospectus from '../../components/Prospectus'
import { SEO } from '../../components/Reusable'

// Component
const LocationsTemplateIndex = ({ data }) => {
  console.log(`Template:`, { data });
  return (
    <>
      {/* <SEO title="Location" /> */}
      <Hero data={data} />
      <Staff data={data} />
      <Routine data={data} />
      <Details data={data} />
      <Prospectus color={data.location.subBrandColors[1].title} />
      <ReviewsPreview />
    </>
  )
}

// Data query
export const LocationsTemplateQuery = graphql`
  query LocationsTemplateQuery($slug: String!) {
    location: sanityLocation(slug: { current: { eq: $slug } } ) {
      name
      shortName
      address {
        addressLineOne
        addressLineTwo
        county
        nameOrNumber
        postCode
        townOrCity
      }
      contactDetails {
        emailAddressOne
        emailAddressTwo
        mobileNumber
        telephoneNumber
      }
      dailyRoutine {
        time
        title
      }
      dayAndTime {
        day
        closesAt
        opensAt
      }
      subBrandColors {
        title
      }
      subBrandLogo
      type
      geoLocation {
        lat
        lng
      }
      _rawIntroduction
      introduction {
        _key
        _type
        style
        list
        children {
          _key
          _type
          text
          marks
        } 
        _rawChildren
      }
      mainImage {
        alt
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      person {
        firstName
        lastName
        role
        qualifications
        description {
          _key
          _rawChildren
          _type
          children {
            text
            marks
            _type
            _key
          }
          list
          style
        }
        staffPhoto {
          alt
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    imageGallery: allSanityImageGallery(filter: { location: { slug: { current: { eq: $slug }}}}) {
      nodes {
        image {
          alt
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

export default LocationsTemplateIndex