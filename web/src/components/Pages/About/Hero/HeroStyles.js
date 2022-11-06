// Imported Packages
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableTextOrigin from "react-portable-text";
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Crown, FootPrints,
  Heart, Sun
} from '../../../../assets/svg';
import {
  Column as ColumnOrigin, Frame as FrameOrigin, Link as LinkOrigin, Row as RowOrigin, TextHeading,
  TextParagraph
} from '../../../Reusable';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  overflow: hidden;
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  justify-items: center;
  position: relative;
`
export const Column = styled(ColumnOrigin)`
  > img {
    /* margin-top: min(-4vw, 2rem); */
    margin-left: 20px;
    width: 110%;
    z-index: 1;
  }
  @media (min-width: 980px) {
    justify-content: start;
    > img {
      width: 120%;
    }
  }
`
export const Image = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const PortableText = styled(PortableTextOrigin)`
  max-width: 55ch;
  @media (min-width: 980px) {
    min-width: 65ch;
  }
`
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)`
  display: none;
  ${({ second }) => !second && css`
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      right: calc(-10% + -3vw);
      right: -3vw;
      top: 35%;
    }
  `}
  ${({ second }) => second && css`
    display: none;
    @media (min-width: 980px) {
      display: block;
      position: absolute;
      left: calc(-20% + -3vw);
      bottom: 35%;
    }
  `}
`
export const HeartSVG = styled(Heart)`
    width: 15vw;
    display: block;
    position: absolute;
    right: calc(92% + 5vw);
    top: -20px;
`
export const CrownSVG = styled(Crown)`
  display: none;
  @media (min-width: 980px) {
    display: block;
    position: absolute;
    right: calc(-25% + -5vw);
    bottom: 5%;
  }
`
export const SunSVG = styled(Sun)`
  width: 20vw;
  display: block;
  position: absolute;
  right: calc(-10px + -10vw);
  top: -128px;
  @media (min-width: 980px) {
    width: revert;
  }
`
