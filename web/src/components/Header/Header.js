// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame
} from './HeaderStyles'

export default function Header({ classname, color, background, height, position, children, ...props }) {
  return (
    <Container
      classname={classname}
      style={{
        '--color': color,
        '--background': background,
        '--height': height,
        '--position': position,
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

Header.Frame = function HeaderFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}
