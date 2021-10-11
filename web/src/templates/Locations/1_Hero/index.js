// Imported packages
import React from 'react'
// Imported components
import Hero from './Hero'

// Component
const HeroIndex = ({ data: { location: {
  name,
  shortName,
  _rawIntroduction,
  subBrandLogo,
  type,
  mainImage,
  subBrandColors
}, imageGallery
} }) => {
  return (
    <Hero>
      <Hero.Frame>
        <Hero.Row columns={5} xGap={8} yGap={8}>

          <Hero.Column column={1}>
            <Hero.WellybootSVG subBrandLogo={subBrandLogo} />
          </Hero.Column>

          <Hero.Column column={2}>
            <Hero.Title heading="hero" lineColor={subBrandColors[0].title} >
              {shortName || name}
            </Hero.Title>
          </Hero.Column>

          <Hero.Column column={3}>
            <Hero.PortableText content={_rawIntroduction} lineColor={subBrandColors[1].title} />
          </Hero.Column>

          <Hero.Column column={4} yAlign="start">
            <Hero.ImageContainer>
              <Hero.Image fluid={mainImage.image.asset.fluid} alt={mainImage.alt} />
            </Hero.ImageContainer>
            <Hero.ImageCarousel images={imageGallery} />
          </Hero.Column>

          <Hero.Column column={5} yAlign="start" gap={3}>
            <Hero.Title heading="h3" color="gray" small>Jump to</Hero.Title>
            <Hero.Link to="#Staff" lineColor={subBrandColors[1].title} $custom>Staff</Hero.Link>
            <Hero.Link to="#Daily Routine" lineColor={subBrandColors[0].title} $custom>Daily Routine</Hero.Link>
            <Hero.Link to={`#${shortName || name} details`} lineColor={subBrandColors[1].title} $custom>{shortName || name} details</Hero.Link>
            <Hero.FootPrintsSVG />
          </Hero.Column>

        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex