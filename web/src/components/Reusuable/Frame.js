// Imported packages
import React from 'react'
import styled, { css } from 'styled-components'


const Frame = ({
  className,
  children,
  xGap = '5vw',
  yGap = '7',
  gap = '5vw',
  pad,
  tPad,
  rPad,
  bPad,
  lPad,
  xPad,
  yPad = 8,
  ...props
}) => {
  // Using .test on regExp searches for any letter found within input, to help determine whether it's a strict value or a selection from a CSS variable value 
  const regExp = /[a-zA-Z]/g
  return (
    <Container
      className={className}
      style={{
        '--gap': gap,
        '--xGap': regExp.test(xGap) ? xGap : `var(--s${xGap})`,
        '--yGap': regExp.test(yGap) ? yGap : `var(--s${yGap})`,
      }}
      tPad={tPad || yPad}
      bPad={bPad || yPad}
      rPad={rPad || xPad}
      lPad={lPad || xPad}
      pad={pad}
      {...props}
    >
      {children}
    </Container>
  )
}


const Container = styled.div`
  display: grid;
  grid-template-columns: 
    1fr 
    min(var(--desktopMaxWidth), calc(100% - (var(--xGap) * 2)))
    1fr;
  grid-column-gap: var(--xGap);
  grid-row-gap: var(--yGap);
  
  ${({ pad }) => pad && css`padding: var(--s${pad})`};
  ${({ tPad }) => tPad && css`padding-top: var(--s${tPad})`};
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  ${({ rPad }) => rPad && css`padding-right: var(--s${rPad})`};
  ${({ lPad }) => lPad && css`padding-left: var(--s${lPad})`};
  > * {
    grid-column: 2;
  }
  > .fullBleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`

export default Frame
