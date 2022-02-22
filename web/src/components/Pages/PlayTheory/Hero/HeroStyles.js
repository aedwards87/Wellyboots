// Imported Packages
import styled, { css } from 'styled-components/macro';
// Imported Components
import {
  Frame as FrameOrigin,
  Row as RowOrigin,
  Column as ColumnOrigin,
  TextHeading,
  TextParagraph,
  Link as LinkOrigin,
  Image as ImageOrigin
} from '../../../Reusable';
import { FootPrints } from '../../../../assets/svg';


// Styles
export const Container = styled.section`
  background-color: var(--sectionBgColor);
`
export const Frame = styled(FrameOrigin)``
export const Row = styled(RowOrigin)`
  ${({ custom }) =>
    custom && css`
      /* grid-template-columns: 1fr; */
      @media (min-width: 768px) {
        grid-template-columns: auto 1fr;
      }
      @media (min-width: 980px) {
        gap: var(--s14);
      }
    `
  }
`
export const Column = styled(ColumnOrigin)`
  ${({ column }) =>
    column === 1 ? css`
        grid-column: 1;
        margin-top: min(2vw, 1.2rem);
        margin-top: 2rem;
        grid-row: 1;
        width: 16vw;
        /* display: none; */
        @media (min-width: 768px) {
          display: grid;
        }
        @media (min-width: 980px) {
          width: 100%;
        }
    ` : column === 2 ? css`
        grid-column: 1;
        text-align: center;
        @media (min-width: 768px) {
          grid-column: 2;
          text-align: revert;
          max-width: 850px
        }
    ` : null
  }
`
export const Nav = styled.nav`
  display: grid;
  gap: var(--s3);
`
export const Image = styled(ImageOrigin)`
  /* height: clamp(300px,65vw,600px); */
  height: clamp(320px,45vw,1200px);
  margin-top: -4rem;
  z-index: -2;
  @media (min-width: 768px) and (max-width: 979px) {
    margin-top: -18%;
  }
  @media (min-width: 980px) {
    /* margin-top: -12rem; */
    margin-top: -10vw;
  }
`
export const Title = styled(TextHeading)`
  span {
    > span:nth-child(1):after {
      background: rgba(var(--colorOrange), .8);
    }
    > span:nth-child(2):after,
    > span:nth-child(2) span:after {
      background: rgba(var(--colorYellow), .8);
    }
    > span:nth-child(3):after,
    > span:nth-child(3) span:after {
      background: rgb(var(--colorBlue));
    }
    > span:nth-child(4):after,
    > span:nth-child(4) span:after {
      background: rgb(var(--colorGreen));
    }
  }
`
export const Text = styled(TextParagraph)``
export const Link = styled(LinkOrigin)``
export const FootPrintsSVG = styled(FootPrints)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    justify-content: center;
    bottom: -8%;
  }
  @media (min-width: 980px) {
    display: none;
  }
`