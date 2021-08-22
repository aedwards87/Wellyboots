import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { regExpLetterChecker } from '../../utils/helpers'


const Row = ({ className, children, yGap, xGap = '5vw', rowOrder, columns = "1", innerRef, ...props }) => {

  return (
    <Container
      className={className}
      ref={innerRef}
      style={{
        '--rowXGap': regExpLetterChecker(xGap) ? [xGap] : [`var(--s${xGap})`, `var(--s${xGap + 2})`],
        '--rowYGap': regExpLetterChecker(yGap) ? [yGap] : [`var(--s${yGap})`, `var(--s${yGap + 2})`],
        '--rowOrder': rowOrder,
        '--columns': columns,
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  ${({ style }) => style['--rowYGap'][0] && css`grid-row-gap: ${style['--rowYGap'][0]};`}
  ${({ style }) => style['--rowXGap'][0] && css`grid-column-gap: ${style['--rowXGap'][0]};`}
  ${({ style }) => style['--rowOrder'] && css`grid-row: var(--rowOrder);`}
  /* @media(min-width: 420px) {
    ${({ style }) => style['--rowYGap'][1] && css`grid-row-gap: ${style['--rowYGap'][1]};`}
    ${({ style }) => style['--rowXGap'][1] && css`grid-column-gap: ${style['--rowXGap'][1]};`}
  } */
  @media(min-width: 980px) {
    ${({ style }) => style['--columns'] && css`grid-template-columns: repeat(var(--columns), 1fr);`}
    ${({ style }) => style['--rowYGap'][1] && css`grid-row-gap: ${style['--rowYGap'][1]};`}
    ${({ style }) => style['--rowXGap'][1] && css`grid-column-gap: ${style['--rowXGap'][1]};`}
  }
`

export default Row
