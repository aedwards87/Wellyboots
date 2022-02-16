// Imported dependencies
import styled, { css } from 'styled-components/macro'
// Imported components
import FrameOrigin from '../Reusable/Frame'

// Styles
export const Container = styled.header`
  width: 100%;
  height: var(--height, var(--navHeight));
  margin-top: 0;
  position: var(--position, sticky);
  top: 0;
  left: 0;
  color: var(--color, var(--textColor));
  background: rgb(var(--colorLight));
  z-index: 11;
  transition: margin .3s ease, background 1s ease, box-shadow .3s ease;
  /* ${({ scrollPos }) => scrollPos >= 40 &&
    css`
      box-shadow: 0 5px 10px rgba(var(--colorBlue), .2);
    `
  } */
  @media (min-width: 768px) {
    background: transparent;
    ${({ scrollPos }) => scrollPos >= 40 &&
      css`
        background: rgb(var(--colorLight));
      `
    }
  }
  @media (min-width: 980px) {
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    margin-top: 40px;
  }
`
export const Frame = styled(FrameOrigin)``
