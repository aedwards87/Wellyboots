// Imported dependencies
import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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
  framerMotionAPI,
  LocationCardVariants,
  SpanVariants
} from './LocationCardAnimations';
// Imported hooks
import { useHoverToggle } from '../../../hooks';
// Imported helpers
import { camalise } from '../../../utils/helpers';
import { useIsSwiping } from '../../../hooks/useIsSwiping';


const LocationCard = ({ className, children, to = '/', data, ...props }) => {
  const [isHovered, toggle, bindToggle] = useHoverToggle()
  const [isSwiping, bindSwiping] = useIsSwiping()
  const isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
  /* draggable="false" stops the individual link/img being dragged, thus allowing the carousel to drag as a whole properly. This however disables any drag handlers. If a card is selected during the drag, it's click event is triggered, to prevent this, I've used mousedown and mousemove event handlers to determine whether a drag or click is being proformed, using useState to store true or false, if isSwiping="true" we prevent the click from trigggering by using e.PreventDetault() within the click handler. */

  return (
    <Container
      className={className}
      to={`/locations/${data.slug.current}` || `/locations/${camalise(to)}`}
      onDragStart={(e) => e.preventDefault()}
      onClick={(e) => isSwiping && e.preventDefault()}
      {...bindSwiping}
      {...bindToggle}
      {...props}
    >
      <div>
        <Hero colors={data.subBrandColors}>
          <SVGContainer isTouch={isTouch} dangerouslySetInnerHTML={{ __html: data.subBrandLogo }} />
          <AnimatePresence>
            {(isHovered || isTouch) &&
              <ImageContainer
                variants={LocationCardVariants}
                {...framerMotionAPI}
              >
                <Image
                  fluid={data.mainImage.image.asset.fluid}
                  alt={data.mainImage.alt}
                  onDragStart={(e) => e.preventDefault()}
                />
                <TextContainer variants={SpanVariants} {...framerMotionAPI}>
                  {data.type.map(type =>
                    <Text
                      key={type}
                      colors={data.subBrandColors}
                      variants={SpanVariants}
                      {...framerMotionAPI}
                    >
                      {type}
                    </Text>
                  )}
                </TextContainer>
              </ImageContainer>
            }
          </AnimatePresence>
        </Hero>
        <Footer>
          <Title heading="h3" weight="medium">{data.shortName || data.name}</Title>
        </Footer>
      </div>
    </Container>
  )
}

export default LocationCard