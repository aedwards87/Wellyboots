// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';
// Imported components
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'gatsby';
// Imported hooks
import { useCompanyLocationsQuery, useNavToggle } from '../../../hooks';
// Imported helpers
import { capitilise } from '../../../utils/helpers';
// Imported animations
import {
  framerMotionAPI,
  LocationCardVariants,
  SpanVariants
} from './Animations';


const LocationCard = ({ className, children, style, show = false, name, ...props }) => {
  const data = useCompanyLocationsQuery()
  const location = data.locations.nodes.filter(l => l.name.includes(name))
  const colors = location[0].subBrandColors.map(color => color.title)
  const newName = name.split(' ').slice(0, 2).join(' ');
  const [isHovered, toggle, bind] = useNavToggle()
  return (
    <Container
      className={className}
      to="/"
      style={style, {}}
      {...props}
      {...bind}
    >
      <Hero colors={colors}>
        <SVGContainer dangerouslySetInnerHTML={{ __html: location[0].subBrandLogo }} />
        <AnimatePresence>
          {isHovered &&
            <ImageContainer
              variants={LocationCardVariants}
              {...framerMotionAPI}
            >
              <img src="https://picsum.photos/id/237/200/300" alt="Building of School" />
              <Type variants={SpanVariants} {...framerMotionAPI}>Pre School</Type>
            </ImageContainer>
          }
        </AnimatePresence>
      </Hero>
      <Footer>
        <span>{newName}</span>
      </Footer>
    </Container>
  )
}

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* padding-top: 50px; */
  :before, :after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    background: ${({ colors }) => `rgb(var(--color${capitilise(colors[0])}))`};
  }
  :before {
    top: 0;
    left: 0;
    height: 212px;
    height: 75%;
  };
  :after {
    top: 212px;
    top: 75%;
    height: var(--s2);
    filter: brightness(70%);
  }
`
const Footer = styled.div`
  background: var(--colorLight);
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: var(--s3);
  line-height: 1.2;
`
const Container = styled(Link)`
  /* width: calc(30vw * 16 / 6);
  height: calc(30vw * 16 / 5.3);
  max-width: 310px;
  max-height: 365px; */
  width: 100%;
  max-height: 365px;
  max-width: 310px;
  height: calc(310px + 10vw);
  position: relative;
  display: grid;
  grid-template-rows: 75% 25%;
  margin: 0 auto;
  overflow: hidden;
  background: rgb(var(--colorLight));
  border-radius: 10px;
  text-decoration: none;
  box-shadow: var(--level3);
  transition: all .3s ease;
  z-index: 3;
  /* transform: scale(0.9); */
  @media (min-width: 420px) {
    /* width: min(max(26.6vw,26vw),310px);
    height: min(max(31.6vw,31vw),365px); */
    width: calc(16vw * 16 / 6);
    height: calc(16vw * 16 / 5.3);
  }
  @media (min-width: 768px) {
    /* width: min(max(26.6vw,26vw),310px);
    height: min(max(31.6vw,31vw),365px); */
    width: calc(10vw * 16 / 6);
    height: calc(10.48vw * 16 / 5.3);
  }
  :hover {
    transform: translateY(-5%) scale(1.02);
    box-shadow: var(--level5);
  }
  span {
    font-size: var(--fontSizeLarge);
    font-weight: var(--fontWeightMedium);
    @media(min-width: 420px) {
      font-size: min(max(1.5rem, 3.2vw), var(--fontSizeLarge));
    }
    @media(min-width: 768px) {
      font-size: min(max(1.8rem, 2vw), var(--fontSizeLarge));
    }
  }
`
const Type = styled(motion.span)``

const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  span {
    position: absolute;
    bottom: -16.5px;
    left: 50%;
    transform: translateX(-50%);
    padding: 6px 12px;
    background-color: rgb(var(--colorYellow));
    font-size: 1.3rem;
    border-radius: 5px;
    box-shadow: var(--level2);
  }
`

const SVGContainer = styled.div`
  svg {
    width: 90%;
    height: 100%;
    max-height: 215px;
    @media(min-width: 420px) {
      width: 18vw;
    }
    @media(min-width: 768px) {
      width: 11.9vw;
    }
  }
`



export default LocationCard
