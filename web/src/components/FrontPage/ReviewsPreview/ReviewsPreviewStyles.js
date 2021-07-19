// Imported Packages
import styled, { css } from 'styled-components';
// import Image from 'gatsby-image';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import TextParagraph from '../../Reusable/TextParagraph';
import ButtonMod from '../../Reusable/Button';
import { QuoteMark, FaceDrawing, HeartDrawing, CrownDrawing, CarDrawing, Arrow } from '../../../assets/svg/index';
import WaveReviewsPreviewTop from '../../../assets/svg/Waves/WaveReviewsPreviewTop';
import WaveReviewsPreviewBottom from '../../../assets/svg/Waves/WaveReviewsPreviewBottom';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)``
export const Row = styled(RowMod)``
export const Column = styled(ColumnMod)``
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





