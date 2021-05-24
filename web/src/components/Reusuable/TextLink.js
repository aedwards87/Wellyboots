import React from 'react'
import styled from "styled-components";
import { Link } from "gatsby";

import { capitilise } from '../../utils/helpers'

const TextLink = ({ className, children, underline, style, to, light, normal, medium, color = 'Text', bold, hoverColor, ...props }) => {

  // console.log({ style })
  return (
    <Container
      className={className}
      style={style, {
        '--underline': underline && 'underline',
        '--fontWeight':
          light ? 'var(--fontWeightLight)' :
            normal ? 'var(--fontWeightNormal)' :
              medium ? 'var(--fontWeightMedium)' :
                bold ? 'var(--fontWeightBold)' : 'var(--fontWeightNormal)',
      }}
      color={capitilise(color)}
      to={to}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled(Link)`
  text-decoration: var(--underline, none);
  font-weight: var(--fontWeight);
  color: ${({ color }) => `rgb(var(--color${color}))`};
`

export default TextLink