// Imported Packages
import styled, { css } from 'styled-components/macro';
import PortableTextOrigin from "react-portable-text"
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Image as ImageOrigin,
} from '../../Reusable';

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  grid-template-columns: 1fr;
  @media (max-width: 767px) {
    grid-row-gap: var(--s2);
  }
  @media (min-width: 768px) {
    grid-template-columns: minmax(24ch, .65fr) 1.5fr;
  }
`
export const Column = styled(ColumnOrigin)`
  position: revert;
`
export const Image = styled(ImageOrigin)``
export const Title = styled(TextHeading)`
  max-width: 17ch;
  ${({ small }) => small && css`
    margin-top: 1rem;
  `}
  /* ${({ small }) => !small && css`
    max-width: 14ch;
  `} */
  @media (min-width: 768px) {
    text-align: left;
  }
`
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``

export const List = styled.ul`
  display: grid;
  gap: var(--s3);
`
export const ListItem = styled.li``
export const Nav = styled.nav`
  font-size: 1.4rem;
  display: grid;
  gap: var(--s3);
  position: fixed;
  justify-items: center;
  top: 70px;
  left: 0px;
  right: 0px;
  padding: var(--s1) var(--s4) var(--s3);
  background: rgb(var(--colorLight));
  box-shadow: 0 5px 10px rgba(var(--colorBlue), .2);
  z-index: 100000;
  > ${List} {
    list-style: none;
  }
  @media (min-width: 768px) {
    position: sticky;
    top: 10rem;
    padding: 0;
    box-shadow: none;
    justify-items: start;
  }
`
export const Span = styled.span`
  
`
export const Arrow = styled.span`
  color: rgb(var(--colorGrey));
  @media (min-width: 768px) {
    display: none;
  }
`
export const Button = styled.button`
`
export const PortableText = styled(PortableTextOrigin)`
  max-width: 64ch;
  ul { 
    padding-left: 40px;
    margin-bottom: 2rem;
  }
  li { padding-left: var(--s2); }
  li + li { padding-top: var(--s2); }
  p + * { margin-top: 2rem; }
  h3:first-child {
    padding-top: 0;
  }
  h3 {
    padding-top: var(--s5);
    margin-bottom: var(--s4);
    /* color: rgb(var(--colorDarkPurple)); */
  }
  h4 {
    padding-top: var(--s3);
    padding-bottom: var(--s3);
  }
  strong {
    font-weight: var(--fontWeightBold);
  }
  cite {
    display: block;
    margin-top: var(--s10);
    font-style: normal;
  }
`