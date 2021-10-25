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
  Image,
  DividerTopSVG,
  DividerBottomSVG,
  PortableText,
} from './MastermindStyles'
// Imported helpers
import { capitilise } from '../../../../utils/helpers'


export default function Mastermind({ children, className, bgColor, ...props }) {
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

Mastermind.Frame = function MastermindFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Mastermind.Row = function MastermindRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Mastermind.Column = function MastermindColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Mastermind.Title = function MastermindTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Mastermind.Text = function MastermindText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Mastermind.Link = function MastermindLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Mastermind.Image = function MastermindImage({ children, className, ...props }) {
  return (<Image className={className} {...props}> {children} </Image>)
}

Mastermind.DividerTopSVG = function MastermindDividerTopSVG({ children, className, ...props }) {
  return (<DividerTopSVG className={className} {...props}>{children}</DividerTopSVG>)
}

Mastermind.DividerBottomSVG = function MastermindDividerBottomSVG({ children, className, ...props }) {
  return (<DividerBottomSVG className={className} {...props}>{children}</DividerBottomSVG>)
}

Mastermind.PortableText = function MastermindPortableText({ children, className, ...props }) {
  return (<PortableText className={className} {...props}>{children}</PortableText>)
}
