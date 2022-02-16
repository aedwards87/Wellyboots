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
import { WaveMastermindTop, WaveMastermindBottom } from '../../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)`
  ${({ custom }) => custom && css`
    grid-row-gap: var(--s6);
  `}
`
export const Image = styled(GatsbyImage)`
  object-fit: cover;
  width: 48vw;
  min-width: 170px;
  max-width: 300px;
  aspect-ratio: 1;
  border-radius: 100%;
  border: min(max(8px, 2vw), 10px) solid rgb(var(--colorLight));
  box-shadow: var(--level6);
  border-radius: 150px 240px 180px 200px;
`
export const Title = styled(TextHeading)`
  span::after {
    opacity: .6;
  }
  @media (max-width: 976px) {
    span::after {
      width: 7.6ch;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
export const Text = styled(TextParagraph)`
  text-align: center;
`
export const Link = styled(LinkOrigin)``
export const DividerTopSVG = styled(WaveMastermindTop)``
export const DividerBottomSVG = styled(WaveMastermindBottom)``
export const PortableText = styled(PortableTextOrigin)`
  max-width: 55ch;
  color: rgb(var(--colorLight));
  @media (min-width: 980px) {
    max-width: 65ch;
  }
`
