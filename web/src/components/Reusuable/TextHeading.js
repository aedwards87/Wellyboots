import React from 'react'
import styled from "styled-components/macro";

const TextHeading = ({ className, children, heading, lineColor, color, ...props }) => {
  const htmlElement = heading === 'Hero' || heading === 'hero' ? 'h1' : heading
  return (
    <Container
      className={className}
      as={htmlElement}
      style={
        heading === 'hero' ? { font: 'var(--heroFont)', } :
          heading === 'h1' ? {} :
            heading === 'h2' ? {} :
              heading === 'h3' ? {} :
                heading === 'h4' ? {} :
                  heading === 'h5' ? {} : null

      }
      color={color}
      {...props}
    >
      <span>
        {children}
      </span>
    </Container>
  )
}

const Container = styled.h1`
  ${({ color }) => `color: ${color}`};
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
`

export default TextHeading
