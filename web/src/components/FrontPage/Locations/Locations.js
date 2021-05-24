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
} from './LocationsStyles'

// Imported helpers
import { capitilise } from '../../../utils/helpers'


export default function Locations({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--sectionBgColor': `rgb(var(--color${capitilise(bgColor)}))`
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

Locations.Frame = function LocationsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Locations.Row = function LocationsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Locations.Column = function LocationsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

Locations.ImageCarousel = function LocationsImageCarousel({ children, className, ...props }) {
  return (<ImageCarousel className={className} {...props}>{children}</ImageCarousel>)
}

Locations.Title = function LocationsTitle({ children, className, lineColor, ...props }) {
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

Locations.Text = function LocationsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}