import React from 'react'
import styled from 'styled-components/macro'

const Column = ({ className, children, cXGap, cYGap, columnOrder, xAlign = "start", rowOrder, ...props }) => {
  // Using .test on regExp searches for any letter found within input, to help determine whether it's a strict value or a selection from a CSS variable value 
  const regExp = /[a-zA-Z]/g
  return (
    <Container
      className={className}
      style={{
        '--cXGap': regExp.test(cXGap) ? cXGap : `var(--s${cXGap})`,
        '--cYGap': regExp.test(cYGap) ? cYGap : `var(--s${cYGap})`,
        '--xAlign': xAlign,
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
  grid-row-gap: var(--cYGap);
  justify-content: var(--xAlign);
  @media(min-width: 980px) {
    grid-column: var(--columnOrder);
    grid-row: var(--rowOrder);
  }
`

export default Column
