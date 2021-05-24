// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  ImageCarousel,
  Title,
  Text,
} from './AboutUsStyles'

// Imported helpers
import { capitilise } from '../../../utils/helpers'


export default function AboutUs({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))`
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

AboutUs.Frame = function AboutUsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

AboutUs.Row = function AboutUsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

AboutUs.Column = function AboutUsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

AboutUs.ImageCarousel = function AboutUsImageCarousel({ children, className, ...props }) {
  return (<ImageCarousel className={className} {...props}>{children}</ImageCarousel>)
}

AboutUs.Title = function AboutUsTitle({ children, className, lineColor, ...props }) {
  return (
    <Title
      className={className}
      style={{
        '--lineColor': lineColor && `var(--color${capitilise(lineColor)})`
      }}
      {...props}
    >
      {children}
    </Title>
  )
}

AboutUs.Text = function AboutUsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}