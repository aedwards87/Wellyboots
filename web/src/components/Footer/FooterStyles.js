// Imported Packages
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Frame as FrameMod,
  Row as RowMod,
  Column as ColumnMod,
  Button as ButtonMod,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../Reusable/index'
import {
  Arrow,
  Phone,
  Home,
  Email,
  Locations,
  Link as LinkIcon,
  FooterBlob
} from '../../assets/svg'

// Styles
export const Container = styled.footer`
  font-size: var(--fontSizeFooter);
  ${({ sectionBgColor }) => sectionBgColor &&
    css`background-color: var(--sectionBgColor);`
  };
  @media(max-width: 420px) {
    svg {
      width: 45px;
    }
  }
`
export const Frame = styled(FrameMod)`
  overflow: hidden;
  @media(min-width: 420px) {
    ${({ tPad }) => tPad && css`padding-top: var(--s${(tPad)})`};
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${(bPad)})`};
  }
  @media(min-width: 1100px) {
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${(bPad - 4)})`};
  }
`
export const Row = styled(RowMod)`
  position: relative;
  align-items: start;
  grid-template-columns: 1fr;
  @media(min-width: 700px) {
    grid-template-columns: 1fr 1fr;
    ${({ custom }) => custom && css`grid-template-columns: 1fr;`}
    ${({ columns }) => columns === 1 && css`grid-template-columns: 1fr`};
  }
  @media(min-width: 1100px) {
    grid-template-columns: 1fr 2fr;
    ${({ custom }) => custom && css`grid-template-columns: 1fr 1fr;`}
    ${({ columns }) => columns === 1 && css`grid-template-columns: 1fr`};
  }
`
export const Column = styled(ColumnMod)``
export const Group = styled.div`
  display: grid;
  ${({ columns }) =>
    columns === 2
      ? css`grid-template-columns: auto 1fr`
      : css`grid-template-columns: 1fr`
  };
  grid-column-gap: var(--s4);
  grid-row-gap: var(--s2);
  > a:first-child {
    margin-top: 16px;
  }
  @media(min-width: 420px) {
    grid-column-gap: var(--s5);
  }
`
export const Title = styled(TextHeading)`
  @media(max-width: 347px) {
    > span {
      display: inline-block
    }
    > span:after {
      width: 4.6ch;
    }
  }
`
export const Text = styled(TextParagraph)`
  align-self: center;
`
export const ExternalLink = styled.a`
  text-decoration: none;
  align-self: center;
  transition: color .2s ease;
  :hover,
  :focus {
    color: rgb(var(--colorPink));
  }
`
export const Link = styled(LinkOrigin)``
export const Button = styled(ButtonMod)`
  display: none;
  position: absolute;
  right: 0;
  @media(min-width: 580px) {
    display: block;
  }
`
export const ArrowSVG = styled(Arrow)`
  transform: rotate(-90deg);
`
export const LinkSVG = styled(LinkIcon)``
export const PhoneSVG = styled(Phone)``
export const EmailSVG = styled(Email)``
export const HomeSVG = styled(Home)``
export const LocationsSVG = styled(Locations)``
export const FooterBlobSVG = styled(FooterBlob)`
  && {
    width: auto;
  }
  position: absolute;
  bottom: -193px;
  right: -400px;
  @media(min-width: 1100px) {
    bottom: -160px;
  }
`
export const Signature = styled.ul`
  list-style: none;
  position: absolute;
  bottom: -170px;
  right: 0;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
  li {
    color: white;
  }
  a{
    text-decoration: none;
    :hover {
      color: rgb(var(--colorBlue));
    }
  }
  @media(min-width: 420px) {
    text-align: right;
    right: 0;
  }
  @media(min-width: 1100px) {
    bottom: -138px;
  }
`