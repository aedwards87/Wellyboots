// Imported dependencies
import styled, { css } from 'styled-components/macro';

// Imported Components
import InfiniteCarousel from "react-leaf-carousel";
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
  /* padding-bottom: var(--s12); */
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  @media (min-width: 420px) {
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  }
  .InfiniteCarousel {
    width: 100%;
    height: 205%;
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 2;
    transform: translateY(-20%);
    @media (min-width: 420px) {
      height: 190%;
    }
  }
  .InfiniteCarouselFrame {
    overflow: unset;
  }
  button.InfiniteCarouselArrow {
    position: absolute;
    top: 81%;
    box-shadow: var(--level3);
  }
  button.InfiniteCarouselArrowPrev {
    left: 50%;
    transform: translateX(-100%);
    border-radius: 13px 0 0 13px;
    box-shadow: -2px 4px 6px 0px rgba(0, 0, 0, 0.1), -3px 2px 4px 0px rgba(0, 0, 0, 0.06);
  }
  button.InfiniteCarouselArrowNext {
    left: 50%;
    transform: translateX(0);
    border-radius: 0 13px 13px 0;
    box-shadow: 2px 4px 6px 0px rgba(0, 0, 0, 0.1), 3px 2px 4px 0px rgba(0, 0, 0, 0.06);
  }
  @media (min-width: 420px) {
    button.InfiniteCarouselArrow {
      top: calc(50% + 32vw)
    }
  }
  @media (min-width: 768px) {
    button.InfiniteCarouselArrow {
      top: calc(70% + 9vw);
    }
  }
  @media (min-width: 980px) {
    button.InfiniteCarouselArrow {
      left: calc(50% + 133px + 1vw);
      top: calc(41% + 26vw);
    }
  }
  @media (min-width: 1200px) {
    button.InfiniteCarouselArrow {
      top: calc(78.5% + 2vw);
      left: calc(50% + 145px);
    }
  }
`
export const Row = styled(RowMod)``
export const Column = styled(ColumnMod)`
  ${({ custom }) => custom && css`
    width: calc(100% + 4.5vw);
    margin-left: calc(-2.25vw);
    @media(min-width: 1160px) {
      width: 105.6%;
      margin-left: calc(-2.75%);
    }
    @media(min-width: 1220px) {
      width: 108%;
      margin-left: calc(-4%);
    }
    @media(min-width: 1300px) {
      width: 111%;
      margin-left: calc(-5.5%);
    }
  `}
`
export const Slider = styled(InfiniteCarousel)`
  margin: 0 auto;
  .InfiniteCarouselFrame {
    overflow: unset;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  

  .slick-prev,
  .slick-next {
    position: absolute;
    top: calc(100% + 50px);
    background: white;
    padding: 20px 40px;
    display: grid !important;
    justify-content: center;
    align-content: center;
    transition: 0.3s;
  }
  .slick-prev {
    left: 50%;
    transform: translateX(-100%);
    border-radius: 13px 0 0 13px;
  }
  .slick-next {
    left: 50%;
    transform: translateX(0);
    border-radius: 0 13px 13px 0;
  }
  @media (min-width: 980px) {
    .slick-prev {
      transform: unset;
      left: 50%;
    }
    .slick-next {
      transform: unset;
      left: calc(50% + 79px);
    }
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    background-color: white;
    /* transform: translateY(3%); */
  }

  button {
    color: black;
    background: white;
    padding: 20px 40px;
  }
  .slick-next::before {
    /* content: "⇨"; */
    color: black;
  }
  .slick-prev::before {
    /* content: "⇦"; */
    color: black;
  }
`
export const Card = styled(LocationCard)``
export const Title = styled(TextHeading)``
export const Text = styled.p``
export const SVGDividerTop = styled(WaveLocationTop)``
export const SVGDividerBottom = styled(WaveLocationBottomTwo)``
export const ButtonContainer = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: var(--level3);
`
export const Button = styled(ButtonMod)`
  transition: transform .3s ease;
  ${({ model }) => model === "left" && css`
    &&:hover {
      transform: translateY(-3%) translateX(-100%);
    }
    &&:active {
      transform: translateY(0) translateX(-100%) ;
    }
  `}
`
export const ArrowSVG = styled(Arrow)`
  ${({ direction }) => direction === 'left' && css`transform: rotate(-180deg)`} 
`