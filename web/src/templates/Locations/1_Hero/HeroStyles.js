// Imported dependencies
import styled, { css } from 'styled-components/macro';
import PortableTextOrigin from "react-portable-text"
import GatsbyImage from 'gatsby-image';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Button as ButtonOrigin,
} from '../../../components/Reusable';
import { FootPrints } from '../../../assets/svg';
import { motion } from 'framer-motion';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)`
  overflow: hidden;
`
export const Row = styled(RowOrigin)`
  grid-template-rows: auto 1fr;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`
export const Column = styled(ColumnOrigin)`
  ${({ column }) =>
    column === 1 ? css`
        grid-column: 1;
        @media (min-width: 980px) {
          grid-row: 1;
        }
    ` : column === 2 ? css`
        align-content: center;
        grid-column: 2;
        @media (min-width: 768px) {

        }
        @media (min-width: 980px) {
          grid-column: 2 / span 2;
        }
    ` : column === 3 ? css`
        grid-column: span 2;
        @media (min-width: 768px) {
          grid-column: span 1;
          grid-column: 2;
        }
        @media (min-width: 980px) {
          grid-row: 2;
          grid-column: 2 / span 2;
        }
    ` : column === 4 ? css`
        ${'' /* border: 2px dashed gold; */}
        grid-column: span 2;
        min-height: 100px;
        @media (min-width: 768px) {

        }
        @media (min-width: 980px) {
          grid-row: 1 / span 2;
          grid-column: 4 / span 2;
        }
    ` : column === 5 ? css`
        grid-row: 2;
        grid-column: 1;
        display: none;
        @media (min-width: 768px) {
          display: grid;
        }
        @media (min-width: 980px) {
          grid-row: 2;
          grid-column: 1;
        }
    ` : null

  }
`
export const Title = styled(TextHeading)`
  ${({ small }) => small && css`
    font-size: 1.5rem;
    text-align: left;
  `}
`
export const Text = styled(TextParagraph)``
export const PortableText = styled(PortableTextOrigin)``
export const Link = styled(LinkOrigin)`
  ${({ $custom }) => $custom && css`
    font-size: 1.4rem;
  `}
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(5deg);
  top: -30px;
  left: 45px;
`
export const ImageCarousel = styled(motion.div)`
  position: relative;
`
export const Image = styled(GatsbyImage)`
  width: 425px;
  height: 285px;
  border: var(--s2) solid rgb(var(--colorLight));
  box-shadow: var(--level6);
  z-index: 2;
  position: relative;
  ${({ carouselImage }) =>
    carouselImage === 1 ? css`
      top: -30px;
      transform: rotate(-4deg);
      left: 60px;
    ` :
      carouselImage === 2 ? css`
        top: -30px;
        transform: rotate(4deg);
        left: 40px;
        display: none;
        @media (min-width: 980px) {
          display: block;
        }
      ` : null
  }
`
export const ButtonContainer = styled(motion.div)`
`
export const Button = styled(ButtonOrigin)``
export const FootPrintsSVG = styled(FootPrints)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  bottom: -20%;
`
export const WellybootSVG = styled.div``