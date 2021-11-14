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
  FootPrintsSVG,
  Image,
  PortableText,
  ImageContainer,
} from './MissionStyles'


export default function Mission({ children, className, bgColor, ...props }) {
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

Mission.Frame = function MissionFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Mission.Row = function MissionRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Mission.Column = function MissionColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Mission.FootPrintsSVG = function MissionFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Mission.Title = function MissionTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Mission.Text = function MissionText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Mission.PortableText = function MissionPortableText({ children, className, ...props }) {
  return (<PortableText className={className} {...props}>{children}</PortableText>)
}

Mission.Link = function MissionLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Mission.ImageContainer = function MissionImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}> {children} </ImageContainer>)
}

Mission.Image = function MissionImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}
