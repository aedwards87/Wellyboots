// Imported Packages
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
// import Image from 'gatsby-image';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import TextParagraph from '../../Reusable/TextParagraph';
import ButtonMod from '../../Reusable/Button';
import { QuoteMark, Crown, Car, Girl, Heart, Arrow } from '../../../assets/svg/index';
import WaveReviewsPreviewTop from '../../../assets/svg/Waves/WaveReviewsPreviewTop';
import WaveReviewsPreviewBottom from '../../../assets/svg/Waves/WaveReviewsPreviewBottom';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)``
export const Row = styled(RowMod)`
  position: relative;
  width: 100%;
  
  ${({ custom }) =>
    custom && css`
      height: calc(30em + -38vw);
      max-height: 380px;
      ${'' /* height: calc(25em + -15vw); */}
      @media (min-width: 768px) {
        height: 260px;
      } 
    `
  }
`
export const Column = styled(ColumnMod)`
  grid-template-columns: 1fr;
  ${({ custom }) => custom && css`
    @media(min-width: 980px) {
      grid-row-gap: var(--s6);
    }
  `}
`
export const Title = styled(TextHeading)`
  @media(max-width: 594px) {
    > span:after {
      width: 1.8ch;
      left: 50% !important;
      transform: translateX(-50%);
    }
  }
  @media(max-width: 530px) {
    > span:after {
      width: 6.2ch;
    }
  }
  @media(max-width: 347px) {
    > span:after {
      width: 9ch;
    }
  }
  /* @media(max-width: 283px) {
    > span:after {
      width: 100%;
    }
  } */
`
export const Text = styled(TextParagraph)`
  max-width: 730px;
  font-size: 1.6rem !important;
  line-height: 1.45;
`
export const QuoteMarkSVG = styled(QuoteMark)``
// export const FaceDrawing = styled(FaceDrawing)``
// export const HeartDrawing = styled(HeartDrawing)``
// export const CrownDrawing = styled(CrownDrawing)``
// export const CarDrawing = styled(CarDrawing)``

export const Line = styled.div`
  width: 50px;
  height: 3px;
  background: rgb(var(--colorLight));
`

export const ButtonContainer = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: var(--level3);
`
export const Button = styled(ButtonMod)``
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
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: grab;
`





