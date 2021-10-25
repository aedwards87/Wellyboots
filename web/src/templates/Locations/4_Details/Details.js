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
  Group,
  Link,
  Address,
  PhoneSVG,
  ClockSVG,
  EmailSVG,
  SunSVG,
  GoogleMap,
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

Details.Group = function DetailsGroup({ children, className, ...props }) {
  return (<Group className={className} {...props}>{children}</Group>)
}

Details.GoogleMap = function DetailsGoogleMap({ children, className, ...props }) {
  return (<GoogleMap className={className} {...props}> {children} </GoogleMap>)
}

Details.Address = function DetailsAddress({ children, className, ...props }) {
  return (<Address className={className} {...props}> {children} </Address>)
}

Details.Link = function DetailsLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Details.PhoneSVG = function DetailsPhoneSVG({ children, className, ...props }) {
  return (<PhoneSVG className={className} {...props}>{children}</PhoneSVG>)
}

Details.ClockSVG = function DetailsClockSVG({ children, className, ...props }) {
  return (<ClockSVG className={className} {...props}>{children}</ClockSVG>)
}

Details.EmailSVG = function DetailsEmailSVG({ children, className, ...props }) {
  return (<EmailSVG className={className} {...props}>{children}</EmailSVG>)
}

Details.SunSVG = function DetailsSunSVG({ children, className, ...props }) {
  return (<SunSVG className={className} {...props}>{children}</SunSVG>)
}

Details.DividerTopSVG = function DetailsDividerTopSVG({ children, className, ...props }) {
  return (<DividerTopSVG className={className} {...props}> {children} </DividerTopSVG>)
}

Details.DividerBottomSVG = function DetailsDividerBottomSVG({ children, className, ...props }) {
  return (<DividerBottomSVG className={className} {...props}> {children} </DividerBottomSVG>)
}
