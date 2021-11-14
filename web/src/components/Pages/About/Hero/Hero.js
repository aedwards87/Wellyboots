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
  PortableText,
  Image,
  HeartSVG,
  CrownSVG,
  SunSVG,
} from './HeroStyles'


export default function Hero({ children, className, bgColor, ...props }) {
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

Hero.Frame = function HeroFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Hero.Row = function HeroRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Hero.Column = function HeroColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Hero.FootPrintsSVG = function HeroFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Hero.HeartSVG = function HeroHeartSVG({ children, className, ...props }) {
  return (<HeartSVG className={className} {...props}>{children}</HeartSVG>)
}

Hero.CrownSVG = function HeroCrownSVG({ children, className, ...props }) {
  return (<CrownSVG className={className} {...props}>{children}</CrownSVG>)
}

Hero.SunSVG = function HeroSunSVG({ children, className, ...props }) {
  return (<SunSVG className={className} {...props}>{children}</SunSVG>)
}

Hero.Title = function HeroTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Hero.Text = function HeroText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Hero.PortableText = function HeroPortableText({ children, className, ...props }) {
  return (<PortableText className={className} {...props}>{children}</PortableText>)
}

Hero.Link = function HeroLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Hero.Image = function HeroImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}
