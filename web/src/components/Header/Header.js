// Imported packages
import React from 'react'
import { useScroll } from '../../hooks/useScroll'

// Imported components
import {
  Container,
  Frame
} from './HeaderStyles'

export default function Header({ classname, color, background, height, position, children, ...props }) {
  const scrollPos = useScroll()
  // console.log({ scrollPos });
  
  return (
    <Container
      classname={classname}
      style={{
        '--color': color,
        '--background': background,
        '--height': height,
        '--position': position,
      }}
      scrollPos={scrollPos}
      {...props}
    >
      {children}
    </Container>
  )
}

Header.Frame = function HeaderFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}
