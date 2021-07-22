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

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`

export const Frame = styled(FrameMod)`
  .InfiniteCarousel {
    width: 100%;
    height: calc(100% + 400px);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 2;
    transform: translateY(-20%);
    /* margin-left: calc(-3.9vw - 10px); */
    /* margin-left: calc(-5vw - 10px); */
  }
  .InfiniteCarouselFrame {
    overflow: unset;
  }
  button.InfiniteCarouselArrow {
    position: absolute;
    top: 78%;
    background: white;
    padding: 20px 40px;
    display: grid;
    justify-content: center;
    align-content: center;
    transition: left .3s ease;
    box-shadow: var(--level3);
  }
  button.InfiniteCarouselArrowPrev {
    left: 50%;
    transform: translateX(-100%);
    border-radius: 13px 0 0 13px;
  }
  button.InfiniteCarouselArrowNext {
    left: 50%;
    transform: translateX(0);
    border-radius: 0 13px 13px 0;
  }
  @media (min-width: 420px) {
    button.InfiniteCarouselArrow {
      top: calc(50% + 32vw)
    }
  }
  @media (min-width: 768px) {
    button.InfiniteCarouselArrow {
      top: calc(66% + 9vw);
    }
  }
  @media (min-width: 980px) {
    button.InfiniteCarouselArrow {
      left: calc(50% + 145px + 1vw);
    }
  }
  @media (min-width: 1200px) {
    button.InfiniteCarouselArrow {
      top: calc(78.5% + 2vw);
      left: calc(50% + 157px);
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