// Imported dependencies
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
} from '../../../components/Reusable';
import GoogleMapOrigin from '../../../components/GoogleMaps';
import {
  Phone,
  Email,
  Clock,
  Sun,
  WaveDetailsBottom,
  WaveDetailsTop,
} from '../../../assets/svg'

// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  scroll-margin-top: -5vw;
`
export const Frame = styled(FrameOrigin)` 
  position: relative;
`
export const Row = styled(RowOrigin)`
  grid-template-columns: 1fr;
  @media (min-width: 1111px) {
    grid-template-columns: max-content 1fr;
  }
  ${({ custom }) => custom && css`
    grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
    @media (max-width: 979px) {
      column-gap: var(--s6);
    } 
  `}
  ${({ custom }) => !custom && css`
      column-gap: min(5vw, 94px);
  `}
`
export const Column = styled(ColumnOrigin)`
  width: 100%;
  ${({ custom }) => custom && css`
    height: 460px;
    @media (min-width: 1111px) {
      height: 140%;
    }
  `}
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)`
  display: grid;
  grid-template-columns: auto 1fr;
  span:nth-child(odd) {
    padding-right: var(--s4);
  }
  & + p {
    margin-top: 0;
  }
`
export const Group = styled.div`
  padding-bottom: var(--s6);
  padding-top: var(--s4);
`
export const Link = styled(LinkOrigin)``
export const GoogleMap = styled(GoogleMapOrigin)``
export const Address = styled.div`
  z-index: 99;
  position: absolute;
  bottom: -20px;
  @media (min-width: 1111px) {
    bottom: -50%;
  }
`
export const DividerTopSVG = styled(WaveDetailsTop)``
export const DividerBottomSVG = styled(WaveDetailsBottom)``
export const PhoneSVG = styled(Phone)``
export const EmailSVG = styled(Email)``
export const ClockSVG = styled(Clock)``
export const SunSVG = styled(Sun)`
  position: absolute;
  bottom: 0;
  right: 0;
  top: -190px;
  @media (min-width: 1111px) {
    top: -100px;
    right: -50px;
    width: revert;
    height: revert;
  }
`