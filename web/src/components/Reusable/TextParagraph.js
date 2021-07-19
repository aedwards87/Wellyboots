import React from 'react'
import styled, { css } from "styled-components";

import { capitilise } from '../../utils/helpers'

const TextParagraph = ({ className, children, underline, style, weight = 'normal', color = 'Text', hoverColor, ...props }) => {
  return (
    <Container
      className={className}
      style={style, {
        '--paraFontWeight': `var(--fontWeight${capitilise(weight)})`,
        '--paraFontColor': `var(--color${capitilise(color)})`
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled.p`
  font-weight: var(--paraFontWeight);
  color: rgb(var(--paraFontColor));
  ${({ text }) => text && css`text-align: ${text}`};
  ${({ spacing }) => spacing && css`letter-spacing: ${spacing}`};
  ${({ casing }) => casing && css`text-transform: ${casing}case`}
`

export default TextParagraph