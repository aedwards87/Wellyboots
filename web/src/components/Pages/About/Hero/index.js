// Imported dependencies
import React from 'react'
// Imported components
import Hero from './Hero'


// The component
export const HeroIndex = ({ desc }) => {
  return (
    <Hero>
      <Hero.Frame yGap={1} yPad={6} tPad={8}>

        <Hero.Row>
          <Hero.Column xAlign="center" xItemsAlign="center">
            <Hero.Title heading="hero" lineColor="About us">About us</Hero.Title>
          </Hero.Column>
        </Hero.Row>

        <Hero.Row xGap='94px' yGap={6}>
          <Hero.Column yGap={3} xAlign="center" xItemsAlign="center">
            <Hero.SunSVG color="yellow" />
            <Hero.HeartSVG color="dark blue" />
            <Hero.FootPrintsSVG />
            <img src="https://i.imgur.com/pZruOtV.png" />
          </Hero.Column>
          <Hero.Column yGap={3} xAlign="center" xItemsAlign="center">
            <Hero.PortableText content={desc} />
            <Hero.FootPrintsSVG second />
            <Hero.CrownSVG color="green" />
          </Hero.Column>
        </Hero.Row>

      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex