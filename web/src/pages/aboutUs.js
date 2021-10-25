// Imported dependencies
import React from 'react'
import { graphql } from 'gatsby';
// Imported components
import { Hero, Mission, Aims, Mastermind, Accreditations } from '../components/Pages/About'
import { ReviewsPreview } from '../components/Pages/FrontPage'
import Prospectus from '../components/Prospectus';

const AboutUs = ({ data }) => {
  const {
    aboutOwner,
    accreditations,
    description,
    ourAim,
    ourMissionStatement,
  } = data.about.nodes[0]
  console.log({ accreditations });
  return (
    <>
      <Hero desc={description} />
      <Mission mission={ourMissionStatement} />
      <Aims aims={ourAim} />
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
        aboutOwner {
          ownerDescription {
            style
            list
            _type
            children {
              _key
              _type
              marks
              text
            }
            _rawChildren
            _key
          }
          owner {
            firstName
            lastName
            qualifications
            role
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
        accreditations {
          alt
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description {
          style
          list
          children {
            text
            marks
            _type
            _key
          }
          _type
          _rawChildren
          _key
        }
        ourAim {
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
        ourMissionStatement {
          style
          list
          children {
            _key
            _type
            marks
            text
          }
          _type
          _rawChildren
          _key
        }
      }
    }
  }
`

export default AboutUs
