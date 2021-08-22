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
} from './StaffStyles'


export default function Staff({ children, className, bgColor, ...props }) {
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

Staff.Frame = function StaffFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Staff.Row = function StaffRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Staff.Column = function StaffColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Staff.FootPrintsSVG = function StaffFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Staff.Title = function StaffTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Staff.Text = function StaffText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Staff.ButtonContainer = function StaffButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}> {children} </ButtonContainer>)
}

Staff.Button = function StaffButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}

Staff.Link = function StaffLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Locations.WaveTopSVG = function LocationsWaveTopSVG({ children, className, ...props }) {
  return (<WaveTopSVG className={className} {...props}>{children}</WaveTopSVG>)
}

Locations.WaveBottomSVG = function LocationsWaveBottomSVG({ children, className, ...props }) {
  return (<WaveBottomSVG className={className} {...props}>{children}</WaveBottomSVG>)
}