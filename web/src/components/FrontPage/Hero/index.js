// Imported packages
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

// Imported components
import Hero from './Hero'
import { framerMotionAPI, HeroHeadingVariants } from './HeroAnimations'
// Data to come in from CMS
// const data = "A positive, safe and secure environment for every childA positive, safe and secure environment for every child"
// const firstHighlight = 'positive'
// const secondHighlight = 'safe'
// const thirdHighlight = 'secure environment's

export const HeroIndex = () => {
  return (
    <Hero>
      <Hero.Frame tPad={7} bPad={12}>
        <Hero.Row columns={2} xGap={9} yGap={8}>

          <Hero.Column columnOrder={2} yGap={5}>
            <Hero.Title heading="hero">
              A <span>positive</span>, <span>safe</span> and <span><span>secure</span> <span>environment</span></span> for every child
            </Hero.Title>
            <Hero.Text>Wraparound childcare</Hero.Text>
            <Hero.ButtonContainer>
              <Hero.Button model={1} color="dark green">Contact us</Hero.Button>
              <Hero.Button model={2} color="dark blue">Book a visit</Hero.Button>
            </Hero.ButtonContainer>
            <Hero.SVGFootPrints />
          </Hero.Column>

          <Hero.Column rowOrder={1} xItemsAlign="center">
            <Hero.SVG />
            <Hero.ImageCarousel src="https://i.imgur.com/z8wxU66.jpg" />
          </Hero.Column>
        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex