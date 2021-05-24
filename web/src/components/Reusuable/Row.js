import React from 'react'
import styled from 'styled-components/macro'

const Row = ({ className, children, rYGap, rXGap = '5vw', rowOrder, columns = "1", ...props }) => {
  // Using .test on regExp searches for any letter found within input, to help determine whether it's a strict value or a selection from a CSS variable value 
  const regExp = /[a-zA-Z]/g
  return (
    <Container
      className={className}
      style={{
        '--rXGap': regExp.test(rXGap) ? rXGap : `var(--s${rXGap})`,
        '--rYGap': regExp.test(rYGap) ? rYGap : `var(--s${rYGap})`,
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
  grid-column-gap: var(--rXGap);
  grid-row-gap: var(--rYGap);
  grid-template-columns: 1fr;
  grid-row: var(--rowOrder);
  @media(min-width: 980px) {
    grid-template-columns: repeat(var(--columns), minmax(calc((100% / var(--columns)) - (var(--rXGap) * 2)), 1fr));
  }
`

export default Row
