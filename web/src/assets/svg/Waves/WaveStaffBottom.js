// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';
// Imported helpers
import { capitilise } from '../../../utils/helpers';

const WaveStaffBottom = ({ className, style, bgColor = 'dark', ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1440 183"
        fill="none"
        style={style, { '--colorStaff': `var(--color${capitilise(bgColor)})` }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
      >
        <rect y="3" width="1440" height="180" className="colorLight" />
        <path d="M1395 16.19C1410.9 19.1767 1425.9 22.2667 1440 25.46V0H0V102.54C129.4 157.48 252.63 178.48 370.46 179.19H383C769.41 176.86 1097.6 -39.69 1395 16.19Z" className="colorStaff" />
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  svg {
    width: 100%;
    min-width: 700px;
    margin-bottom: -2px;
  }
  .colorStaff {
      fill: rgb(var(--colorStaff))
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveStaffBottom
