// Imported dependencies 
import React from 'react'
import styled, { css } from "styled-components/macro";
import { Link } from "gatsby";
// Imported helpers
import { camalise, capitilise } from '../../utils/helpers'

// Component
const TextLink = ({
  className,
  children,
  underline,
  style,
  to = '/',
  light,
  normal,
  medium,
  bold,
  color = 'Text',
  hoverColor,
  lineColor,
  model,
  pad,
  tPad,
  rPad,
  bPad,
  lPad,
  xPad,
  yPad,
  ...props
}) => {

  if (lineColor && model) {
    console.error('You can\'t combine an underline and button style link, please choose one or the other')
  }

  return (
    <Container
      className={className}
      style={style, {
        ...underline && { '--underline': (underline && !lineColor) && 'underline' },
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
      color={capitilise(color)}
      to={to}
      model={model}
      $tPad={tPad || yPad}
      $bPad={bPad || yPad}
      $rPad={rPad || xPad}
      $lPad={lPad || xPad}
      $pad={pad}
      {...props}
    >
      {lineColor ? <span>{children}</span> : children}
    </Container>
  )
}

// Styles
const Container = styled(Link)`
  text-decoration: var(--underline, none);
  font-weight: var(--fontWeight);
  color: ${({ color }) => `rgb(var(--color${capitilise(color)}))`};

  ${({ style, model }) => {
    if (model) { return }
    return (
      style['--lineColor'] && css`
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
    )
  }}

  ${({ model, color }) =>
    model === 1 ? css`
      background-color: rgb(var(--color${capitilise(color)}));
      color: rgb(var(--colorLight));
      border: none;
      border: 2px solid rgb(var(--color${capitilise(color)}));
      :hover {
        box-shadow: var(--level4);
        border: 2px solid rgb(var(--color${capitilise(color)}));
        transform: translateY(-10%)
      }
      :hover,
      :focus {
        filter: brightness(110%);
      }
      :active {
        transform: translateY(0);
        box-shadow: none;
      }
    ` : model === 2 ? css`
        border: 2px solid rgb(var(--color${capitilise(color)}));
        color: rgb(var(--color${capitilise(color)}));
        :hover,
        :focus {
          background-color: rgb(var(--color${capitilise(color)}));
          color: rgb(var(--colorLight));
        }
        :hover {
          color: rgb(var(--colorLight));
          box-shadow: var(--level4);
          transform: translateY(-10%)
        }
        :active {
          transform: translateY(0);
          box-shadow: none;
        }
      ` : null
  }
`


export default TextLink