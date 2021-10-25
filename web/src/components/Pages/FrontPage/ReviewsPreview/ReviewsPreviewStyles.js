// Imported Packages
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
// import Image from 'gatsby-image';

// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Button as ButtonOrigin,
} from '../../../Reusable';
import {
  QuoteMark,
  Crown,
  Car,
  Girl,
  Heart,
  Arrow,
  WaveReviewsPreviewTop,
  WaveReviewsPreviewBottom
} from '../../../../assets/svg';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  position: relative;
  width: 100%;
  
  ${({ custom }) =>
    custom && css`
      height: calc(36em + -37vw);
      @media (min-width: 768px) {
        height: 380px;
      } 
    `
  }
`
export const Column = styled(ColumnOrigin)`
  grid-template-columns: 1fr;
  row-gap: var(--s6);
  ${({ custom }) => custom && css`
    @media(min-width: 980px) {
      grid-row-gap: var(--s6);
    }
  `}
`
export const Title = styled(TextHeading)`
  @media(max-width: 639px) {
    > span:after {
      width: 1.8ch;
      left: 50% !important;
      transform: translateX(-50%);
    }
  }
  @media(max-width: 572px) {
    > span:after {
      width: 6.2ch;
    }
  }
  @media(max-width: 363px) {
    > span:after {
      width: 9ch;
    }
  }
`
export const TextContainer = styled.div`
  font-weight: var(--paraFontWeight);
  color: rgb(var(--paraFontColor));
  max-width: 730px;
  line-height: 1.45;
  text-align: center;
`
export const Text = styled(TextParagraph)`
  max-width: 730px;
  line-height: 1.45;
`
export const QuoteMarkSVG = styled(QuoteMark)``

export const Line = styled.div`
  width: 50px;
  height: 3px;
  background: rgb(var(--colorLight));
`

export const ButtonContainer = styled(motion.div)`
  display: flex;
  border-radius: 12px;
  box-shadow: var(--level3);
  justify-self: center;
  align-self: flex-end;
`
export const Button = styled(ButtonOrigin)``
export const ArrowSVG = styled(Arrow)`
  ${({ direction }) => direction === 'left' && css`transform: rotate(-180deg)`} 
`
export const SVGDividerTop = styled(WaveReviewsPreviewTop)``
export const SVGDividerBottom = styled(WaveReviewsPreviewBottom)``
export const CrownSVG = styled(Crown)``
export const CarSVG = styled(Car)``
export const GirlSVG = styled(Girl)``
export const HeartSVG = styled(Heart)``
export const SliderAnimation = styled(motion.div)`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: start;
  cursor: grab;
  :active {
    cursor: grabbing;
  }
`





