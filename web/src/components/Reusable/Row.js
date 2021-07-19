import React from 'react'
import styled from 'styled-components/macro'

const Row = ({ className, children, yGap, xGap = '5vw', rowOrder, columns = "1", ...props }) => {
  // Using .test on regExp searches for any letter found within input, to help determine whether it's a strict value or a selection from a CSS variable value 
  const regExp = /[a-zA-Z]/g
  return (
    <Container
      className={className}
      style={{
        '--rowXGap': regExp.test(xGap) ? xGap : `var(--s${xGap})`,
        '--rowYGap': regExp.test(yGap) ? yGap : `var(--s${yGap})`,
        '--rowOrder': rowOrder,
        '--columns': columns
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-column-gap: var(--rowXGap);
  grid-row-gap: var(--rowYGap);
  grid-template-columns: 1fr;
  grid-row: var(--rowOrder);
  @media(min-width: 980px) {
    grid-template-columns: repeat(var(--columns), minmax(calc((100% / var(--columns)) - (var(--rowXGap) * 2)), 1fr));
    grid-column-gap: var(--rowXGap);
    grid-row-gap: var(--rowYGap);
  }
`

export default Row
