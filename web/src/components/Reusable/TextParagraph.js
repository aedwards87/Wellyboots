// Imported dependencies 
import React from 'react'
import styled, { css } from "styled-components/macro";
import { motion } from 'framer-motion';
// Imported helpers 
import { capitilise } from '../../utils/helpers'

const TextParagraph = ({ className, children, underline, style, weight = 'normal', color = 'Text', hoverColor, textAlign, ...props }) => {
  return (
    <Container
      className={className}
      style={style, {
        '--paraFontWeight': `var(--fontWeight${capitilise(weight)})`,
        '--paraFontColor': `var(--color${capitilise(color)})`
      }}
      textAlign={textAlign}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled(motion.p)`
  font-weight: var(--paraFontWeight);
  color: rgb(var(--paraFontColor));
  ${({ textAlign }) => textAlign && css`text-align: ${textAlign}`};
  ${({ spacing }) => spacing && css`letter-spacing: ${spacing}`};
  ${({ casing }) => casing && css`text-transform: ${casing}case`}
`

export default TextParagraph