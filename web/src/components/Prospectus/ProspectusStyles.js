// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  Link as LinkOrigin,
} from '../Reusable';
import { capitilise } from '../../utils/helpers';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)`
  text-align: center;
`
export const Title = styled(TextHeading)`
  font-size: var(--fontSizeh2XL);
`
export const Link = styled(LinkOrigin)``
export const ExternalLink = styled.a`
  padding: 14px 22px;
  border: ${({ color }) => css`2px solid rgb(var(--color${capitilise(color)}))`};
  font-size: calc(var(--fontSizeBody) + .2rem);
  border-radius: 5px;
  outline-offset: 4px;
  z-index: 9;
  transition: transform .3s ease;
  text-align: center;
  text-decoration: none;
  background-color: ${({ color }) => css`rgb(var(--color${capitilise(color)}))`};
  color: ${({ color }) =>
    color.includes("Dark") || color.includes("dark")
      ? `rgb(var(--colorLight))` : `rgb(var(--colorDark))`};
  :active {
    transform: translateY(0);
    box-shadow: none;
    transition: transform .1s ease, box-shadow .1s ease;
  }
  :hover,
  :focus {
    z-index: 10;
    filter: brightness(103%);
  }
  :hover {
    box-shadow: var(--level4);
    border:  ${({ color }) => css`2px solid rgb(var(--color${capitilise(color)}))`};
    transform: translateY(-10%)
  }
`
