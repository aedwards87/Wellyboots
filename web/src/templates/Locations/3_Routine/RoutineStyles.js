// Imported dependencies
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Column as ColumnOrigin, Frame as FrameOrigin, Link as LinkOrigin, Row as RowOrigin, TextHeading,
  TextParagraph
} from '../../../components/Reusable';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 550px;
  }
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  position: sticky;
  top: 100px;
`
export const Column = styled(ColumnOrigin)`
  tr:last-of-type td {
    border-bottom: none;
  }
  font-size: var(--fontSizeSmall);
  ${({ conditionDaily, conditionAfternoon }) => (!conditionDaily && conditionAfternoon) && css`
      grid-row: 2;
      @media (min-width: 980px) { grid-row: 1; }
    `
  }
  justify-content: start;
  @media (min-width: 542px) { justify-content: stretch; }
  @media (min-width: 980px) { justify-content: start; }
`
export const Title = styled(TextHeading)`
  text-align: left;
  @media (min-width: 542px) { text-align: center; }
  @media (min-width: 980px) { text-align: revert; }
  ${({ custom }) => custom && css`
    @media(max-width: 542px) {
      > span:after { width: 5.1ch; }
    }
  `}
`
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  @media (min-width: 980px) {
    width: calc(100% + 40px);
    margin-left: -20px;
  }
  td {
    padding: .8em;
    padding-right: 20px;
    min-width: max-content;
    @media (min-width: 420px) {
      padding-left: 20px;
      :last-of-type {
        padding-left: 25px;
      }
    }
  }
  ${({ lineColor }) => {
    const isDark = lineColor.includes('Dark') || lineColor.includes('dark')
    return (css`
    td:first-of-type {
      border-bottom: 1px solid rgba(var(--color${lineColor}), ${isDark ? .2 : .5});
      border-right: 1px solid rgba(var(--color${lineColor}), ${isDark ? .2 : .5});
    }
    td:last-of-type {
      border-bottom: 1px solid ${({ lineColor }) => css`rgb(var(--color${lineColor}), ${isDark ? .2 : .5})`};
      width: 100%;
      padding-left: 20px;
    }
  `)}};
`
export const ImageContainer = styled.div``
export const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  display: block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 550px;
  }
`