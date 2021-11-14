// Imported dependencies
import React from 'react'
import styled, { css } from 'styled-components/macro'
import { navigate } from 'gatsby-link'
// Imported helpers
import { capitilise, camalise } from '../../utils/helpers'
import { useScroll } from '../../hooks/useScroll'
import { motion } from 'framer-motion'

// One button to rule them all
const Button = ({ className, children, to, pad, tPad, rPad, bPad, lPad, xPad, yPad, scrollTop, role = 'button', type ='button', value, ariaLabel, ...props }) => {
  const scrollPos = scrollTop && useScroll()
  const scrollToTop = () => scrollTop && window.scrollTo({ top: 0, behavior: "smooth" })
  return (
    <Container
      className={className}
      tPad={tPad || yPad}
      bPad={bPad || yPad}
      rPad={rPad || xPad}
      lPad={lPad || xPad}
      pad={pad}
      type={type}
      role={role}
      // Either navigate to specified target or if scrollTop prop is true, scroll to top of page
      value={value}
      aria-label={ariaLabel}
      onClick={() => to
        ? navigate(`/${camalise(to)}`)
        : (scrollTop && scrollPos >= 300)
          ? scrollToTop()
          : null}
      {...props}
    >
      {children}
    </Container>
  )
}


// Styles
const Container = styled(motion.button)`
  font-weight: var(--fontWeightNormal);
  padding: 14px 22px;
  z-index: 9;
  outline-offset: 4px;
  &&:hover,
  &&:focus {
    z-index: 10;
  }
  &&:active {
    transition: transform .1s ease, box-shadow .1s ease;
  }
  transition: transform .3s ease;
  ${({ pad }) => pad && css`padding: var(--s${pad})`};
  ${({ tPad }) => tPad && css`padding-top: var(--s${tPad})`};
  ${({ bPad }) => bPad && css`padding-bottom: var(--s${bPad})`};
  ${({ rPad }) => rPad && css`padding-right: var(--s${rPad})`};
  ${({ lPad }) => lPad && css`padding-left: var(--s${lPad})`};
  ${({ model, color }) => model === 1 ? css`
    color: rgb(var(--colorLight));
    border: 2px solid rgb(var(--color${capitilise(color)}));
    background-color: rgb(var(--color${capitilise(color)}));
    :hover {
      box-shadow: var(--level4);
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
  `
    : model === 2 ? css`
      border: 2px solid rgb(var(--color${capitilise(color)}));
      color: rgb(var(--color${capitilise(color)}));
      :hover {
        background-color: rgb(var(--color${capitilise(color)}));
        color: rgb(var(--colorLight));
        box-shadow: var(--level4);
        transform: translateY(-10%)
      }
      :focus {
        background-color: rgb(var(--color${capitilise(color)}));
        color: rgb(var(--colorLight));
      }
      :active {
        transform: translateY(0);
        box-shadow: none;
      }
    `
      : model === "left" ? css`
        background-color: rgb(var(--color${capitilise(color)}));
        border: none;
        border-radius: 12px 0 0 12px;
        svg { transition: transform .3s ease; }
        &&:hover {
          box-shadow: var(--level4);
          transform: translateY(-3%);
          svg { transform: translateX(-5px) rotate(-180deg); }
        }
        &&:active {
          transform: translateY(0) ;
          box-shadow: none;
        }
      `
        : model === "right" ? css`
          background-color: rgba(var(--color${capitilise(color)}));
          border: none;
          border-radius: 0 12px 12px 0;
          svg { transition: transform .3s ease; }
          &&:hover {
            box-shadow: var(--level4);
            transform: translateY(-3%);
            svg { transform: translateX(5px); }
          }
          &&:active {
            transform: translateY(0);
            box-shadow: none;
          }
        `
          : null
  }
`

export default Button
