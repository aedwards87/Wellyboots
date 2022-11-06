
// Imported dependencies
import styled, { css } from 'styled-components/macro';

// Imported Components
import { Girl, WaveStaffBottom, WaveStaffTop } from '../../../assets/svg';
import {
  Column as ColumnOrigin, Frame as FrameOrigin, Link as LinkOrigin, ProfileCard as ProfileCardOrigin, Row as RowOrigin, TextHeading,
  TextParagraph
} from '../../../components/Reusable';


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
export const Row = styled(RowOrigin)`
  ${({ custom }) => custom && css`
    position: sticky;
    top: 100px;
  `}
`
export const Column = styled(ColumnOrigin)`
  display: grid;
  align-content: start;
  /* ${({ custom }) => custom && css`
    @media (max-width: 980px) {
      text-align: left;
    }
  `} */
  @media (min-width: 980px) {
    justify-content: start;
  }
`
export const Group = styled.div`
  /* width: 100%; */
  /* column-break-inside: avoid; */
  /* max-width: 600px; */
  --gap: var(--s6);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--gap);

  row-gap: var(--s9);
  max-width: 460px;
`
export const Title = styled(TextHeading)`
  ${({ color }) => color === "light" && css`
    > span:after {
      opacity: .5;
    }
  `}
`
export const Text = styled(TextParagraph)`
  @media (max-width: 980px) {
    text-align: center;
  }
`
export const Link = styled(LinkOrigin)``
export const DividerTopSVG = styled(WaveStaffTop)``
export const DividerBottomSVG = styled(WaveStaffBottom)``
export const GirlSVG = styled(Girl)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 10vw;
    transform: rotate(22deg);
  }
  @media (min-width: 980px) {
    top: -60px;
  }
`
export const ProfileCard = styled(ProfileCardOrigin)``