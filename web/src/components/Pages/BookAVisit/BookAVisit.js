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
  Group,
} from './BookAVisitStyles'

export default function BookAVisit({ children, className, bgColor, ...props }) {
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

BookAVisit.Frame = function BookAVisitFrame({ children, className, ...props }) {
  return (
    <Frame className={className} {...props}>{children}</Frame>
  )
}

BookAVisit.Row = function BookAVisitRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

BookAVisit.Column = function BookAVisitColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}
BookAVisit.Title = function BookAVisitTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

BookAVisit.Text = function BookAVisitText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

BookAVisit.Link = function BookAVisitLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

BookAVisit.Image = function BookAVisitImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}

BookAVisit.Group = function BookAVisitGroup({ className, ...props }) {
  return (<Group className={className} {...props} />)
}
