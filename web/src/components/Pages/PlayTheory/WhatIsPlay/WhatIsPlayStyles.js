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
import { capitilise } from '../../../../utils/helpers';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  position: relative;
  scroll-margin-top: 4em;
  /* &::before { 
    content: " "; 
    display: block; 
    margin-top: -8rem; 
    height: 8rem; 
    visibility: hidden; 
  } */
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  ${({ custom }) =>
    custom && css`
    `
  }
`
export const Column = styled(ColumnOrigin)``
export const Image = styled(ImageOrigin)``
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)`
  text-align: center;
  @media (min-width: 420px) {
    text-align: left;
  }
`
export const Link = styled(LinkOrigin)``
export const List = styled.ol`
  list-style: none;
  display: grid;
  row-gap: clamp(var(--s6), 6vw, var(--s8));
  margin: 0;
  padding: 0;
`
export const ListItem = styled.li`
  max-width: 56ch;
  display: grid;
  justify-items: center;
  row-gap: var(--s3);
  transition: margin .5s ease-out;
  &:nth-child(odd) {
    margin-right: clamp(0vw, 10vw, var(--s16));
  }
  &:nth-child(even) {
    margin-left: clamp(0vw, 10vw, var(--s16));
  }
  @media (min-width: 420px) {
    display: flex;
    column-gap: clamp(var(--s4), 6vw, var(--s5));
  }
  @media (max-width: 650px) {
    &:nth-child(odd) {
      margin-right: 0;
    }
    &:nth-child(even) {
      margin-left: 0
    }
  }
`
export const Bulletpoint = styled.span`
  display: grid;
  place-items: center;
  height: clamp(var(--s8), 10vw, var(--s11));
  width: clamp(var(--s8), 10vw, var(--s11));
  aspect-ratio: 1;
  padding-left: clamp(var(--s1), 10vw, var(--s3));
  border-radius: 100%;
  font-family: var(--fontSecondaryFamily);
  font-size: clamp(var(--s7), 10vw, var(--s10));;
  color: rgb(var(--colorLight));
  line-height: 1.15;
  ${({ custom }) =>
    custom && css`
      background: rgb(var(--color${capitilise(custom)}));
    `
  }
`
export const FootPrintsSVG = styled(FootPrints)`
  display: none;
  @media (min-width: 768px) {
    position: absolute;
    top: 10%;
    right: calc(10% + -3vw);
    display: block;
  }
`