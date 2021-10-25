// Imported dependencies
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
} from '../../../components/Reusable';
import { motion } from 'framer-motion';


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
export const Frame = styled(FrameOrigin)`
`
export const Row = styled(RowOrigin)`
`
export const Column = styled(ColumnOrigin)`
  tr:last-of-type td {
    border-bottom: none;
  }
  font-size: var(--fontSizeSmall);
  ${({ conditionDaily, conditionAfternoon }) => (!conditionDaily && conditionAfternoon) && css`
      grid-row: 2;
      @media (min-width: 980px) {
        grid-row: 1
      }
    `
  }
  justify-content: center;
  @media (min-width: 980px) {
    justify-content: start;
  }
`
export const Title = styled(TextHeading)`
  text-align: center;
  @media (min-width: 980px) {
    text-align: revert;
  }
  ${({ custom }) => custom && css`
    @media(max-width: 542px) {
      > span:after {
        width: 5.1ch;
        left: 50%;
        transform: translateX(-25%);
      }
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
    padding: .63em;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 100px;
    @media (min-width: 420px) {
      min-width: 108px;
    }
  }
  td:first-of-type {
    ${({ lineColor }) => css`
      border-bottom: 1px solid rgba(var(--color${lineColor}), .2);
      border-right: 1px solid rgba(var(--color${lineColor}), .2);
    `};
  }
  td:last-of-type {
    border-bottom: 1px solid ${({ lineColor }) => css`rgb(var(--color${lineColor}), .2)`};
    width: 100%;
    padding-left: 25px;
  }
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