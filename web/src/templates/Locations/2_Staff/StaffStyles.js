
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
import { WaveStaffTop, WaveStaffBottom, Girl } from '../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
  scroll-margin-top: -4vw;
`
export const Frame = styled(FrameOrigin)`
  place-items: start;
  position: relative;
  @media (min-width: 542px) {
    place-items: center;
  }
  @media (min-width: 980px) {
    place-items: start;
  }
`
export const Row = styled(RowOrigin)``
export const Column = styled(ColumnOrigin)``
export const Columns = styled.div`
  max-width: 650px;
  display: grid;
  /* gap: var(--s7); */
  > * {
    padding-bottom: var(--s7);
    padding-top: 10px;
  }
  @media (min-width: 980px) {
    display: block;
    column-count: 2;
    column-gap: min(max(40px, 6vw), 94px);
    max-width: revert;
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
export const GirlSVG = styled(Girl)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 40px;
    right: 10vw;
    transform: rotate(22deg);
  }
`
export const ProfileCard = styled(ProfileCardOrigin)``