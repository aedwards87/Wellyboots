// Imported dependencies
import React from 'react'
// Imported dependencies
import styled from 'styled-components';

const WaveLocationTop = ({ className, width = "1444", height = "128", ...props }) => {
  return (
    <Container>
      <svg
        className={className}
        viewBox="0 0 1444 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g>
          <rect width="1444" height="128" fill="white" />
          <path className="colorYellow" d="M1444.5 9.73077C1217 -42.7696 1046.5 134.899 758 121.731C469.5 108.563 238.647 -2.43084 0 53.2097V976.387C368.926 1023.11 677.751 697.057 992 722.231C1206.82 739.439 1326.39 760.268 1444.5 739.51V9.73077Z" />
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
  @media(min-width: 375px) {
    margin-top: -4rem;
  }
  /* @media(min-width: 980px) {
    margin-top: -1rem;
  } */
  @media(min-width: 1600px) {
    margin-top: calc(55px - 6vw);;
  }
`

export default WaveLocationTop
