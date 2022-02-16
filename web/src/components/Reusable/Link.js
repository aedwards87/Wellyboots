// Imported dependencies 
import React, { useEffect, useCallback } from 'react'
import styled, { css } from "styled-components/macro";
import { Link as GatsbyLink } from "gatsby";
// Imported helpers
import { camalise, capitilise, toLowerCaseAndHypen } from '../../utils/helpers'
import { motion } from 'framer-motion';

// Component
const Link = ({
  className,
  children,
  underline,
  style,
  to = '/',
  home,
  light,
  normal,
  medium,
  bold,
  color = 'Text',
  hoverColor,
  lineColor,
  dropdown,
  model,
  pad,
  tPad,
  rPad,
  bPad,
  lPad,
  xPad,
  yPad,
  fixed,
  ...props
}) => {
  // Checking to see if it's just a string
  const isString = typeof to === 'string'
  // Checking to see if the data is being dymanically imported via database/cms
  const hasSlug = typeof to === 'object' && to.current
  // Checking to see if the link is to be inside a dropdown
  const hasDropdown = typeof to === 'object' && to.hasDropdown
  // Checking to see if it contains that hashtag
  const hasHash = typeof to === 'string' && to.includes('#')

  // Adds and removes a class to the HTML tag for smooth scrolling
  // It is allowed only for the Location link in the nav and Hash links
  const smoothScroll = useCallback(() => {
    (hasHash || hasDropdown)
      ? document.querySelector('html').classList.add('smooth')
      : document.querySelector('html').classList.remove('smooth')
  }, [])

  // Validation to ensure we don't get a button style link with an underline link
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
      to={home ? "/"
        : to ?
          hasHash ? toLowerCaseAndHypen(to)
            : isString ? to
              : hasSlug ? to.current
                : hasDropdown ? `/#${toLowerCaseAndHypen(to.title)}` : `/${toLowerCaseAndHypen(to.title)}`
          : null
      }
      onMouseDown={() => smoothScroll()}
      model={model}
      $tPad={tPad || yPad}
      $bPad={bPad || yPad}
      $rPad={rPad || xPad}
      $lPad={lPad || xPad}
      $pad={pad}
      $fixed={fixed}
      {...props}
    >
      {lineColor ? <span>{children}</span> : children}
    </Container>
  )
}

// Styles
const Container = styled(motion(GatsbyLink))`
  text-decoration: var(--underline, none);
  font-weight: var(--fontWeight);
  display: inline-block;
  color: ${({ color }) => `rgb(var(--color${capitilise(color)}))`};
  ${({ $pad }) => $pad && css`padding: var(--s${$pad})`};
  ${({ $tPad }) => $tPad && css`padding-top: var(--s${$tPad})`};
  ${({ $bPad }) => $bPad && css`padding-bottom: var(--s${$bPad})`};
  ${({ $rPad }) => $rPad && css`padding-right: var(--s${$rPad})`};
  ${({ $lPad }) => $lPad && css`padding-left: var(--s${$lPad})`};

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
        ${({ style, $fixed }) =>
          (style['--lineColor'] && $fixed) ? css`
            > span { display: inline-block; };
            > span::before {
              background: rgba(var(--lineColor), .7);
              transform: translateY(.05em);
            }
          `
            : (style['--lineColor'] && !$fixed) ? css`
              &[aria-current="page"] {
                > span::before {
                  background: rgba(var(--lineColor), .7);
                  transform: translateY(.15em);
                }
              }
              &:hover,
              &:focus {
                > span::before {
                  background: rgba(var(--lineColor), .7);
                  transform: translateY(.15em);
                }
              }
            ` : null
        }
      `
    )
  }}

  ${({ model, color }) =>
    model && css`
      padding: 14px 22px;
      border: 2px solid rgb(var(--color${capitilise(color)}));
      font-size: calc(var(--fontSizeBody) + .2rem);
      border-radius: 5px;
      outline-offset: 4px;
      z-index: 9;
      transition: transform .3s ease;
      text-align: center;
      &&:active {
        transform: translateY(0);
        box-shadow: none;
        transition: transform .1s ease, box-shadow .1s ease;
      }
      &&:hover,
      &&:focus {
        z-index: 10;
      }
      ${({ model, color }) =>
        model === 1 ? css`
          background-color: rgb(var(--color${capitilise(color)}));
          color: ${({ color }) =>
            color.includes("Dark") || color.includes("dark")
              ? `rgb(var(--colorLight))` : `rgb(var(--colorDark))`};
          :hover {
            box-shadow: var(--level4);
            border: 2px solid rgb(var(--color${capitilise(color)}));
            transform: translateY(-10%)
          }
          :hover,
          :focus {
            filter: brightness(103%);
          }
        `
          : model === 2 ? css`
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
          ` : null
      }
    `
  }
`


export default Link