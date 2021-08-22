// Imported packages
import React from 'react'
// Imported components
import Hero from './1_Hero'
import Staff from './2_Staff'
import Routine from './3_Routine'
import Details from './4_Details'
import { SEO, Prospectus } from '../../components/Reusable'
import { graphql } from 'gatsby'

// Component
const LocationsTemplateIndex = ({ data: { location }, ...props }) => {
  console.log({ location, props })
  return (
    <>
      {/* <SEO title="Location" /> */}
      <Hero
        name={[location.shortName, location.name]}
        intro={location._rawIntroduction}
        subBrandColors={location.subBrandColors}
        subBrandLogo={location.subBrandLogo}
        type={location.type}
        mainImage={location.mainImage}
      />
      {/* <Staff staff={person} />
      <Routine dailyRoutine={dailyRoutine} />
      <Details
        contailDetails={contailDetails}
        address={address}
        geoLocation={geoLocation}
      />
      <Prospectus prospectus={prospectus} /> */}
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
  }
`

export default LocationsTemplateIndex