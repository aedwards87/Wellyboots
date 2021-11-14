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
} from './CurriculumStyles'


export default function Curriculum({ children, className, bgColor, ...props }) {
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

Curriculum.Frame = function CurriculumFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Curriculum.Row = function CurriculumRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Curriculum.Column = function CurriculumColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}
Curriculum.Title = function CurriculumTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Curriculum.Text = function CurriculumText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Curriculum.Link = function CurriculumLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Curriculum.Image = function CurriculumImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}
