// Imported dependencies
import styled, { css } from "styled-components/macro";
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
// Imported components
import { Link as LinkOrigin } from '../../Reusable';
// Imported helpers
import { capitilise } from "../../../utils/helpers";

// Styles
export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--height, var(--navHeight));
  font-size: var(--fontSizeNav, inherit);
`

export const Logo = styled(GatsbyImage)`
  z-index: 2;
  height: 100%;
  width: 190px;
  &.gatsby-image-wrapper {
    left: -5px;
  }
`

export const Menu = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
`

export const ListContainer = styled(motion.div)`
  @media (max-width: 981px) {
    position: fixed;
    background: rgba(255,255,255,.97);
    /* if backdrop support: very transparent and blurred */
    @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
      background: rgba(255,255,255,.85);
      backdrop-filter: blur(10px);
    }
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
  }
`

export const List = styled(motion.ul)`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 568px;
  padding-top: 2.2em;
  gap: 2em;
  z-index: 1;
  @media (min-width: 981px) {
    position: static;
    width: auto;
    height: auto;
    min-height: auto;
    margin: 0;
    margin-right: -10px;
    flex-direction: row;
    align-items: baseline;
    padding-top: 0;
    gap: var(--navSpacing);
  }
  @media (max-height: 540px) and (max-width: 980px) {
    gap: 6vh;
    gap: min(max(2rem, 6vh), 40rem);
    min-height: 340px;
  }
`

export const Link = styled(LinkOrigin)`
  padding: 10px;
  position: relative;
  transition: .3s ease;
  z-index: 2;
  width: 100%;
  justify-content: center;
  display: flex;
  outline-offset: 4px;
  &:hover,
  &:focus {
    color: ${({ hoverColor }) => `rgb(var(--color${hoverColor}))`};
  };
  ${({ hoverColor }) =>
    hoverColor && css`
      &:hover,
      &:focus {
        color: rgb(var(--color${hoverColor}))};
      }
    `
  };
  @media (max-width: 979px) {
    font-size: 1.7em;
  }
  @media (max-height: 540px) and (max-width: 980px) {
    font-size: min(max(1.6rem, 6vh), 2.55rem);
    padding: 0;
  }

  ${({ $dropdown, hoverColor }) => $dropdown &&
    css`
      font-size: var(--fontSizeNav);
      min-height: 6.5ch;
      justify-content: start;
      align-items: center;
      gap: 20px;
      padding: 0;
      &[aria-current="page"] {
        color: rgb(var(--color${capitilise(hoverColor[0].title)}))};
      }
      &:hover,
      &:focus {
        .gatsby-image-wrapper { transform: scale(1.25) rotate(-.03turn) }
        color: rgb(var(--color${capitilise(hoverColor[0].title)}))};
      }
    `
  };
  ${({ $home }) => $home &&
    css`
      width: auto;
      padding: 0;
    `
  };
`

export const Button = styled.button`
  height: 100%;
  color: rgb(var(--colorText));
  border: none;
  cursor: pointer;
  margin-left: -10px;
`

export const Burger = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  padding: 0;
  margin: 0;
  z-index: 2;
  &:focus {
    outline: none;
  }
  > span {
    width: ${({ open }) => open ? '3rem' : '2.8rem'};
    height: 0.35rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      background: rgb(var(--colorGreen));
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      background: rgb(var(--colorPink));
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
    background: rgb(var(--colorDarkBlue));
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export const Span = styled.span`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 9px;
    width: 100%;
    transition: .3s ease-out;
    transform: translateY(4px);
    z-index: -1;
  }
  @media (max-width: 979px) {
    &::before {
      bottom: 1px;
      left: 0;
      width: 100%;
      height: .5em;
      transform: translateY(6px);
    }
  }
`

export const ListItem = styled(motion.li)`
  display: flex;
  position: relative;
  perspective: 700px;
  &:hover,
  ${Link}[aria-current="page"],
  ${Link}:focus {
    span::before {
      background: rgba(var(--lineColor), .8);
      transform: translateY(0);
    }
  }
  @media (max-width: 979px) {
    width: 85%;
  }
`

export const Body = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  ${({ dropdown }) => dropdown &&
    css`
      align-items: center;
      gap: 8px;
    `
  };
`

export const Boot = styled(GatsbyImage)`
  display: flex;
  height: 40px;
  width: 30px;
  margin-left: -2px;
  transition: transform ease .3s;
  pointer-events: none;
`

export const Dropdown = styled(motion.div)`
  position: absolute;
  top: 3.8rem;
  left: calc(50% - 10px);
  min-width: 46ch;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: .3em;
  ${({ pad }) => css`padding: var(--s${pad}, var(--dropdownMenuSpacing))`};
  ${({ tPad }) => tPad && css`padding-top: var(--s${tPad})`};
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  ${({ rPad }) => rPad && css`padding-right: var(--s${rPad})`};
  ${({ lPad }) => lPad && css`padding-left: var(--s${lPad})`};
  background: var(--background, rgb(var(--colorLight)));
  border-radius: 10px;
  box-shadow: 0 25px 45px 5px rgba(0, 0, 0, 0.1), 0 6px 12px -2px rgba(0, 0, 0, 0.05);
  z-index: 2;
  transform-style: preserve-3d;
  ${Body}:first-of-type {
    margin-top: -10px;
  }
  ${Body}:last-of-type {
    margin-bottom: -10px;
  }
`


