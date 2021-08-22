// Imported Packages
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import { default as GatsbyImage } from 'gatsby-image'
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../Reusable';
import {
  Blob,
  FootPrints
} from '../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameOrigin)`
  overflow: hidden;
  padding-bottom: 28vw;
  @media(max-width: 285px) {
  }
  @media(min-width: 980px) {
    overflow: unset;
    && {
      padding-bottom: calc(var(--s15) - 4vw);
    }
  }
`
export const Row = styled(RowOrigin)`
  grid-row-gap: calc(var(--s4) + 18vw);
`

export const Column = styled(ColumnOrigin)`
  position: relative;
  grid-row-gap: var(--s5);
  align-items: center;
  @media(max-width: 979px) {
    ${({ custom }) => custom && css`
      height: 45vw;
      min-height: 160px;
    `}
  }
`

export const ImageCarousel = styled(motion.div)`
  position: absolute;
  width: 100%;
  transform: rotate(-3deg);
  border: var(--s2) solid rgb(var(--colorLight));
  box-shadow: var(--level5);
  height: 120%;
  z-index: 2;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media(min-width: 395px) {
    width: 95%;
    height: 120%;
  }
  @media(min-width: 420px) {
    margin-left: calc(0px - var(--s1));
    margin-top: 0;
    border: min(max(8px, 2vw), 14px) solid rgb(var(--colorLight));
  }
  @media(min-width: 980px) {
    width: 550px;
    height: 360px;
    position: absolute;
    transform: translateY(-50%) rotate(-3deg);
    right: var(--s4);
    margin-top: 0;
  }
`
export const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`
export const SVG = styled(Blob)`
  position: absolute;
  /* align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  transform: translateX(0); */
  width: 126%;
  height: 226%;
  right: 0;
  svg {
    width: 119%;
    height: 113%;
  }
  @media (min-width: 980px) {
    width: 720px;
    height: 832px;
    right: 0;
    svg {
      width: 112%;
    }
  }
`

export const Title = styled(TextHeading)`
  text-align: center;
  @media(min-width: 980px) {
    text-align: left;
  }
  span {
    > span:nth-child(1):after {
      background: rgba(var(--colorPink), .8);
    }
    > span:nth-child(2):after {
      background: rgba(var(--colorBlue), .8);
    }
    > span:nth-child(3):after {
      background: rgba(var(--colorYellow));
      width: 90%;
    }
    > span:nth-child(3) {
      span:after {
        background: rgba(var(--colorYellow));
      }
    }
  }
`

export const Text = styled(TextParagraph)`
  text-align: center;
  @media(min-width: 980px) {
    text-align: left;
  }
`

export const LinkContainer = styled(motion.div)`
  display: grid;
  gap: 20px;
  margin-top: min(max(var(--s1), 3vw), var(--s3));
  @media(max-width: 395px) {
    > button {
      padding-top: 14px;
      padding-bottom: 14px;
    }
  }
  @media(min-width: 395px) {
    display: flex;
    justify-content: center;
  }
  @media(min-width: 980px) {
    justify-content: start;
  }
`
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)``
