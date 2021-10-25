// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Title,
  Link,
  Image,
  ImageContainer,
} from './AccreditationsStyles'


export default function Accreditations({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))` }}
      {...props}
    >
      {children}
    </Container>
  )
}

Accreditations.Frame = function AccreditationsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Accreditations.Row = function AccreditationsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Accreditations.Column = function AccreditationsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Accreditations.Title = function AccreditationsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Accreditations.Link = function AccreditationsLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Accreditations.ImageContainer = function AccreditationsImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}> {children} </ImageContainer>)
}

Accreditations.Image = function AccreditationsImage({ children, className, ...props }) {
  return (<Image className={className} {...props}> {children} </Image>)
}
