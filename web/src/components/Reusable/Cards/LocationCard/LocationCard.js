// Imported dependencies
import React from 'react'
// Imported components
import {
  Container,
  Hero,
  SVGContainer,
  Footer,
  ImageContainer,
  Title,
  TextContainer,
  Text,
  Image
} from './LocationCardStyles'
// Imported animations
import {
  LocationCardVariants,
  SpanVariants
} from './LocationCardAnimations';
// Imported hooks
import { useIsSwiping } from '../../../../hooks';
// Imported helpers
import { camalise } from '../../../../utils/helpers';


const LocationCard = ({ className, children, to = '/', data, ...props }) => {
  const [isSwiping, bindSwiping] = useIsSwiping()
  return (
    <Container
      className={className}
      to={`/locations/${data.slug.current}` || `/locations/${camalise(to)}`}
      onDragStart={(e) => e.preventDefault()}
      onClick={(e) => isSwiping && e.preventDefault()}
      {...bindSwiping}
      {...props}
    >
      <div>
        <Hero colors={data.subBrandColors}>
          <SVGContainer 
            alt={data.subBrandSVG.alt} 
            image={data.subBrandSVG.asset.gatsbyImageData}
            objectFit="contain"
           />
            <ImageContainer
              variants={LocationCardVariants}
            >
              <Image
                image={data.mainImage.image.asset.gatsbyImageData}
                alt={data.mainImage.alt}
                onDragStart={(e) => e.preventDefault()}
              />
              <TextContainer variants={SpanVariants}>
                {data.type.map(type =>
                  <Text
                    key={type}
                    colors={data.subBrandColors}
                    variants={SpanVariants}
                  >
                    {type}
                  </Text>
                )}
              </TextContainer>
            </ImageContainer>
        </Hero>
        <Footer>
          <Title heading="h3">{data.shortName || data.name}</Title>
        </Footer>
      </div>
    </Container>
  )
}

export default LocationCard