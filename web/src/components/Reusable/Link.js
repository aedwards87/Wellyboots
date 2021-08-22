// Imported dependencies 
import React from 'react'
import styled, { css } from "styled-components/macro";
import { Link as GatsbyLink } from "gatsby";
// Imported helpers
import { camalise, capitilise } from '../../utils/helpers'
import { motion } from 'framer-motion';

// Component
const Link = ({
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
  fixed,
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
      to={`/${camalise(to)}`}
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
const Container = styled(motion.custom(GatsbyLink))`
  text-decoration: var(--underline, none);
  font-weight: var(--fontWeight);
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
            > span::before {
              background: rgba(var(--lineColor), .8);
              transform: translateY(.18em);
            }
          `
            : (style['--lineColor'] && !$fixed) ? css`
              &:hover,
              &:focus {
                > span::before {
                  background: rgba(var(--lineColor), .8);
                  transform: translateY(.18em);
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
          color: rgb(var(--colorLight));
          :hover {
            box-shadow: var(--level4);
            border: 2px solid rgb(var(--color${capitilise(color)}));
            transform: translateY(-10%)
          }
          :hover,
          :focus {
            filter: brightness(110%);
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