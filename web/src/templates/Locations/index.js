// Imported packages
import React from 'react'
import { graphql } from 'gatsby'
// Imported components
import Hero from './1_Hero'
import Staff from './2_Staff'
import Routine from './3_Routine'
import Details from './4_Details'
import { ReviewsPreview } from '../../components/Pages/FrontPage'
import Prospectus from '../../components/Prospectus'
import SEO from '../../components/seo'

// Component
const LocationsTemplateIndex = ({ data, ...props }) => {
  // console.log({ props });
  return (
    <>
      <SEO title={`${data.location.shortName}`} />
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
      lateAfternoonRoutine {
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
      subBrandSVG {
        alt
        asset {
          url
          gatsbyImageData
        }
      }
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
            gatsbyImageData(width: 400)
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
              gatsbyImageData(width: 400)
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
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`

export default LocationsTemplateIndex