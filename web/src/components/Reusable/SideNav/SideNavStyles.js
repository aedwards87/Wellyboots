// Imported Packages
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Frame as FrameOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../Reusable';

// Styles

export const List = styled.ul`
  display: grid;
  gap: var(--s4);
  list-style: none;
  z-index: 0;
  @media (min-width: 768px) {
    gap: var(--s3);
  }
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 70px;
  

  
  z-index: 11;
  overflow: hidden;
  padding-bottom: var(--s5);


  > ${List} {
    list-style: none;
  }
  ${({ fullscreen, isOpen }) => (fullscreen && isOpen) && css`
    bottom: 0;
    padding-bottom: 0;

    /* overflow-y: scroll; */
    /* background: rgba(var(--colorLight),.85);
    backdrop-filter: blur(10px); */
  `}
  @media (min-width: 768px) {
    position: sticky;
    top: var(--s13);
    margin: 0;
    box-shadow: none;
    overflow-y: revert;
    z-index: 10;
    ${({ fullscreen }) => fullscreen && css`
      height: calc(100vh - 10rem);
      /* Padding is to replicate the scrollbar width when its not showing, so we don't get any junky movement */
      padding-right: 15px; 
      overflow-y: hidden; /* So we don't the gastly scrollbar showing all the time */
      &:hover {
        padding-right: 0; /* Remove padding once scrollbar show */
        overflow-y: scroll; /* Show scrollbar to scroll */
      }
      nav {
        padding-bottom: var(--s13);
        padding-right: var(--s4);
      }
    `}
  }
`
export const InnerContainer = styled.nav`
  display: grid;
  align-items: start;
  gap: var(--s3);
  background-color: var(--bgColor);
  ${({ scrollPos, isOpen }) => (scrollPos >= 40 || isOpen) &&
    css`
      box-shadow: var(--level8);
    `
  }
  @media (min-width: 768px) {
    justify-items: start;
    box-shadow: none;
  }
`
export const Frame = styled(FrameOrigin)`
  padding-top: var(--s3);
  padding-bottom: var(--s3);
  row-gap: var(--s6);
  ${({ isOpen }) => isOpen && css`
    padding-bottom: var(--s5);
  `}
`
export const Title = styled(TextHeading)`
  font-size: 1.2rem;
  @media (min-width: 768px) {
    margin-top: 1rem;
    text-align: left;
    font-size: 1.4rem;
  }
`
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)`
  font-size: 1.8rem;
  width: 100%;
  @media (min-width: 768px) {
    font-size: var(--fontSizeNav);
  }
`
export const ListItem = styled.li``
export const Span = styled.span``
export const Arrow = styled.span`
  font-size: 18px;
  color: rgb(var(--colorGrey));
  @media (min-width: 768px) {
    display: none;
  }
`
export const Button = styled.button``