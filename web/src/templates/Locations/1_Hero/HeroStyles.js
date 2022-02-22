// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableTextOrigin from "react-portable-text"
// Imported components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Button as ButtonOrigin,
  SideNav as SideNavOrigin,
} from '../../../components/Reusable';
import { FootPrints } from '../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)`
  overflow: hidden;
`
export const Row = styled(RowOrigin)`
  grid-template-rows: auto 1fr;
  /* grid-column-gap: min(max(var(--s4), 9vw), var(--s8)); */
  /* grid-column-gap: min(max(var(--s4),5vw),var(--s10)); */
  grid-column-gap: min(max(var(--s4), 5vw), var(--s10));
  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`
export const Column = styled(ColumnOrigin)`
  ${({ column }) =>
    column === 1 ? css`
        grid-column: 1;
        /* width: 21.8vw; */
        width: clamp(60px, 18vw, 130px);
        svg {
          width: 100%;
          height: 100%;
        }
        @media (min-width: 768px) {
          svg {
            width: unset;
            height: unset;
          }
        }
        @media (min-width: 980px) {
          width: var(--s21);
          grid-row: 1;
        }
    ` : column === 2 ? css`
        align-content: center;
        grid-column: 2;
        @media (min-width: 768px) {

        }
        @media (min-width: 980px) {
          /* grid-column: 2 / span 2; */
          grid-column: 2 / span 3;
        }
    ` : column === 3 ? css`
        grid-column: span 2;
        @media (min-width: 768px) {
          grid-column: span 1;
          grid-column: 2;
        }
        @media (min-width: 980px) {
          grid-row: 2;
          /* grid-column: 2 / span 2; */
          grid-column: 2 / span 3;
          padding-bottom: var(--s9);
        }
    ` : column === 4 ? css`
        grid-column: span 2;
        min-height: 100px;
        width: 100%;
        justify-content: center;
        margin-top: 10px;
        z-index: 10;
        @media (min-width: 700px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (min-width: 980px) {
          margin-top: 0;
          grid-template-columns: 1fr;
          grid-row: 1 / span 2;
          /* grid-column: 4 / span 2; */
          grid-column: 5 / span 2;
          justify-content: start;
        }
    ` : column === 5 ? css`
        @media (min-width: 768px) {
          display: grid;
          grid-row: 2;
          grid-column: 1;
        }
    ` : null

  }
`
export const Title = styled(TextHeading)`
  @media (max-width: 420px) {
    margin: 0;
  }
  ${({ small }) => small && css`
    font-size: 1.5rem;
    text-align: left;
  `}
`
export const Text = styled(TextParagraph)``
export const Nav = styled.nav`
  display: grid;
  gap: var(--s3);
`
export const PortableText = styled(PortableTextOrigin)` z-index: 10;`
export const Link = styled(LinkOrigin)`
  ${({ $custom }) => $custom && css`
    font-size: 1.4rem;
  `}
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: rotate(-6deg);
  
  @media (min-width: 768px) {
    transform: rotate(-4deg);
    left: 10px;
  }
  @media (min-width: 980px) {
    top: 0;
    left: 35px;
    transform: rotate(5deg);
  }
`
export const ImageCarousel = styled(motion.div)`
  position: relative;
`
export const Image = styled(GatsbyImage)`
  --colorShadow: var(--colorDarkBlue);
  width: 80vw;
  height: 50vw;
  min-width: 275px;
  min-height: 180px;
  border: min(max(8px,2vw),10px) solid rgb(var(--colorLight));
  background: rgb(var(--colorLight));
  box-shadow: var(--level7);
  z-index: 2;
  position: relative;  
  @media (min-width: 700px) {
    width: 425px;
    height: 285px;
  }
  ${({ $carouselImage }) =>
    $carouselImage && css`
      cursor: pointer;
      ${({ $carouselImage }) =>
        $carouselImage === 1 ? css`
          top: -8px;
          left: -8px;
          transform: rotate(4deg);
          @media (min-width: 700px) {
            top: 0;
            transform: rotate(10deg);
          }
          @media (min-width: 980px) {
            left: 50px;
            transform: rotate(-4deg);
          }
        ` :
          $carouselImage === 2 ? css`
            top: 0;
            transform: rotate(4deg);
            left: 30px;
            display: none;
            @media (min-width: 980px) {
              display: block;
            }
          ` : null
      } 
    `
  }

`
export const ButtonContainer = styled(motion.div)``
export const Button = styled(ButtonOrigin)``
export const FootPrintsSVG = styled(FootPrints)`
  display: none;
  @media (min-width: 768px) {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    bottom: -20%;
  }
`
export const WellybootSVG = styled(GatsbyImage)`
  img {
    object-fit: contain;
  }
`
export const SideNav = styled(SideNavOrigin)``