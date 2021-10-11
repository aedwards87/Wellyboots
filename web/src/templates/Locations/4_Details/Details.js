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
  DividerTopSVG,
  DividerBottomSVG,
} from './DetailsStyles'
// Imported helpers
import { capitilise } from '../../../utils/helpers'

export default function Details({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': `rgb(var(--color${capitilise(bgColor)}))` }}
      {...props}
    >
      {children}
    </Container>
  )
}

Details.Frame = function DetailsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Details.Row = function DetailsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Details.Column = function DetailsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Details.Title = function DetailsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Details.Text = function DetailsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Details.Link = function DetailsLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Details.DividerTopSVG = function DetailsDividerTopSVG({ children, className, ...props }) {
  return (<DividerTopSVG className={className} {...props}> {children} </DividerTopSVG>)
}

Details.DividerBottomSVG = function DetailsDividerBottomSVG({ children, className, ...props }) {
  return (<DividerBottomSVG className={className} {...props}> {children} </DividerBottomSVG>)
}
