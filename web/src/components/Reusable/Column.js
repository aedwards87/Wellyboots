import React from 'react'
import styled, { css } from 'styled-components/macro'
import { regExpLetterChecker } from '../../utils/helpers'


const Column = ({ className, children, xGap, yGap, columnOrder, xAlign = "start", xItemsAlign, yAlign, yItemsAlign, rowOrder, ...props }) => {
  return (
    <Container
      className={className}
      style={{
        '--columnXGap': regExpLetterChecker.test(xGap) ? [xGap] : [`var(--s${xGap})`, `var(--s${xGap + 2})`],
        '--columnYGap': regExpLetterChecker.test(yGap) ? [yGap] : [`var(--s${yGap})`, `var(--s${yGap + 2})`],
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

const Container = styled.div`
  display: grid;
  ${({ style }) => style['--columnYGap'][0] && css`grid-row-gap: ${style['--columnYGap'][0]};`}
  ${({ style }) => style['--columnXGap'][0] && css`grid-column-gap: ${style['--columnXGap'][0]};`}
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
