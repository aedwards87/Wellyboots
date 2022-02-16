import { motion } from 'framer-motion'
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { regExpLetterChecker } from '../../utils/helpers'


const Column = ({ className, style, children, gap, xGap, yGap, columnOrder, xAlign = "start", xItemsAlign, yAlign, yItemsAlign, rowOrder, innerRef, ...props }) => {
  return (
    <Container
      className={className}
      ref={innerRef}
      style={style, {
        '--columnXGap': regExpLetterChecker(xGap) ? [xGap] : [`var(--s${xGap})`, `var(--s${xGap + 2})`],
        '--columnYGap': regExpLetterChecker(yGap) ? [yGap] : [`var(--s${yGap})`, `var(--s${yGap + 2})`],
        '--columnGap': regExpLetterChecker(gap) ? [gap] : [`var(--s${gap})`, `var(--s${gap + 2})`],
        '--xAlign': xAlign,
        '--xItemsAlign': xItemsAlign,
        '--yAlign': yAlign,
        '--yItemsAlign': yItemsAlign,
        '--columnOrder': columnOrder,
        '--rowOrder': rowOrder,
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled(motion.div)`
  display: grid;
  position: relative;
  ${({ style }) => style['--columnYGap'][0] && css`grid-row-gap: ${style['--columnYGap'][0]};`}
  ${({ style }) => style['--columnXGap'][0] && css`grid-column-gap: ${style['--columnXGap'][0]};`}
  ${({ style }) => style['--columnGap'][0] && css`gap: ${style['--columnGap'][0]};`}
  ${({ style }) => style['--xItemsAlign'] && css`justify-items: var(--xItemsAlign);`}
  ${({ style }) => style['--xAlign'] && css`justify-content: var(--xAlign);`}
  ${({ style }) => style['--yItemsAlign'] && css`align-items: var(--yItemsAlign);`}
  ${({ style }) => style['--yAlign'] && css`align-content: var(--yAlign);`}
  @media(min-width: 980px) {
    ${({ style }) => (style['--columnYGap'][1]) && css`grid-row-gap: ${style['--columnYGap'][1]};`}
    ${({ style }) => (style['--columnXGap'][1]) && css`grid-column-gap: ${style['--columnXGap'][1]};`}
    ${({ style }) => style['--columnOrder'] && css`grid-column: var(--columnOrder);`}
    ${({ style }) => style['--rowOrder'] && css`grid-row: var(--rowOrder);`}
  }
`

export default Column
