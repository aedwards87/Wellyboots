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
  ExternalLink,
} from './ProspectusStyles'


export default function Hero({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': bgColor }}
      {...props}
    >
      {children}
    </Container>
  )
}

Hero.Frame = function HeroFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Hero.Row = function HeroRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Hero.Column = function HeroColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Hero.Title = function HeroTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Hero.Link = function HeroLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Hero.ExternalLink = function HeroExternalLink({ children, className, ...props }) {
  return (<ExternalLink className={className} {...props}> {children} </ExternalLink>)
}