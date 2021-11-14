// Imported Packages
import styled, { css } from 'styled-components/macro'
import { GatsbyImage } from 'gatsby-plugin-image'
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
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--s6);
  `
export const Image = styled(GatsbyImage)`
  width: min(max(65px, 18vw), 100px);
  max-height: min(max(28px, 7vw), 50px);
  @media(min-width: 980px) {
    width: min(max(65px, 10vw), 100px);
  }
`