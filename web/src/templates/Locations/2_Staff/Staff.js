// Imported dependencies
import React from 'react'
// Imported components
import { capitilise } from '../../../utils/helpers'
import {
  Column, Container, DividerBottomSVG, DividerTopSVG, Frame, GirlSVG, Group, Link, ProfileCard, Row, Text, Title
} from './StaffStyles'


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

Staff.GirlSVG = function StaffGirlSVG({ children, className, ...props }) {
  return (<GirlSVG className={className} {...props}>{children}</GirlSVG>)
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