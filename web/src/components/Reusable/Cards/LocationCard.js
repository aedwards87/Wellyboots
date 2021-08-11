// Imported dependencies
import React, { useState } from 'react'
// Imported components
import { AnimatePresence } from 'framer-motion'
import {
  Container,
  Hero,
  SVGContainer,
  Footer,
  ImageContainer,
  Heading,
  Text
} from './LocationCardStyles'
// Imported hooks
import { useCompanyLocationsQuery, useNavToggle } from '../../../hooks';
// Imported animations
import {
  framerMotionAPI,
  LocationCardVariants,
  SpanVariants
} from './LocationCardAnimations';


const LocationCard = ({ className, children, style, show = false, name, ...props }) => {
  const data = useCompanyLocationsQuery()
  const location = data.locations.nodes.filter(l => l.name.includes(name))
  const colors = location[0].subBrandColors.map(color => color.title)
  const shortName = name.split(' ').slice(0, 2).join(' ');
  const [isHovered, toggle, bind] = useNavToggle()
  /* draggable="false" stops the individual link/img being dragged, thus allowing the carousel to drag as a whole properly. This however disables any drag handlers. If a card is selected during the drag, it's click event is triggered, to prevent this, I've used mousedown and mousemove event handlers to determine whether a drag or click is being proformed, using useState to store true or false, if isSwiping="true" we prevent the click from trigggering by using e.PreventDetault() within the click handler. */
  const [isSwiping, setSwiping] = useState(false);

  return (
    <Container
      className={className}
      to={"/"}
      style={style, {}}
      draggable="false"
      onClick={(e) => isSwiping && e.preventDefault()}
      onMouseDown={() => setSwiping(false)}
      onMouseMove={() => setSwiping(true)}
      onTouchStart={() => setSwiping(false)}
      onTouchMove={() => setSwiping(true)}
      {...props}
      {...bind}
    >
      <div>
        <Hero colors={colors}>
          <SVGContainer dangerouslySetInnerHTML={{ __html: location[0].subBrandLogo }} />
          <AnimatePresence>
            {isHovered &&
              <ImageContainer
                variants={LocationCardVariants}
                {...framerMotionAPI}
              >
                <img
                  src="https://picsum.photos/id/237/200/300"
                  alt="Building of School"
                  draggable="false"
                />
                <Text variants={SpanVariants} {...framerMotionAPI}>
                  Pre School
                </Text>
              </ImageContainer>
            }
          </AnimatePresence>
        </Hero>
        <Footer>
          <Heading heading="h3" weight="medium">{shortName}</Heading>
        </Footer>
      </div>
    </Container>
  )
}

export default LocationCard