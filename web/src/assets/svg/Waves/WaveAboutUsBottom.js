// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';
// Imported helpers
import { capitilise } from '../../../utils/helpers';

const WaveAboutUsBottom = ({ className, style, bgColor = 'dark', ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1440 126"
        fill="none"
        style={style, { '--colorAboutUs': `var(--color${capitilise(bgColor)})` }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        {...props}
      >
        <rect y="6" width="1440" height="120" className="colorLight" />
        <path d="M725 118.76C837.29 114.39 936.42 77.28 1045.45 62C1137.97 47.81 1238.74 51.09 1329.6 69.64C1367.69 77.26 1403.37 87.55 1440 96.78V0H0V34C44.81 22.38 90.33 12.24 138.48 9.06C340 -6.22 521.76 126.4 725 118.76Z" className="colorAboutUs" />
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
    height: 100%;
    min-width: 700px;
    margin-bottom: -2px;
  }
  .colorAboutUs {
      fill: rgb(var(--colorAboutUs))
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveAboutUsBottom
