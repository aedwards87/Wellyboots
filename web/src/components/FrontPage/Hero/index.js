// Imported packages
import React from 'react'

// Imported components
import Hero from './Hero'

// Data to come in from CMS
// const data = "A positive, safe and secure environment for every childA positive, safe and secure environment for every child"
// const firstHighlight = 'positive'
// const secondHighlight = 'safe'
// const thirdHighlight = 'secure environment's

export const HeroIndex = () => {
  return (
    <Hero>
      <Hero.Frame yPad={11}>
        <Hero.Row columns={2} rXGap="5vw" rYGap={5}>
          <Hero.Column columnOrder={2} cYGap={5}>
            <Hero.Title heading="hero">
              A <span>positive</span>, <span>safe</span> and <span><span>secure</span> <span>environment</span></span> for every child
            </Hero.Title>
            <Hero.Text>Wraparound childcare</Hero.Text>
            <Hero.ButtonContainer>
              <Hero.Button model={1} color="dark green">Contact us</Hero.Button>
              <Hero.Button model={2} color="dark blue">Book a visit</Hero.Button>
            </Hero.ButtonContainer>
          </Hero.Column>
          <Hero.Column rowOrder={1}>
            Hi
            <Hero.ImageCarousel />
          </Hero.Column>
        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex