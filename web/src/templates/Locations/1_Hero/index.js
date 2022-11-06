// Imported packages
import React from 'react';
// Imported components
import Hero from './Hero';
// Imported utilities
import { toLowerCaseAndHypen } from '../../../utils/helpers';


// Data to be used and sent to the sidenav component
const location = (name) => [
  {
    title: "Staff",
    slug: {
      current: "#staff"
    },
  },
  {
    title: "Routine",
    slug: {
      current: "#routine"
    },
  },
  {
    title: `${name} details`,
    slug: {
      current: `#${toLowerCaseAndHypen(name)}-details`
    },
  },
]


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
  
  return (
    <Hero>
      <Hero.Frame tPad={10}>
        <Hero.Row 
          columns={6} 
          xGap={8} 
          yGap={8}
        >
          <Hero.Column column={1}>
            <Hero.WellybootSVG 
              alt={subBrandSVG.alt} 
              image={subBrandSVG.asset.gatsbyImageData} 
              objectFit="contain"
            />
          </Hero.Column>

          <Hero.Column column={2}>
            <Hero.Title 
              // heading='h2' 
              heading="hero" 
              lineColor={subBrandColors[0].title} 
            >
              {shortName || name}
            </Hero.Title>
          </Hero.Column>

          <Hero.Column column={3}>
            <Hero.PortableText 
              content={_rawIntroduction} 
              lineColor={subBrandColors[1].title}
            />
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

          <Hero.Column 
            column={5} 
            yAlign="start" 
            gap={3}
          >
            <Hero.SideNav 
              name="Contents"
              page={`locations/${toLowerCaseAndHypen(name)}`}
              data={location(shortName || name)}
              lineColor={subBrandColors[0].title}
            />
            <Hero.FootPrintsSVG />
          </Hero.Column>
        </Hero.Row>
      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex