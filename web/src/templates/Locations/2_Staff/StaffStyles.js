
// Imported dependencies
import styled, { css } from 'styled-components/macro';

// Imported Components
import {
  FrameOrigin,
  RowOrigin,
  ColumnOrigin,
  TextHeading,
  TextParagraph,
  LinkOrigin,
  ButtonOrigin,
} from '../../Reusable';
import { WaveStaffTop, WaveStaffBottom, FootPrints } from '../../../assets/svg';
import { motion } from 'framer-motion';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)`
`
export const Row = styled(RowOrigin)`
`
export const Column = styled(ColumnOrigin)`
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const WaveTopSVG = styled(WaveStaffTop)``
export const WaveBottomSVG = styled(WaveStaffBottom)``
export const ButtonContainer = styled(motion.div)`
`
export const Button = styled(ButtonOrigin)``
export const FootPrintsSVG = styled(FootPrints)``