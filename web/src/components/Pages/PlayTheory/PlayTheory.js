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
  Image,
} from './PlayTheoryStyles'


export default function PlayTheory({ children, className, bgColor, ...props }) {
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

PlayTheory.Frame = function PlayTheoryFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

PlayTheory.Row = function PlayTheoryRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

PlayTheory.Column = function PlayTheoryColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}
PlayTheory.Title = function PlayTheoryTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

PlayTheory.Text = function PlayTheoryText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

PlayTheory.Link = function PlayTheoryLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

PlayTheory.Image = function PlayTheoryImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}
