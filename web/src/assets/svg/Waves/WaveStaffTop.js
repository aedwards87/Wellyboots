// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';
// Imported helpers
import { capitilise } from '../../../utils/helpers';

const WaveStaffTop = ({ className, style, bgColor = 'dark', ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1440 180"
        fill="none"
        style={style, { '--colorStaff': `var(--color${capitilise(bgColor)})` }}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="1440" height="177" className="colorLight" />
        <path d="M275.61 99.68C157.87 92.27 64 109.62 0 130.57V179.5H1440V2C1189.94 19.43 1044.09 150.74 894.61 168.94C714.27 190.9 514.11 114.68 275.61 99.68Z" className="colorStaff" />
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-top: -50px;
  @media (min-width: 980px) {
    margin-top: calc(6rem - 14vw);
  }
  svg {
    width: 100%;
    min-width: 700px;
  }
  .colorStaff {
      fill: rgb(var(--colorStaff))
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveStaffTop
