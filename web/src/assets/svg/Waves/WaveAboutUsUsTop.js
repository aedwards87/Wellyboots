// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';
// Imported helpers
import { capitilise } from '../../../utils/helpers';

const WaveAboutUsTop = ({ className, style, bgColor = 'dark', ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1440 123"
        fill="none"
        style={style, { '--colorDetails': `var(--color${capitilise(bgColor)})` }}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="1440" height="118" className="colorLight" />
        <path d="M1184.22 53.2985C1113.22 65.2985 1048.76 84.9485 979.37 99.1385C909.98 113.329 834 120.969 764.6 107.879C667.14 89.3185 604.36 33.6585 508.54 14.0085C427.54 -2.36148 336.73 8.54853 257.43 27.1085C176.43 45.6585 100.48 69.6685 16.23 79.4985C10.8367 80.1652 5.42667 80.7519 0 81.2585V122.849H1440V50.0685C1437.35 49.6885 1434.69 49.3085 1432 48.9485C1349.43 39.0685 1263.52 40.1985 1184.22 53.2985Z" className="colorDetails" />
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
  }
  .colorDetails {
      fill: rgb(var(--colorDetails))
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveAboutUsTop
