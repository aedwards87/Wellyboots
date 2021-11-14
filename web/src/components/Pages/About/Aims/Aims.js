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
  Text,
  Link,
  FootPrintsSVG,
  Image,
  PortableText,
  ImageContainer,
} from './AimsStyles'


export default function Aims({ children, className, bgColor, ...props }) {
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

Aims.Frame = function AimsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Aims.Row = function AimsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Aims.Column = function AimsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Aims.FootPrintsSVG = function AimsFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Aims.Title = function AimsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Aims.Text = function AimsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Aims.PortableText = function AimsPortableText({ children, className, ...props }) {
  return (
    <PortableText
      serializers={{ li: ({children}) => <li>{children}</li> }}
      className={className} 
      {...props}
    >
      {children}
    </PortableText>
  )
}

Aims.Link = function AimsLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Aims.ImageContainer = function AimsImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}> {children} </ImageContainer>)
}

Aims.Image = function AimsImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}
