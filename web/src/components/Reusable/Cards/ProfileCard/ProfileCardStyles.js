// Imported dependencies
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components/macro';
// Imported Components
import {
  PortableText as PortableTextOrigin, TextHeading,
  TextParagraph
} from '../../../Reusable';


// Styles
export const Container = styled.div`
  width: calc(50% - (var(--gap) / 2));
  /* &:nth-child(odd) {
    margin-top: -40px;
  } */
`
export const Body = styled.div`
  position: relative;
`
export const Title = styled(TextHeading)`
  font-size: min(max(15px, 4vw), 20px);
  font-weight: var(--fontWeightMedium);
  line-height: 1.2;
`
export const Text = styled(TextParagraph)`
  font-size: var(--fontSizeSmall);
  font-size: min(max(12px, 3vw), 14px);
  line-height: 1.3;
`
export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: min(max(5px,1.6vw),8px) solid rgb(var(--colorLight));
  overflow: hidden;

  box-shadow: var(--level7-Dark);
`
export const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  display: block;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const NamePlateContainer = styled.div`
  text-align: center;
  background-color: var(--sectionBgColor);
  /* padding: 8px 22px;
  border-radius: 12px; */
  max-width: 21ch;
  padding: 10px 24px 12px;
  border-radius: 20px;
  margin-top: min(max(-26px, 4vw), -33px);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  box-shadow: var(--level7-Dark);
  z-index: 1;
 
`

export const PortableText = styled(PortableTextOrigin)``