// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Columns,
  Title,
  Text,
  Group,
  ProfileCard,
  Link,
  DividerTopSVG,
  DividerBottomSVG,
} from './StaffStyles'
import { capitilise } from '../../../utils/helpers'


export default function Staff({ children, className, bgColor, ...props }) {
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

Staff.Frame = function StaffFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Staff.Row = function StaffRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Staff.Column = function StaffColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Staff.Columns = function StaffColumns({ children, className, ...props }) {
  return (<Columns className={className} {...props}>{children}</Columns>)
}

Staff.Group = function StaffGroup({ children, className, ...props }) {
  return (<Group className={className} {...props}>{children}</Group>)
}

Staff.Title = function StaffTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Staff.Text = function StaffText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Staff.Link = function StaffLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Staff.DividerTopSVG = function StaffDividerTopSVG({ children, className, ...props }) {
  return (<DividerTopSVG className={className} {...props}>{children}</DividerTopSVG>)
}

Staff.DividerBottomSVG = function StaffDividerBottomSVG({ children, className, ...props }) {
  return (<DividerBottomSVG className={className} {...props}>{children}</DividerBottomSVG>)
}

Staff.ProfileCard = function StaffProfileCard({ children, className, ...props }) {
  return (<ProfileCard className={className} {...props}>{children}</ProfileCard>)
}