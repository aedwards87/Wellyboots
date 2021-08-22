// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import { default as gasbyImage } from 'gatsby-image';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  Link as LinkOrigin,
  PortableText as PortableTextOrigin,
} from '../../Reusable';


// Styles
export const Container = styled.section`
  ${({ sectionBgColor }) => sectionBgColor && css`background-color: var(--sectionBgColor);`};
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  @media(min-width: 980px) {
    grid-row-gap: var(--s9);
  }
`
export const Column = styled(ColumnOrigin)`
  @media(min-width: 420px) and (max-width: 979px) {
    justify-items: start;
    justify-content: center;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--s6);
  @media(min-width: 1300px) {
    width: 80%
  }
`
export const Image = styled(gasbyImage)`
  width: min(max(65px, 18vw), 100px);
  max-height: min(max(28px, 7vw), 50px);
  @media(min-width: 980px) {
    width: min(max(65px, 10vw), 100px);
  }
`
export const Title = styled(TextHeading)``
export const PortableText = styled(PortableTextOrigin)`
  max-width: 50ch;
`
export const LinkContainer = styled(motion.div)`
  margin-top: var(--s7);
  justify-self: center;
  width: 100%;
  display: flex;
  @media(min-width: 420px) {
    width: auto;
  }
  @media(min-width: 980px) {
    justify-self: start;
    margin-top: var(--s9);
  }
`
export const Link = styled(LinkOrigin)` width: 100%;`