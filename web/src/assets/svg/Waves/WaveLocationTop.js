// Imported dependencies
import React from 'react'
import styled from 'styled-components/macro';

const WaveLocationTop = ({ className, ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 131.1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect x="0" className="colorLight" width="1444" height="128" />
        <g>
          <path className="colorYellow" d="M757.7,124.9C469.3,111.7,238.6,0.7,0,56.3v74.8h1444V12.9C1216.6-39.6,1046.1,138,757.7,124.9z" />
        </g>
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
    min-width: 700px;
  }
  .colorYellow {
    fill: rgb(var(--colorYellow));
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
  @media(min-width: 1600px) {
    margin-top: calc(96px - 6vw);
  }
`

export default WaveLocationTop
