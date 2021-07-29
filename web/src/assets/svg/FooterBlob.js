import React from 'react'
import styled, { css } from 'styled-components/macro'
import { capitilise } from '../../utils/helpers'

const FooterBlob = ({ className, width = "918", height = "126", color = "dark pink", ...props }) => {
  return (
    <Container
      className={className}
      width={width}
      height={height}
      color={color}
      viewBox="0 0 918 126"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="colorFooterBlob" d="M372.375 0.0717697C499.513 -1.48459 620.749 24.9495 709.375 52.9747C798 81 844 99 918 125.572H0C128.817 73.6358 232.364 1.78571 372.375 0.0717697Z" fill={color} />
    </Container>
  )
}

const Container = styled.svg`
  ${({ color }) =>
    css`
      .colorFooterBlob {
        fill: rgb(var(--color${capitilise(color)}));
      }
    `
  } 
`

export default FooterBlob
