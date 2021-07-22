// Imported dependencies
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Slider,
  Card,
  Title,
  Text,
  SVGDividerTop,
  SVGDividerBottom,
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

Locations.Slider = function LocationsSlider({ children, className, data, ...props }) {
  const breakpoints = [
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
  ];

  let settings = {
    sideSize: 0,
    slidesToScroll: 1,
    slidesToShow: 3,
    scrollOnDevice: true,
    lazyLoad: false,
    swipe: true,
    breakpoints: breakpoints,
    // slidesSpacing: 50,
    animationDuration: 650,
    // autoCycle: true
    // nextArrow: <svg>Next</svg>
  };
  return (
    <Slider
      className={className}
      {...settings}
      {...props}
    >
      {children}
    </Slider>
  )
}

Locations.Card = function LocationsCard({ children, className, data, ...props }) {
  return (<Card className={className} data={data} {...props}>{children}</Card>)
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