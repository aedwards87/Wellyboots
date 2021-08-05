// Imported Packages
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import TextParagraph from '../../Reusable/TextParagraph';
import ButtonMod from '../../Reusable/Button';
import { Blob } from '../../../assets/svg/index';
import FootPrints from '../../../assets/svg/FootPrints'

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)`
  overflow: hidden;
  padding-bottom: 26vw;
  @media(max-width: 285px) {
    padding-bottom: 100px;
  }
  @media(min-width: 980px) {
    overflow: unset;
    && {
      padding-bottom: calc(var(--s16) - 4vw);
    }
  }
`
export const Row = styled(RowMod)`
  @media(min-width: 395px) {
    grid-row-gap: calc(var(--s5) + 18vw);
  }
`

export const Column = styled(ColumnMod)`
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
  width: 102%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%) rotate(-3deg);
  /* right: var(--s4); */
  left: 50%;
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
    top: 50%;
    transform: translateY(-50%) rotate(-3deg);
    right: var(--s4);
    margin-top: 0;
  }
`

export const SVG = styled(Blob)`
  position: absolute;
  z-index: 1;
  /* width: 115vw; */
  width: 160%;
  height: 148%;
  height: 158%;
  /* top: 50%; */
  /* transform: translateY(-50%) rotate(-3deg); */
  transform: scale(1.07);
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 384px;
  /* > svg {
    height: 134%;
  } */
  > svg {
    height: 124%;
  }
  @media(min-width: 395px) {
    /* width: 105vw; */
    width: 110vw;
    /* height: 132%; */
    transform: scale(1);
    /* > svg {
      height: 146%;
    } */
  }
  @media(min-width: 596px) {
    /* width: 105vw; */
  }
  @media(min-width: 980px) {
    /* margin-top: 10px; */
    /* display: inline; */
    width: 735px;
    height: 124%;
    right: -22px;
    /* transform: translateY(-48.5%) rotate(-3deg); */
    > svg {
      height: 770px;
      /* width: 735px; */
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

export const ButtonContainer = styled(motion.div)`
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
export const Button = styled(ButtonMod)``
export const SVGFootPrints = styled(FootPrints)`
`
