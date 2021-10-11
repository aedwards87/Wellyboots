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
  ImageContainer,
  Image,
  Link,
  Table,
} from './RoutineStyles'
// Imported helpers
import { capitilise } from '../../../utils/helpers'


export default function Routine({ children, className, bgColor, ...props }) {
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

Routine.Frame = function RoutineFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Routine.Row = function RoutineRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Routine.Column = function RoutineColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Routine.Title = function RoutineTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Routine.Text = function RoutineText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Routine.ImageContainer = function RoutineImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}>{children}</ImageContainer>)
}

Routine.Image = function RoutineImage({ children, className, ...props }) {
  return (<Image className={className} {...props}>{children}</Image>)
}

Routine.Link = function RoutineLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Routine.Table = function RoutineTable({ children, className, time, lineColor, routine, ...props }) {
  return (
    <Table className={className} lineColor={capitilise(lineColor)} {...props}>
      <tbody>
        <tr>
          <td>{time}</td>
          <td>{routine}</td>
        </tr>
      </tbody>
    </Table>)
}