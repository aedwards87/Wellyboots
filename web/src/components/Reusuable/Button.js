// Imported Packages
import React from 'react'
import styled, { css } from 'styled-components/macro'

// Imported helpers
import { capitilise } from '../../utils/helpers'

const Button = ({ className, children, pad, tPad, rPad, bPad, lPad, xPad, yPad, ...props }) => {
  return (
    <Container
      className={className}
      style={{
      }}
      tPad={tPad || yPad}
      bPad={bPad || yPad}
      rPad={rPad || xPad}
      lPad={lPad || xPad}
      pad={pad}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled.button`
  font-weight: var(--fontWeightNormal);
  padding: var(--s3) var(--s5);
  ${({ pad }) => pad && css`padding: var(--s${pad})`};
  ${({ tPad }) => tPad && css`padding-top: var(--s${tPad})`};
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  ${({ rPad }) => rPad && css`padding-right: var(--s${rPad})`};
  ${({ lPad }) => lPad && css`padding-left: var(--s${lPad})`};
  ${({ model, color }) =>
    model === 1 ?
      css`
        background-color: rgb(var(--color${capitilise(color)}));
        color: rgb(var(--colorLight));
        border: none;
        border: 2px solid rgb(var(--color${capitilise(color)}));
        transition: all .3s ease;
        :hover {
          filter: brightness(110%);
          box-shadow: var(--level4);
          border: 2px solid rgb(var(--color${capitilise(color)}));
          transform: translateY(-10%)
        }
      `
      : model === 2 ?
        css`
          border-color: rgb(var(--color${capitilise(color)}));
          color: rgb(var(--color${capitilise(color)}));
          :hover {
            background-color: rgb(var(--color${capitilise(color)}));
            color: rgb(var(--colorLight));
            box-shadow: var(--level4);
            transform: translateY(-10%)
          }
        `
        : null
  }
`

export default Button
