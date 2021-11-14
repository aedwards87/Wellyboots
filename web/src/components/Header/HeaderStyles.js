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
  background: transparent;
  ${({ scrollPos }) => scrollPos >= 40 &&
    css`
      background: rgb(var(--colorLight));
    `
  }
  z-index: 11;
  transition: margin .5s ease, background 1s ease;
  @media (min-width: 980px) {
    margin-top: 20px;
  }
  @media (min-width: 1200px) {
    margin-top: 40px;
  }
`
export const Frame = styled(FrameOrigin)``
