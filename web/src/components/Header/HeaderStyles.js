// Imported packages
import styled from 'styled-components'

// Imported components
import FrameMod from '../Mods/Frame'

// Styles
export const Container = styled.header`
  width: 100%;
  height: var(--height, var(--navHeight));
  margin-top: 40px;
  position: var(--position, sticky);
  top: 0;
  left: 0;
  color: var(--color, var(--textColor));
  background: var(--background, rgb(var(--colorLight)));
  z-index: 9;
  transition: margin .5s ease;
  @media (max-width: 980px) {
    margin-top: 0;
  }
`

export const Frame = styled(FrameMod)``
