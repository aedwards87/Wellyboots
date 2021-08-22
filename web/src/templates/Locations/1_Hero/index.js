// Imported packages
import React from 'react'
// Imported components
import Hero from './Hero'
import PortableText from "react-portable-text"
import { Link } from '../../../components/Reusable'

// Component
const HeroIndex = ({ name, intro, subBrandLogo, type, mainImage, subBrandColors }) => {
  console.log({ mainImage })
  return (
    <Hero>
      <Hero.Frame>
        <Hero.Row columns={5} xGap={8} yGap={8}>

          <Hero.Column column={1}>
            <Hero.WellybootSVG subBrandLogo={subBrandLogo} />
          </Hero.Column>

          <Hero.Column column={2}>
            <Hero.Title
              heading="hero"
              lineColor={subBrandColors[0].title}
            >
              {name[0] || name[1]}
            </Hero.Title>
          </Hero.Column>

          <Hero.Column column={3}>
            <Hero.PortableText content={intro} lineColor={subBrandColors[1].title} />
          </Hero.Column>

          <Hero.Column column={4}>
            <Hero.ImageContainer>
              <Hero.Image
                fluid={mainImage.image.asset.fluid}
                alt={mainImage.alt}
                aspectRatio={3 / 1}
              />
              {/* <Hero.ImageCarousel carousel={1} />
              <Hero.ImageCarousel carousel={2} /> */}
            </Hero.ImageContainer>
          </Hero.Column>

          <Hero.Column column={5}>
          </Hero.Column>

        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex