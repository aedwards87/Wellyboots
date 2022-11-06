// Imported Packages
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components/macro';
// Imported Components
import {
  Column as ColumnOrigin, Frame as FrameOrigin, Link as LinkOrigin, Row as RowOrigin, TextHeading,
  TextParagraph
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
