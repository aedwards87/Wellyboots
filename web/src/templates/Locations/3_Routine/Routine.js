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
} from './RoutineStyles'


export default function Routine({ children, className, bgColor, ...props }) {
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

Routine.Frame = function RoutineFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Routine.Row = function RoutineRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Routine.Column = function RoutineColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Routine.FootPrintsSVG = function RoutineFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Routine.Title = function RoutineTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Routine.Text = function RoutineText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Routine.ButtonContainer = function RoutineButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}> {children} </ButtonContainer>)
}

Routine.Button = function RoutineButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}

Routine.Link = function RoutineLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Locations.WaveTopSVG = function LocationsWaveTopSVG({ children, className, ...props }) {
  return (<WaveTopSVG className={className} {...props}>{children}</WaveTopSVG>)
}

Locations.WaveBottomSVG = function LocationsWaveBottomSVG({ children, className, ...props }) {
  return (<WaveBottomSVG className={className} {...props}>{children}</WaveBottomSVG>)
}