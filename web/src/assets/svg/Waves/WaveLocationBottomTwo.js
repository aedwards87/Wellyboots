// Imported dependencies
import React from 'react'
// Imported dependencies
import styled from 'styled-components/macro';

const WaveLocationTop = ({ className, ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 180"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect y="4" className="colorLight" width="1444" height="176" />
        <path className="colorYellow" d="M0,169.7C368.8,216.4,677.5-13.2,991.7,11.9c214.7,17.2,334.3,38,452.3,17.3V0H0V169.7z" />
      </svg>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: -40px;
  svg {
    min-width: 700px;
  }
  @media(min-width: 1100px) {
    margin-bottom: -4vw;
  }
  .colorYellow {
    fill: rgb(var(--colorYellow));
  }
  .colorLight {
    fill: rgb(var(--colorLight));
  }
`

export default WaveLocationTop
