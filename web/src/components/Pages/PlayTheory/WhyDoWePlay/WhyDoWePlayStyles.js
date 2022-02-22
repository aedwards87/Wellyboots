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
} from '../../../Reusable';
import { FootPrints } from '../../../../assets/svg';
import {
  WaveLocationTop,
  WaveLocationBottomTwo,
} from '../../../../assets/svg';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  ${({ custom }) =>
    custom && css`
    `
  }
`
export const Column = styled(ColumnOrigin)``
export const ImageContainer = styled.div`
  position: relative;
`
export const Image = styled.img`
  position: sticky;
  top: var(--s14);
`
export const Title = styled(TextHeading)`
  > span:after {
    width: 3.8ch;
    left: 49%;
    transform: translateX(-50%);
  }
  @media(min-width: 351px) {
    > span:after {
      width: 100%;
      left: 0;
      transform: revert;
    }
  }
`
export const Text = styled(TextParagraph)`
  max-width: 56ch;
`
export const Link = styled(LinkOrigin)``
export const List = styled.ul`
  max-width: 56ch;
  display: grid;
  row-gap: var(--s3);
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 2rem;
`
export const ListItem = styled.li``
export const FootPrintsSVG = styled(FootPrints)``
export const SVGDividerTop = styled(WaveLocationTop)``
export const SVGDividerBottom = styled(WaveLocationBottomTwo)``