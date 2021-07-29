// Imported Packages
import styled, { css } from 'styled-components/macro';
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
  
`
export const Column = styled(ColumnMod)`

  @media(min-width: 420px) and (max-width: 979px) {
    justify-items: start;
    justify-content: center;
  }
  
`
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--s5);
  @media(min-width: 980px) {
    width: 80%;
  }
`
export const Image = styled.img`
  width: min(max(60px, 18vw), 80px);
`
export const Title = styled(TextHeading)``
export const Text = styled(TextParagraph)`max-width: 50ch;`
export const ButtonContainer = styled.div`
  margin-top: var(--s7);
  justify-self: center;
  width: 100%;
  @media(min-width: 420px) {
    width: auto;
    margin-top: var(--s9);
  }
  @media(min-width: 980px) {
    justify-self: start;
  }
`
export const Button = styled(ButtonMob)` width: 100%;`