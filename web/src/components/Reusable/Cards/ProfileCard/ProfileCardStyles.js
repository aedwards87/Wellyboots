// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion';
// Imported Components
import {
  TextHeading,
  TextParagraph,
  PortableText as PortableTextOrigin,
} from '../../../Reusable';
import ProfileBlob from '../../../../assets/svg/profileblob.svg';


// Styles
export const Container = styled.div`
  padding-top: min(150px, 24vw);
  @media (min-width: 980px) {
    padding-top: min(134px, 12vw);
  }
`
export const Body = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: var(--s5);
  padding: min(max(var(--s5), 6vw), var(--s7));
  z-index: 1;
  border-radius: var(--s6);
  background-color: rgba(var(--colorLight), .4);
  border: 8px solid rgb(var(--colorLight));
  transition: 
    transform .5s ease, 
    background-color .5s ease, 
    box-shadow .5s ease,
    border-radius .5s ease;
  @media (min-width: 980px) {
    padding: min(max(var(--s4), 4vw), var(--s6));
  }
  @media (hover) {
    :hover {
      box-shadow: var(--level6);
      transform: scale(1.01) translateY(-10px);
      background-color: var(--sectionBgColor);
      > div:first-child {
        box-shadow: var(--level5);
        border-radius: 150px 240px 180px 200px;
      } 
    }
  }
  @media (hover: none) {
    background: var(--sectionBgColor);
    box-shadow: var(--level6);
    > div:first-child {
      box-shadow: var(--level5);
      /* border-radius: 150px 240px 180px 200px; */
    } 
  }
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-35%);
  overflow: hidden;
  width: 40vw;
  min-width: 175px;
  min-height: 175px;
  max-width: 250px;
  max-height: 250px;
  aspect-ratio: 1;
  margin-bottom: var(--s4);
  margin-top: -38px;
  border-radius: 50%;
  border: 8px solid rgb(var(--colorLight));
  background: rgb(var(--colorLight));
  transition: box-shadow .5s ease, border-radius .5s ease;
  @media (min-width: 980px) {
    width: 20vw;
    max-width: 250px;
    max-height: 250px;
  }
`
export const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  display: block;
  /* mask: url(${ProfileBlob});
  mask-border: white 10px;
  mask-repeat: no-repeat; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const NamePlateContainer = styled.div`
  display: grid;
  align-content: end;
  height: 30vw;
  min-height: var(--s18);
  max-height: var(--s24);
  @media (min-width: 980px) {
    height: 15vw;
  }
  text-align: center;
  > p {
    font-size: var(--fontSizeSmall)
  }
  h3 {
    font-weight: var(--fontWeightMedium);
  }
`

export const PortableText = styled(PortableTextOrigin)``