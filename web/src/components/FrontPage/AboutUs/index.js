// Imported packages
import React from 'react'

// Imported components
import AboutUs from './AboutUs'

const imageArray = [0, 1, 2, 3, 4, 5]

const AboutUsIndex = () => {
  return (
    <AboutUs>
      <AboutUs.Frame yPad={6} bPad={9}>
        <AboutUs.Row columns={2} xGap={9} yGap={7} rowOrder={1}>
          <AboutUs.Column columnOrder={2} custom>
            <AboutUs.Title heading="h2" lineColor="blue">
              A little about us
            </AboutUs.Title>
          </AboutUs.Column>
          <AboutUs.Column columnOrder={2}>
            <AboutUs.Text>
              WellyBoots Day Care Ltd is a privately owned warparound childcare service. We provide Breakfast clubs, After School clubs, a Pre-School and a Childminding service.
              <br /><br />
              We provide a positive, safe and secure environment where every child is provided with a fun and stimulating program which allows them to develop to their full potential in all areas of development...
            </AboutUs.Text>
            <AboutUs.ButtonContainer>
              <AboutUs.Button to="about us" model={1} color="dark pink">Read more</AboutUs.Button>
            </AboutUs.ButtonContainer>
          </AboutUs.Column>
          <AboutUs.Column rowOrder={1} xAlign="center">
            <AboutUs.Title heading="h2" weight="medium" color="gray" small>
              Our accreditations
            </AboutUs.Title>
          </AboutUs.Column>
          <AboutUs.Column rowOrder={2} xAlign="center" xItemsAlign="center" yAlign="start">
            <AboutUs.ImageContainer>
              {imageArray.map(image =>
                <AboutUs.Image key={image} src="https://i.imgur.com/P6wA9d9.png" /* alt={iamge.alt} */ />
              )}
            </AboutUs.ImageContainer>
          </AboutUs.Column>
        </AboutUs.Row>
      </AboutUs.Frame>
    </AboutUs >
  )
}

export default AboutUsIndex