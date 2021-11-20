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
  subBrandSVG,
  type,
  mainImage,
  subBrandColors
}, imageGallery
} }) => {
  console.log({subBrandSVG})
  return (
    <Hero>
      <Hero.Frame>
        <Hero.Row columns={5} xGap={8} yGap={8}>

          <Hero.Column column={1}>
            <Hero.WellybootSVG 
              alt={subBrandSVG.alt} 
              image={subBrandSVG.asset.gatsbyImageData} 
              objectFit="contain"
              />
          </Hero.Column>

          <Hero.Column column={2}>
            <Hero.Title heading='h2' heading="hero" lineColor={subBrandColors[0].title} >
              {shortName || name}
            </Hero.Title>
          </Hero.Column>

          <Hero.Column column={3}>
            <Hero.PortableText content={_rawIntroduction} lineColor={subBrandColors[1].title} />
          </Hero.Column>

          <Hero.Column column={4} yAlign="start">
            <Hero.ImageContainer>
              <Hero.Image 
                image={mainImage.image.asset.gatsbyImageData}
                alt={mainImage.alt}
              />
            </Hero.ImageContainer>
            <Hero.ImageCarousel images={imageGallery} />
          </Hero.Column>

          <Hero.Column column={5} yAlign="start" gap={3}>
            <Hero.Title 
              heading="h2" 
              color="gray" 
              small
            >
              Jump to
            </Hero.Title>
            <Hero.Nav aria-label="Secondary navigation - Jump to a section on the page">
              <Hero.Link 
                to="#Staff" 
                lineColor={subBrandColors[1].title}
                $custom
              >
                Staff
              </Hero.Link>
              <Hero.Link 
                to="#Daily Routine" 
                lineColor={subBrandColors[0].title} 
                $custom
              >
                Daily Routine
              </Hero.Link>
              <Hero.Link 
                to={`#${shortName || name} details`} 
                lineColor={subBrandColors[1].title} 
                $custom
              >
                {shortName || name} details
              </Hero.Link>
              <Hero.FootPrintsSVG />
            </Hero.Nav>
          </Hero.Column>

        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex