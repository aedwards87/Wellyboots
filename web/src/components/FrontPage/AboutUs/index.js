// Imported packages
import React from 'react'
// Imported components
import AboutUs from './AboutUs'
// Imported query
import { useALittleAboutUsQuery } from '../../../hooks/Queries/useAlittleAboutUsQuery'

// Component
// Short extracted version of the About us for the Home page
const AboutUsIndex = () => {
  const { aLittleAboutUs: { nodes } } = useALittleAboutUsQuery()
  const aLittleAboutUs = nodes[0]
  console.log(aLittleAboutUs.frontPageDescription[0])
  return (
    <AboutUs>
      <AboutUs.Frame yPad={6} bPad={9}>
        <AboutUs.Row columns={2} xGap='94px' yGap={9} rowOrder={1}>
          <AboutUs.Column columnOrder={2} custom>
            <AboutUs.Title heading="h2" lineColor="blue">
              A little about us
            </AboutUs.Title>
          </AboutUs.Column>
          <AboutUs.Column columnOrder={2}>
            <AboutUs.PortableText blocks={aLittleAboutUs.frontPageDescription[0]} />
            <AboutUs.LinkContainer>
              <AboutUs.Link to="about us" model={1} color="dark pink">
                Read more
              </AboutUs.Link>
            </AboutUs.LinkContainer>
          </AboutUs.Column>
          <AboutUs.Column rowOrder={1} xAlign="center" yItemsAlign="end">
            <AboutUs.Title heading="h2" weight="medium" color="gray" small>
              Our accreditations
            </AboutUs.Title>
          </AboutUs.Column>
          <AboutUs.Column rowOrder={2} xAlign="center" xItemsAlign="center" yAlign="start">
            <AboutUs.ImageContainer>
              {aLittleAboutUs.accreditations.map(image =>
                <AboutUs.Image
                  key={image.alt}
                  fluid={image.asset.fluid}
                  imgStyle={{ objectFit: `contain` }}
                  alt={image.alt}
                  title={image.alt}
                />
              )}
            </AboutUs.ImageContainer>
          </AboutUs.Column>
        </AboutUs.Row>
      </AboutUs.Frame>
    </AboutUs>
  )
}

export default AboutUsIndex