
// Imported dependencies
import styled, { css } from 'styled-components/macro';

// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  ProfileCard as ProfileCardOrigin,
  Link as LinkOrigin,
} from '../../../components/Reusable';
import { WaveStaffTop, WaveStaffBottom } from '../../../assets/svg';
import { motion } from 'framer-motion';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)``
export const Columns = styled.div`
  > * {
    padding-bottom: var(--s9);
  }
  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 94px;
  }
`
export const Group = styled.div`
  /* display: inline-block; */
  width: 100%;
  column-break-inside: avoid;
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const DividerTopSVG = styled(WaveStaffTop)``
export const DividerBottomSVG = styled(WaveStaffBottom)``
export const ProfileCard = styled(ProfileCardOrigin)``