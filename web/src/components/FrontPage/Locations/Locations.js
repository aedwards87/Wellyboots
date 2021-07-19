// Imported dependencies
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Slider,
  Title,
  Text,
  SVGDividerTop,
  SVGDividerBottom,
} from './LocationsStyles'
import LocationCard from '../../Reusable/LocationCard'

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

Locations.Slider = function LocationsSlider({ children, className, data, ...props }) {
  return (
    <Slider
      className={className}
      {...props}
    >
      <LocationCard data={data}>
        {children}
      </LocationCard>
      <LocationCard data={data}>
        {children}
      </LocationCard>
      <LocationCard data={data}>
        {children}
      </LocationCard>
      <LocationCard data={data}>
        {children}
      </LocationCard>
      <LocationCard data={data}>
        {children}
      </LocationCard>
    </Slider>
  )
}

Locations.Title = function LocationsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Locations.Text = function LocationsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Locations.SVGDividerTop = function LocationsSVGDivider({ children, className, ...props }) {
  return (<SVGDividerTop className={className} {...props}>{children}</SVGDividerTop>)
}

Locations.SVGDividerBottom = function LocationsSVGDivider({ children, className, ...props }) {
  return (<SVGDividerBottom className={className} {...props}>{children}</SVGDividerBottom>)
}