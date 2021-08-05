// Imported dependencies
import React from 'react'

const data = [
  { src: 'https://i.imgur.com/z8wxU66.jpg' },
  { src: 'https://i.imgur.com/z8wxU66.jpg' },
  { src: 'https://i.imgur.com/z8wxU66.jpg' },
  { src: 'https://i.imgur.com/z8wxU66.jpg' },
  { src: 'https://i.imgur.com/z8wxU66.jpg' },
]


// Imported components
import Hero from './Hero'
import { headingVariants, textVariants, buttonVariants, svgVariants } from './HeroAnimations'
// Data to come in from CMS
// const data = "A positive, safe and secure environment for every childA positive, safe and secure environment for every child"
// const firstHighlight = 'positive'
// const secondHighlight = 'safe'
// const thirdHighlight = 'secure environment's

export const HeroIndex = () => {
  return (
    <Hero>
      <Hero.Frame tPad={7}>
        <Hero.Row columns={2} xGap='94px' yGap={11}>

          <Hero.Column columnOrder={2} yGap={3}>
            <Hero.Title heading="hero" {...headingVariants}>
              A <span>positive</span>, <span>safe</span> and <span><span>secure</span> <span>environment</span></span> for every child
            </Hero.Title>
            <Hero.Text {...textVariants}>Wraparound childcare</Hero.Text>
            <Hero.ButtonContainer {...buttonVariants}>
              <Hero.Button model={1} color="dark green">Contact us</Hero.Button>
              <Hero.Button model={2} color="dark blue">Book a visit</Hero.Button>
            </Hero.ButtonContainer>
            <Hero.SVGFootPrints />
          </Hero.Column>

          <Hero.Column rowOrder={1} xItemsAlign="center" custom>
            <Hero.SVG {...svgVariants} />
            <Hero.ImageCarousel data={data} />
          </Hero.Column>
        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex