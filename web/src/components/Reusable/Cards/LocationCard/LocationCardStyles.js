// Imported dependencies
import styled, { css } from "styled-components/macro"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
// Imported components
import { TextHeading } from "../../index"
// Imported helpers
import { capitilise } from "../../../../utils/helpers"

// TextConainer has to before ImageContainer, so it can be reference within ImageContainer.... but why?? Why not just put the css into TextContainer??
export const TextContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
  bottom: -7%;
  display: flex;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--s3);
  padding-left: var(--s2);
  padding-right: var(--s2);
`

export const ImageContainer = styled(motion.div)`
  display: flex;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  transition: opacity .6s ease;
  justify-items: center;
  > .gatsby-image-wrapper {
    opacity: 0;
    transition: opacity .6s ease, transform .6s ease;
    transform: translateY(-30%);
    z-index: -1;
  }
  > ${TextContainer} {
    opacity: 0;
    transition: opacity .5s ease .3s, transform .6s ease .3s;
    transform: translateY(40%);
  }
  @media (hover: none) {
    opacity: 1;
    > .gatsby-image-wrapper {
      opacity: 1;
      transform: translateY(0);
      z-index: -1;
    }
    > ${TextContainer} {
      opacity: 1;
      transform: translateY(0);
      z-index: 1;
    }
  }
`

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
  z-index: 0;
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
  @media (hover) {
    :hover ${ImageContainer} {
      opacity: 1;
      > .gatsby-image-wrapper {
        opacity: 1;
        transform: translateY(0);
      }
      > ${TextContainer} {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  

`


export const SVGContainer = styled(GatsbyImage)`
  width: 42%;
  display: flex;
  justify-content: center;
  z-index: -2;
  @media (hover: none) {
    width: 14%;
    position: absolute;
    z-index: 9;
    top: 3px;
    left: var(--s3);
    padding-top: 6%;
    padding-bottom: 8%;
    padding-right: 3%;
    border-top-left-radius: 10px;
    /* filter: 
      drop-shadow(0 0 6px rgba(var(--colorLight), .1))
      drop-shadow(0 0 8px rgba(var(--colorLight), .2))
      drop-shadow(0 0 10px rgba(var(--colorLight), .2))
      drop-shadow(0 0 26px rgba(var(--colorLight), .3)) */
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
    z-index: -3;
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
  ${SVGContainer} {
    @media (hover: none) {
      filter: 
        drop-shadow(8px 8px 6px rgba(0, 85, 230, .16))
        drop-shadow(8px 8px 8px rgba(0, 85, 230, .12))
        drop-shadow(8px 8px 12px rgba(0, 85, 230, .08))
        drop-shadow(8px 8px 20px rgba(0, 85, 230, .05));
    }
  }
`
export const Footer = styled.div``

export const Image = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
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

export const Text = styled(motion.span)`
  padding: 6px 12px;
  z-index: 9999;
  color: ${({ colors }) =>
    !colors[1].title.includes('Dark') || colors[1].title.includes('green') 
      ? `rgb(var(--colorDark))` : `rgb(var(--colorLight))`
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

