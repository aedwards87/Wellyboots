// Imported Packages
import styled, { css } from 'styled-components/macro';
import Image from 'gatsby-image';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import ButtonMod from '../../Reusable/Button';
import { Blob } from '../../../assets/svg/index';
import FootPrints from '../../../assets/svg/FootPrints'
import { motion } from 'framer-motion';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)`
  overflow: hidden;
  padding-bottom: 38vw;
  @media(max-width: 285px) {
    padding-bottom: 106px;
  }
  @media(min-width: 980px) {
    overflow: unset;
    && {
      padding-bottom: var(--s12);
      padding-bottom: calc(var(--s16) - 4vw);
    }
  }
  /* @media(min-width: 1287px) {
    && {
      padding-bottom: calc(var(--s15) - 1.5vw);
    }
  } */
`
export const Row = styled(RowMod)`
  @media(min-width: 375px) {
    grid-row-gap: 17vw;
  }
`

export const Column = styled(ColumnMod)`
  position: relative;
`

// export const ImageCarousel = styled(Image)``
export const ImageCarousel = styled.div`
  width: 102%;
  transform: rotate(-3deg);
  border: var(--s2) solid white;
  box-shadow: var(--level5);
  height: 120%;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media(min-width: 375px) {
    width: 95%;
  }
  @media(min-width: 420px) {
    margin-left: calc(0px - var(--s1));
    margin-top: 0;
    border: min(max(8px, 2vw), 14px) solid white;
  }
  @media(min-width: 980px) {
    width: 560px;
    height: 370px;
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
  width: 120vw;
  top: 50%;
  transform: translateY(-48.5%);
  margin-top: 4vw;
  min-width: 384px;
  @media(min-width: 375px) {
    width: 110vw;
    margin-top: 4vw;
  }
  @media(min-width: 596px) {
    width: 110vw;
    margin-top: 6vw;
  }
  @media(min-width: 980px) {
    margin-top: 10px;
    display: inline;
    /* width: calc(560px + 25%); */
    width: 730px;
    /* right: -5%; */
    right: -42px;
    transform: translateY(-48.5%) rotate(-3deg);
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

export const Text = styled.p`
  text-align: center;
  @media(min-width: 980px) {
    text-align: left;
  }
`

export const ButtonContainer = styled.div`
  display: grid;
  gap: 20px;
  margin-top: min(max(var(--s1), 3vw), var(--s3));
  @media(max-width: 375px) {
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
