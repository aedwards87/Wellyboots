// Imported packages
import React from 'react'

// Imported components
import AboutUs from './AboutUs'

const AboutUsIndex = () => {
  return (
    <AboutUs>
      <AboutUs.Frame yPad={11}>
        <AboutUs.Row columns={2} xGap="5vw" yGap={5}>
          <AboutUs.Column columnOrder={2}>
            <AboutUs.Title heading="h1" lineColor="blue">
              A little about us
            </AboutUs.Title>
          </AboutUs.Column>
        </AboutUs.Row>
        <AboutUs.Row columns={2} xGap="5vw" yGap={5}>
          <AboutUs.Column columnOrder={2}>
            Para about us...
          </AboutUs.Column>
          <AboutUs.Column rowOrder={1}>
            Our accreditations
          </AboutUs.Column>
        </AboutUs.Row>
      </AboutUs.Frame>
    </AboutUs>
  )
}

export default AboutUsIndex