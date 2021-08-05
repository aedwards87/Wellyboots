// Imported dependencies 
import React from 'react'
import styled from "styled-components/macro";
import { Link } from "gatsby";

import { camalise, capitilise } from '../../utils/helpers'

const TextUnderlineLink = ({ className, children, underline, style, to = '/', light, normal, medium, color = 'Text', bold, lineColor, hoverColor, ...props }) => {

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
        ...lineColor && {
          '--lineColor': Array.isArray(lineColor)
            ? `var(--color${capitilise(camalise(lineColor[0].title))})`
            : `var(--color${capitilise(lineColor)})`
        }
      }}
      color={color}
      to={to}
      {...props}
    >
      <span>
        {children}
      </span>
    </Container>
  )
}

const Container = styled(Link)`
  text-decoration: var(--underline, none);
  font-weight: var(--fontWeight);
  color: ${({ color }) => `rgb(var(--color${capitilise(color)}))`};
  > span {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: .58em;
      width: 100%;
      transition: .3s ease-out;
      transform: translateY(.38em);
      z-index: -1;
    }
  }
  &:hover,
  &:focus {
    > span::before {
      background: rgba(var(--lineColor), .8);
      transform: translateY(.18em);
    }
  }
`

export default TextUnderlineLink