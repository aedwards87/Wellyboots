// Imported Packages
import styled, { css } from 'styled-components/macro'
import { default as GatsbyImage } from 'gatsby-image'
import PortableTextOrigin from '../../../Reusable/PortableText/PortableText'
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
  FootPrints
} from '../../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  justify-items: center;
  @media (min-width: 980px) {
    justify-items: start;
  }
  img {
    width: 100%;
    max-width: 680px;
    /* min-width: 550px; */
    padding-top: var(--s4);
    @media (min-width: 980px) {
      width: calc(100% + 8vw);
      position: absolute;
      left: 0;
      width: 50vw;
    }
  }
`
export const Column = styled(ColumnOrigin)`
  @media (min-width: 980px) {
    justify-content: start;
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
  max-width: 550px;
  P:first-child {
    font-weight: var(--fontWeightMedium);
    padding-bottom: 10px;
  }
  p + p:before {
    content: counter(numered-counter) ".";
    position: absolute;
    left: 0;
    font-size: 1.6rem;
  }
  p + p {
    padding-left: 35px;
    position: relative;
    counter-increment: numered-counter;
    /* font-size: 1.6rem; */
  }
`
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)``
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 45px;
`