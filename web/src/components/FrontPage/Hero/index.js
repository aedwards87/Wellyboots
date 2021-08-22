// Imported dependencies
import React from 'react'
// Imported components
import Hero from './Hero'
// Imported animations
import {
  headingVariants,
  textVariants,
  buttonVariants,
  blobVariants
} from './HeroAnimations'
// Imported hooks
import { useHeroQuery } from '../../../hooks'

// The component
//
export const HeroIndex = () => {
  const { hero: { nodes } } = useHeroQuery()
  const hero = nodes[0]
  return (
    <Hero>
      <Hero.Frame tPad={7}>
        <Hero.Row columns={2} xGap='94px'>

          <Hero.Column columnOrder={2} yGap={3}>
            <Hero.Title heading="hero" {...headingVariants}>
              A <span>positive</span>, <span>safe</span> and <span><span>secure</span> <span>environment</span></span> for every child
            </Hero.Title>
            <Hero.Text {...textVariants}>{hero.subHeading}</Hero.Text>
            <Hero.LinkContainer {...buttonVariants}>
              <Hero.Link
                model={1}
                to={hero.primaryCTA}
                color="dark green"
              >
                {hero.primaryCTA}
              </Hero.Link>
              <Hero.Link
                model={2}
                to={hero.secondaryCTA}
                color="dark blue"
              >
                {hero.secondaryCTA}
              </Hero.Link>
            </Hero.LinkContainer>
            <Hero.FootPrintsSVG />
          </Hero.Column>

          <Hero.Column
            rowOrder={1}
            xItemsAlign="center"
            xAlign="center"
            yItemsAlign="center"
            yAlign="center"
            custom
          >
            <Hero.SVG {...blobVariants} />
            <Hero.ImageCarousel images={hero.imageGallery} />
          </Hero.Column>

        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex