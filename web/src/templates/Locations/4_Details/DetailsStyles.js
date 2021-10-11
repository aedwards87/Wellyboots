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
import { WaveDetailsTop, WaveDetailsBottom } from '../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)``
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const DividerTopSVG = styled(WaveDetailsTop)``
export const DividerBottomSVG = styled(WaveDetailsBottom)``