import React from 'react'
import styled from 'styled-components/macro'

const Column = ({ className, children, xGap, yGap, columnOrder, xAlign = "start", xItemsAlign, yAlign, yItemsAlign, rowOrder, ...props }) => {
  // Using .test on regExp searches for any letter found within input, to help determine whether it's a strict value or a selection from a CSS variable value 
  const regExp = /[a-zA-Z]/g
  return (
    <Container
      className={className}
      style={{
        '--columnXGap': regExp.test(xGap) ? xGap : `var(--s${xGap})`,
        '--columnYGap': regExp.test(yGap) ? yGap : `var(--s${yGap})`,
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
  grid-row-gap: var(--columnYGap);
  grid-column-gap: var(--columnXGap);
  justify-items: var(--xItemsAlign);
  justify-content: var(--xAlign);
  align-items: var(--yItemsAlign);
  align-content: var(--yAlign);
  @media(min-width: 980px) {
    grid-column: var(--columnOrder);
    grid-row: var(--rowOrder);
  }
`

export default Column
