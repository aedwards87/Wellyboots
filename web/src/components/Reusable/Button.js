// Imported Packages
import { navigate } from 'gatsby-link'
import React from 'react'
import styled, { css } from 'styled-components/macro'

// Imported helpers
import { capitilise, camalise } from '../../utils/helpers'

const Button = ({ className, children, to, pad, tPad, rPad, bPad, lPad, xPad, yPad, ...props }) => {
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
      onClick={() => navigate(camalise(to))}
      {...props}
    >
      {children}
    </Container>
  )
}

const Container = styled.button`
  font-weight: var(--fontWeightNormal);
  padding: var(--s3) var(--s5);
  z-index: 1;
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
        transition: transform .3s ease;
        :hover {
          filter: brightness(110%);
          box-shadow: var(--level4);
          border: 2px solid rgb(var(--color${capitilise(color)}));
          transform: translateY(-10%)
        }
        :active {
          transform: translateY(0);
          box-shadow: none;
          transition: transform .1s ease;
        }
      `
      : model === 2 ?
        css`
          border: 2px solid rgb(var(--color${capitilise(color)}));
          color: rgb(var(--color${capitilise(color)}));
          transition: transform .3s ease;
          :hover {
            background-color: rgb(var(--color${capitilise(color)}));
            color: rgb(var(--colorLight));
            box-shadow: var(--level4);
            transform: translateY(-10%)
          }
          :active {
            transform: translateY(0);
            box-shadow: none;
            transition: transform .1s ease;
          }
        `
        : model === "left" ?
          css`
            background-color: rgb(var(--color${capitilise(color)}));
            border: none;
            border-radius: 12px 0 0 12px;
            svg {
              transition: all .3s ease;
            }
            :hover {
              box-shadow: var(--level4);
              transform: translateY(-3%);
              z-index: 1;
              svg {
                transform: translateX(-5px) rotate(-180deg);
              }
            }
            :active {
              transform: translateY(0);
              box-shadow: none;
              transition: transform .1s ease;
            }
          `
          : model === "right" ?
            css`
              background-color: rgba(var(--color${capitilise(color)}));
              border: none;
              border-radius: 0 12px 12px 0;
              svg {
                transition: all .3s ease;
              }
              :hover {
                box-shadow: var(--level4);
                transform: translateY(-3%);
                z-index: 1;
                svg {
                  transform: translateX(5px);
                }
              }
              :active {
                transform: translateY(0);
                box-shadow: none;
                transition: transform .1s ease;
              }
            `
            : null
  }
`

export default Button
