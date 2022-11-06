// Imported dependencies
import { graphql } from 'gatsby';
import React from 'react';
// Imported components
import {
  Accreditations, Aims, Hero, Mastermind, Mission
} from '../components/Pages/About';
import { ReviewsPreview } from '../components/Pages/FrontPage';
import Prospectus from '../components/Prospectus';
import SEO from '../components/seo';


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
