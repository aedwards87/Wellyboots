// Imported Packages
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Image as ImageOrigin
} from '../../Reusable';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)`
  position: relative;
  ${({ elementSize }) => elementSize && css`
    @media (min-width: 980px) {
      height: ${elementSize}px;
    }
  `}
`
export const Image = styled(ImageOrigin)`
  @media (min-width: 980px) {
    position: sticky;
    overflow: unset;
    top: 160px;
    height: 560px;
    transition: top .5s ease;
  }
  @media (min-width: 1200px) {
    top: 184px;
  }
`
export const Title = styled(TextHeading)`
  text-align: center;
  @media (min-width: 980px) {
    text-align: left;
  }
`
export const Text = styled(TextParagraph)`
  text-align: center;
  @media (min-width: 980px) {
    text-align: left;
  }
`
export const Link = styled(LinkOrigin)``
export const Group = styled.div``
