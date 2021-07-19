// Imported Packages
import styled, { css } from 'styled-components';
// import Image from 'gatsby-image';

// Imported Components
import FrameMod from '../../Reusable/Frame'
import RowMod from '../../Reusable/Row'
import ColumnMod from '../../Reusable/Column'
import TextHeading from '../../Reusable/TextHeading';
import TextParagraph from '../../Reusable/TextParagraph';
import ButtonMob from '../../Reusable/Button';

// Styles
export const Container = styled.section`
  ${({ sectionBgColor }) => sectionBgColor && css`background-color: var(--sectionBgColor);`};
`

export const Frame = styled(FrameMod)``
export const Row = styled(RowMod)`
  @media(max-width: 979px) {
    justify-items: center;
  }
`
export const Column = styled(ColumnMod)``
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* grid-template-columns: repeat(3, 80px); */
  gap: var(--s5);
  @media(min-width: 980px) {
    width: 80%;
  }
`
export const Image = styled.img`
  width: 80px;
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)`max-width: 50ch;`
export const ButtonContainer = styled.div`
  margin-top: var(--s6);
  justify-self: center;
  width: 100%;
  @media(min-width: 420px) {
    width: auto;
  }
  @media(min-width: 980px) {
    justify-self: start;
  }
`
export const Button = styled(ButtonMob)` width: 100%;`