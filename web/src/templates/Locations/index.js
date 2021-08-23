// Imported packages
import React from 'react'
import { graphql } from 'gatsby'
// Imported components
import Hero from './1_Hero'
import Staff from './2_Staff'
import Routine from './3_Routine'
import Details from './4_Details'
import { SEO, Prospectus } from '../../components/Reusable'

// Component
const LocationsTemplateIndex = ({ data, ...props }) => {
  return (
    <>
      {/* <SEO title="Location" /> */}
      <Hero data={data} />
      <Staff data={data} />
      {/* <Routine data={data} /> */}
      {/* <Details data={data}/> */}
      {/* <Prospectus prospectus={prospectus} /> */}
    </>
  )
}


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
        staffPhoto {
          alt
          image {
            asset {
              fluid {
                base64
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