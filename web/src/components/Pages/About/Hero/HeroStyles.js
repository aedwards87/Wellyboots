// Imported Packages
import styled, { css } from 'styled-components/macro';
import { default as GatsbyImage } from 'gatsby-image'
import PortableTextOrigin from "react-portable-text"
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../../Reusable';
import {
  FootPrints,
  Heart,
  Crown,
  Sun,
} from '../../../../assets/svg';


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
    margin-top: -40px;
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
export const Title = styled(TextHeading)`
  @media (min-width: 768px) {
    --heroFont:  var(--fontSizeHero) var(--fontSecondaryFamily);
  }
`
export const Text = styled(TextParagraph)``
export const PortableText = styled(PortableTextOrigin)`
  max-width: 550px;
  @media (min-width: 980px) {
    min-width: 600px;
  }
`
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)`
  display: none;
  ${({ second }) => !second && css`
    @media (min-width: 980px) {
      display: block;
      position: absolute;
      right: calc(-10% + -3vw);
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
    right: calc(131% - 17vw);
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
