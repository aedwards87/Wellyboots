// Imported Packages
import styled, { css } from 'styled-components/macro'
import { GatsbyImage } from 'gatsby-plugin-image'
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
  FootPrints
} from '../../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  overflow: hidden;
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
    font-size: var(--fontSizeMedium);
    font-weight: var(--fontWeightMedium);
    padding-bottom: 10px;
  }
  ol { margin-left: -2ch; }
  li { padding-left: var(--s3); }
  li + li { padding-top: var(--s3); }
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