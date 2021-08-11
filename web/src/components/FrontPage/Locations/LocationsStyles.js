// Imported dependencies
import styled, { css } from 'styled-components/macro';

// Imported Components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import WaveLocationTop from '../../../assets/svg/Waves/WaveLocationTop';
import WaveLocationBottomTwo from '../../../assets/svg/Waves/WaveLocationBottomTwo';
import LocationCard from '../../Reusable/Cards/LocationCard';
import ButtonMod from '../../Reusable/Button';
import { Arrow } from '../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)`
  position: relative;
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  @media (min-width: 420px) {
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  }
  @media (min-width: 980px) {
    padding-bottom: var(--s11);
  }
`
export const Row = styled(RowMod)`
  ${({ custom }) => custom && css`
    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1 / -1;
    }
  `}
`
export const Column = styled(ColumnMod)`
  ${({ custom }) => custom && css`
    @media(min-width: 769px) {
      width: calc(100% + 7vw);
    }
  `}
`
export const Slider = styled(Carousel)`
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
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: calc(-30px - 2%);
  left: calc(50%);
  transform: translateX(-50%);
  display: flex;
  border-radius: 12px;
  box-shadow: var(--level3);
  @media (min-width: 980px) {
    left: calc(50% + 47px);
    transform: unset;
  }
`
export const Button = styled(ButtonMod)``
export const ArrowSVG = styled(Arrow)`
  ${({ direction }) => direction === 'left' && css`transform: rotate(-180deg)`} 
`