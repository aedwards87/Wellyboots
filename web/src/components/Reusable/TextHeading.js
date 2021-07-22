import { motion } from 'framer-motion';
import React from 'react'
import styled, { css } from "styled-components/macro";
import { capitilise } from '../../utils/helpers';


const TextHeading = ({ className, children, style, heading, lineColor, weight = 'normal', color, textAlign, small, ...props }) => {
  const htmlElement = heading === 'Hero' || heading === 'hero' ? 'h1' : heading
  const topHeading = heading === 'Hero' || heading === 'hero' || lineColor
  return (
    <Container
      className={className}
      as={htmlElement}
      heading={heading}
      color={color}
      textAlign={textAlign}
      small={small}
      style={style, {
        ...lineColor && { '--lineColor': `var(--color${capitilise(lineColor)})` },
        '--headingFontWeight': `var(--fontWeight${capitilise(weight)})`,
      }}
      {...props}
    >
      {topHeading ?
        <span>{children}</span>
        :
        <>{children}</>
      }
    </Container>
  )
}

const Container = styled.h1`
  ${({ color }) => color && css`color: rgb(var(--color${capitilise(color)}))`};
  ${({ heading }) => heading === 'hero' && css`font: var(--heroFont)`};
  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign};
    > span {
      display: inline-block;
    }
  `};
  font-weight: var(--headingFontWeight);
  z-index: 2;
  span {
    position: relative;
  }
  span:after {
    content: '';
    position: absolute;
    background-color: rgba(var(--lineColor), .8);
    width: 100%;
    height: .4em;
    bottom: 2px;
    left: 0;
    z-index: -1;
  }
  ${({ small }) => small && css`
    font-family: var(--fontPrimaryFamily);
    font-size: var(--s3);
    letter-spacing: var(--s1);
    text-transform: uppercase;
    text-align: center;
    align-self: end;
  `}
`

export default TextHeading
