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
  ButtonContainer,
  Button,
  Link,
  WaveTopSVG,
  WaveBottomSVG,
} from './DetailsStyles'


export default function Details({ children, className, bgColor, ...props }) {
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

Details.Frame = function DetailsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Details.Row = function DetailsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Details.Column = function DetailsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Details.FootPrintsSVG = function DetailsFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Details.Title = function DetailsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Details.Text = function DetailsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Details.ButtonContainer = function DetailsButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}> {children} </ButtonContainer>)
}

Details.Button = function DetailsButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}

Details.Link = function DetailsLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Locations.WaveTopSVG = function LocationsWaveTopSVG({ children, className, ...props }) {
  return (<WaveTopSVG className={className} {...props}>{children}</WaveTopSVG>)
}

Locations.WaveBottomSVG = function LocationsWaveBottomSVG({ children, className, ...props }) {
  return (<WaveBottomSVG className={className} {...props}>{children}</WaveBottomSVG>)
}