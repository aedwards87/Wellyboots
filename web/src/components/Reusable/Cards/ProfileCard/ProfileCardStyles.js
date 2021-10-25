// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { default as GatsbyImage } from 'gatsby-image'
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
  padding-top: 20vw;
  @media (min-width: 768px) {
    padding-top: min(134px, 12vw);
  }
`
export const Body = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: var(--s5);
  padding: 7vw;
  z-index: 1;
  /* background-color: var(--sectionBgColor);
  border: var(--s2) solid white; */
  border-radius: var(--s6);
  background-color: rgba(var(--colorLight), .4);
  /* border: min(max(8px, 2vw), 10px) solid rgb(var(--colorLight)); */
  border: 8px solid rgb(var(--colorLight));
  transition: transform .3s ease, background-color .3s ease, box-shadow .3s ease,border-radius .3s ease;
  @media (min-width: 768px) {
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
      border-radius: 150px 240px 180px 200px;
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
  min-width: 150px;
  max-width: 350px;
  min-height: 150px;
  max-height: 350px;
  aspect-ratio: 1;
  margin-bottom: var(--s4);
  margin-top: -38px;
  /* border-radius: 150px 240px 180px 200px; */
  border-radius: 50%;
  /* border: min(max(8px, 2vw), 10px) solid rgb(var(--colorLight)); */
  border: 8px solid rgb(var(--colorLight));
  background: rgb(var(--colorLight));
  transition: box-shadow .3s ease, border-radius .3s ease;
  @media (min-width: 768px) {
    width: 20vw;
    max-width: 250px;
    max-height: 250px;
    /* aspect-ratio: 1.1; */
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
  padding-top: max(75px, 20vw);
  @media (min-width: 768px) {
    padding-top: min(134px, 10vw);
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