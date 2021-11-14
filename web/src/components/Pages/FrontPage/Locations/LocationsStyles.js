// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
// Imported Components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  Button as ButtonOrigin,
  LocationCard,
} from '../../../Reusable';
import {
  Arrow,
  WaveLocationTop,
  WaveLocationBottomTwo,
} from '../../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  scroll-margin-top: -4.5vw;
`

export const Frame = styled(FrameOrigin)`
  position: relative;
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  @media (min-width: 420px) {
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  }
`
export const Row = styled(RowOrigin)`
  ${({ custom }) => custom && css`
    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1 / -1;
    }
  `}
`
export const Column = styled(ColumnOrigin)`
  ${({ custom }) => custom && css`
    @media(min-width: 769px) {
      width: calc(100% + 7vw);
    }
  `}
`
export const Slider = styled(Carousel)`
  position: relative;
  cursor: grab;
  :active { cursor: grabbing; }
  @media (max-width: 769px) {
    ul { padding-left: 7vw; }
  }
  @media (min-width: 769px) {
    left: -3.5vw;
    padding-left: 3.5vw;
    ul { padding-right: 7vw; }
  }
  .image-item {
    padding: 40px 7vw 20px 0;
  }
`
export const Card = styled(LocationCard)``
export const Title = styled(TextHeading)``
export const Text = styled.p``
export const SVGDividerTop = styled(WaveLocationTop)``
export const SVGDividerBottom = styled(WaveLocationBottomTwo)``
export const ButtonOuterContainer = styled(motion.div)`
  width: 100%;
  margin-top: 60px;
  margin-bottom: -40px;
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    width: calc(100% - 7vw);
  }
`
export const ButtonInnerContainer = styled(motion.div)`
  display: flex;
  border-radius: 12px;
  box-shadow: var(--level3);
  @media (min-width: 980px) {
    margin-left: 285px;
  }
`
export const Button = styled(ButtonOrigin)``
export const ArrowSVG = styled(Arrow)`
  ${({ direction }) => direction === 'left' && css`transform: rotate(-180deg)`} 
`