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
`
export const Frame = styled(FrameOrigin)`
`
export const Row = styled(RowOrigin)`
`
export const Column = styled(ColumnOrigin)`
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    padding: var(--s3);
  }
  td:first-of-type {
    padding-left: 0;
    ${({ lineColor }) => css`
      border-bottom: 1px solid rgba(var(--color${lineColor}), .2);
      border-right: 1px solid rgba(var(--color${lineColor}), .2);
    `};
  }
  td:last-of-type {
    border-bottom: 1px solid ${({ lineColor }) => css`rgb(var(--color${lineColor}), .2)`};
    width: 100%;
  }
  /* tr:last-of-type td:first-of-type,
  tr:last-of-type td:last-of-type {
    border-bottom: none;
  } */
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
  }
`