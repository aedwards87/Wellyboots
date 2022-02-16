// Imported dependencies 
import React from 'react'
import styled, { css } from "styled-components/macro";
import { motion } from 'framer-motion';
// Imported helpers 
import { capitilise } from '../../utils/helpers';

const TextHeading = ({ className, children, style, heading, lineColor, weight, color, textAlign, small, zIndex, innerRef, as, font, ...props }) => {
  const htmlElement = heading === 'Hero' || heading === 'hero' ? 'h1' : heading
  const topHeading = heading === 'Hero' || heading === 'hero' || lineColor
  const h2XL = heading === 'h2' && lineColor
  return (
    <motion.div {...props}>
      <Container
        className={className}
        ref={innerRef}
        as={htmlElement || as}
        heading={heading}
        color={color}
        font={font}
        textAlign={textAlign}
        small={small}
        zIndex={zIndex}
        style={style, {
          ...h2XL && { fontSize: `var(--fontSizeh2XL)` },
          ...lineColor && { '--lineColor': `var(--color${capitilise(lineColor)})` },
          ...weight && { '--headingFontWeight': `var(--fontWeight${capitilise(weight)})` },
        }}
        lineColor={lineColor}
        {...props}
      >
        {topHeading ?
          <span>{children}</span>
          :
          <>{children}</>
        }
      </Container>
    </motion.div>
  )
}

const Container = styled(motion.h1)`
  ${({ color }) => color && css`color: rgb(var(--color${capitilise(color)}))`};
  ${({ heading }) => heading === 'hero' && css`font: var(--heroFont)`};
  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign};
    > span {
      display: inline-block;
    }
  `};
  font-weight: var(--headingFontWeight);
  z-index: -1;
  span {
    position: relative;
    ${({ zIndex }) => css`z-index: ${zIndex}`};
  }
  span:after {
    content: '';
    position: absolute;
    background-color: ${({ style }) =>
    (style['--lineColor'] && style['--lineColor'].includes("Light"))
      ? css`rgba(var(--lineColor), .5);`
      : css`rgba(var(--lineColor), .7);`
  };
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
