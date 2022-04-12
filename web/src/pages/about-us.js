// Imported dependencies
import React from 'react'
import { graphql } from 'gatsby';
// Imported components
import { ReviewsPreview } from '../components/Pages/FrontPage'
import SEO from '../components/seo'
import Prospectus from '../components/Prospectus';
import { 
  Hero, 
  Mission, 
  Aims, 
  Mastermind, 
  Accreditations 
} from '../components/Pages/About'


const AboutUs = ({ data }) => {
  const {
    image,
    aboutOwner,
    accreditations,
    _rawDescription,
    _rawOurAim,
    _rawOurMissionStatement
  } = data.about.nodes[0]
  return (
    <>
      <SEO title="About us" />
      <Hero desc={_rawDescription} image={image} />
      <Mission mission={_rawOurMissionStatement} />
      <Aims aims={_rawOurAim} />
      <Accreditations accreditations={accreditations} />
      <Mastermind mastermind={aboutOwner} />
      <Prospectus />
      <ReviewsPreview />
    </>
  )
}

// Data query
export const AboutQuery = graphql`
  query AboutQuery {
    about: allSanityAbout {
      nodes {
        image {
          alt
          asset {
            gatsbyImageData(width: 1000)
          }
        }
        aboutOwner {
          _rawOwnerDescription
          owner {
            firstName
            lastName
            qualifications
            role
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
        accreditations {
          alt
          asset {
            gatsbyImageData(width: 400)
          }
        }
        _rawDescription
        _rawOurAim
        _rawOurMissionStatement
      }
    }
  }
`

export default AboutUs
