// Imported Packages
import styled, { css } from 'styled-components/macro';
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
`
export const Frame = styled(FrameOrigin)`
  @media (min-width: 980px) {
    padding-top: var(--s17);
    padding-bottom: var(--s17);
  }
`
export const Row = styled(RowOrigin)`
  justify-items: center;
  @media (min-width: 980px) {
    justify-items: start;
  }
  img {
    width: 100%;
    max-width: 680px;
    @media (min-width: 980px) {
    width: calc(100% + 8vw);

      position: absolute;
      right: 0;
      width: 50vw;
    }
  }
`
export const Column = styled(ColumnOrigin)`
  width: 100%;
`
export const Image = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  @media (min-width: 980px) {
    justify-content: start;
  }
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const PortableText = styled(PortableTextOrigin)`
  max-width: 550px;
`
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)``
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  right: 45px;
`