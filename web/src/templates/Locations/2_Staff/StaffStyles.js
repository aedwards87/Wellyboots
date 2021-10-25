
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
    padding-bottom: var(--s7);
    padding-top: 10px;
  }
  @media (min-width: 768px) {
    column-count: 2;
    column-gap: min(max(40px, 6vw), 94px);
  }
`
export const Group = styled.div`
  width: 100%;
  column-break-inside: avoid;
  max-width: 600px;
`
export const Title = styled(TextHeading)`
${({ color }) => color === "light" && css`
  > span:after {
    opacity: .5;
  }
`}
  
`
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const DividerTopSVG = styled(WaveStaffTop)``
export const DividerBottomSVG = styled(WaveStaffBottom)``
export const ProfileCard = styled(ProfileCardOrigin)`
  
`