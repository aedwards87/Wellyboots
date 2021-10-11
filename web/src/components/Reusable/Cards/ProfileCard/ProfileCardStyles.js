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
  padding-bottom: 11vw;
  z-index: 1;
  background-color: var(--sectionBgColor);
  border-radius: 80px  160px 80px  80px;
  border: var(--s2) solid white;
  box-shadow: var(--level4), var(--level6);
  @media (min-width: 768px) {
    padding: 5vw;
  }
  @media (min-width: 980px) {
    padding: var(--s7);
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
  aspect-ratio: 1;
  margin-bottom: var(--s4);
  margin-top: -38px;
  border-radius: 150px 240px 180px 200px;
  border: var(--s2) solid rgb(var(--colorLight));
  background: rgb(var(--colorLight));
  box-shadow: var(--level4), var(--level6);
  @media (min-width: 768px) {
    width: 20vw;
    max-width: 250px;
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