// Imported dependencies
import React from 'react'
// Imported dependencies
import styled, { css } from 'styled-components';
// Imported helpers
import { capitilise } from '../../utils/helpers'

const Arrow = ({ className, width = 30, height = 14, color = "light", direction, ...props }) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      direction={direction}
      viewBox="0 0 30 14"
      fill="none"
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="colorArrowFill" d="M21.0103 0.941087C21.4375 0.73072 21.9472 0.781377 22.3246 1.07173L28.8246 6.07173C29.1322 6.30835 29.3125 6.67442 29.3125 7.06251C29.3125 7.4506 29.1322 7.81667 28.8246 8.05329L22.3246 13.0533C21.9472 13.3436 21.4375 13.3943 21.0103 13.1839C20.5831 12.9736 20.3125 12.5387 20.3125 12.0625V8.31251H1.9375C1.24714 8.31251 0.6875 7.75286 0.6875 7.06251C0.6875 6.37215 1.24714 5.81251 1.9375 5.81251L20.3125 5.81251V2.06251C20.3125 1.5863 20.5831 1.15145 21.0103 0.941087Z" />
    </Container>
  )
}

const Container = styled.svg`
  
  ${({ color }) =>
    css`
      .colorArrowFill {
        fill: rgb(var(--color${capitilise(color)}))
      }
    `
  } 
`

export default Arrow
