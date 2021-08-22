// Imported dependencies
import styled from "styled-components/macro"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { default as GatsbyImage } from 'gatsby-image'
// Imported components
import TextHeading from "../TextHeading"
// Imported helpers
import { capitilise } from "../../../utils/helpers"


export const Container = styled(Link)`
  width: 90%;
  height: 0;
  overflow: hidden;
  padding-top: 105%;
  position: relative;
  display: block;
  background: rgb(var(--colorLight));
  border-radius: 10px;
  box-shadow: var(--level4);
  overflow: hidden;
  z-index: -1;
  text-decoration: none;
  font-size: min(max(18px, calc((40vw / 1) * .14)), 14vw);
  font-weight: 500;
  transition: transform .4s ease-out;
  @media (min-width: 501px) {
    width: 100%;
    padding-top: 115%;
    font-size: calc((40vw / 2) * .13);
  }
  @media (min-width: 769px) {
    width: 100%;
    padding-top: 115%;
    font-size: min(max(1rem, calc((40vw / 3) * .15)), var(--fontSizeh4));
  }
  :hover {
    transform: translateY(-5%) scale(1.02);
    box-shadow: var(--level5);
  }
  :active { cursor: grabbing; }
  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-rows: 70% 30%;
    align-items: center;
    justify-items: center;
    margin: 0 auto;
  }
`

export const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :before, :after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    width: 100%;
    background-color: ${({ colors }) => `rgb(var(--color${capitilise(colors[0].title)}))`};
  }
  :before {
    top: 0;
    left: 0;
    height: 80%;
  };
  :after {
    top: 80%;
    height: var(--s2);
    filter: brightness(70%);
  }
`
export const Footer = styled.div``

export const Image = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Title = styled(TextHeading)`
  font-size: min(max(18px, calc((40vw / 1) * .14)), 14vw);
  @media (min-width: 501px) {
    font-size: calc((40vw / 2) * .14);
  }
  @media (min-width: 769px) {
    font-size: min(max(1rem, calc((40vw / 3) * .15)), var(--fontSizeh4));
  }
`

export const ImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
`

export const TextContainer = styled(motion.div)`
  position: absolute;
  bottom: -7%;
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--s3);
  padding-left: var(--s2);
  padding-right: var(--s2);
`

export const Text = styled(motion.span)`
  padding: 6px 12px;
  color: ${({ colors }) =>
    !colors[1].title.includes('Dark') || colors[1].title.includes('green') ? `rgb(var(--colorDark))` : `rgb(var(--colorLight))`
  };
  background-color: ${({ colors }) => `rgb(var(--color${capitilise(colors[1].title)}))`};
  border-radius: 5px;
  box-shadow: var(--level2);
  font-size: min(max(1rem, calc((40vw / 1) * .09)), 1.5rem);
  @media (min-width: 501px) {
    font-size: calc((40vw / 2) * .08);
  }
  @media (min-width: 769px) {
    font-size: min(max(1rem, calc((40vw / 3) * .08)), 1.5rem);
  }
`

export const SVGContainer = styled.div`
  svg {
    width: 42%;
    height: 100%;
  }
  width: 100%;
  display: flex;
  justify-content: center;
`
