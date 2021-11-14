// Imported packages
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { regExpLetterChecker } from '../../utils/helpers'

const Frame = ({
  className,
  children,
  xGap = ['7vw', '7vw'],
  yGap = 8,
  gap,
  pad,
  tPad,
  rPad,
  bPad,
  lPad,
  xPad,
  yPad = 8,
  innerRef,
  ...props
}) => {

  return (
    <Container
      className={className}
      tPad={tPad || yPad}
      bPad={bPad || yPad}
      rPad={rPad || xPad}
      lPad={lPad || xPad}
      pad={pad}
      xGap={xGap}
      yGap={yGap}
      gap={gap}
      ref={innerRef}
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
    min(var(--desktopMaxWidth), calc(100% - (${({ xGap }) => xGap[0]} * 2)))
    1fr;
  ${({ gap }) => gap && css`grid-gap: ${gap}`};
  ${({ xGap }) => xGap && css`grid-column-gap: ${regExpLetterChecker(xGap) ? xGap[0] : `var(--s${xGap})`}`};
  ${({ yGap }) => yGap && css`grid-row-gap: ${regExpLetterChecker(yGap) ? yGap : `var(--s${yGap})`}`};
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
  @media(min-width: 420px) {
    ${({ pad }) => pad && css`padding: var(--s${(pad + 2)}) var(--s${pad})`};
    ${({ tPad }) => tPad && css`padding-top: var(--s${(tPad + 2)})`};
    ${({ bPad }) => bPad && css`padding-bottom: var(--s${(bPad + 2)})`};
    ${({ gap }) => gap && css`grid-gap: ${gap}`};
    ${({ xGap }) => xGap && css`grid-column-gap: ${regExpLetterChecker(xGap) ? xGap[1] : `var(--s${xGap + 2})`}`};
    ${({ yGap }) => yGap && css`grid-row-gap: ${regExpLetterChecker(yGap) ? yGap : `var(--s${yGap + 2})`}`};
    grid-template-columns: 
      1fr 
      min(var(--desktopMaxWidth), calc(100% - (${({ xGap }) => xGap[1]} * 2)))
      1fr;
  }
  @media(min-width: 980px) {
    ${({ gap }) => gap && css`grid-gap: ${gap}`};
    ${({ xGap }) => xGap && css`grid-column-gap: ${regExpLetterChecker(xGap) ? xGap[1] : `var(--s${xGap + 2})`}`};
    ${({ yGap }) => yGap && css`grid-row-gap: ${regExpLetterChecker(yGap) ? yGap : `var(--s${yGap + 2})`}`};
  }
`

export default Frame
