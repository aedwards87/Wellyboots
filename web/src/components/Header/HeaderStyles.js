// Imported packages
import styled from 'styled-components/macro'

// Imported components
import FrameMod from '../Reusable/Frame'

// Styles
export const Container = styled.header`
  width: 100%;
  height: var(--height, var(--navHeight));
  margin-top: 0;
  position: var(--position, sticky);
  top: 0;
  left: 0;
  color: var(--color, var(--textColor));
  background: var(--background, rgb(var(--colorLight)));
  z-index: 9;
  transition: margin .5s ease;
  @media (min-width: 980px) {
    margin-top: 40px;
  }
`

export const Frame = styled(FrameMod)``
