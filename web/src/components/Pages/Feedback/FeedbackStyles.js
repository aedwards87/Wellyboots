// Imported Packages
import styled, { css } from 'styled-components/macro';
import { default as GatsbyImage } from 'gatsby-image'
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../../Reusable';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)``
export const Image = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
