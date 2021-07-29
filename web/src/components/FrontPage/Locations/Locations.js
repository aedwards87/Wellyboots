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
  ButtonContainer,
  Button,
  ArrowSVG
} from './LocationsStyles'

// Imported helpers
import { capitilise } from '../../../utils/helpers'
import { Arrow } from '../../../assets/svg'


export default function Locations({ children, className, bgColor, ...props }) {
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

Locations.Frame = function LocationsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

Locations.Row = function LocationsRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Locations.Column = function LocationsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
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

Locations.ButtonContainer = function LocationsButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}>{children}</ButtonContainer>)
}

Locations.Button = function LocationsButton({ children, className, ...props }) {
  return (<Button className={className} {...props}>{children}</Button>)
}

Locations.ArrowSVG = function LocationsArrowSVG({ children, className, ...props }) {
  return (<ArrowSVG className={className} {...props}>{children}</ArrowSVG>)
}

Locations.Slider = function LocationsSlider({ children, className, data, ...props }) {
  const breakpoints = [
    {
      breakpoint: 420,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 }
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
    nextArrow: (
      <Locations.Button
        model="right"
        yPad={3}
        xPad={5}
        color="light"
        name="infinite-carousel-button-next"
        data-testid="infinite-carousel-button-next"
        className="InfiniteCarouselArrow InfiniteCarouselArrowNext"
        type="button"
      >
        <Locations.ArrowSVG color="dark" />
      </Locations.Button>
    ),
    prevArrow: (
      <Locations.Button
        model="left"
        yPad={3}
        xPad={5}
        color="light"
        name="infinite-carousel-button-previous"
        data-testid="infinite-carousel-button-previous"
        className="InfiniteCarouselArrow InfiniteCarouselArrowPrev"
        type="button"
      >
        <Locations.ArrowSVG color="dark" direction="left" />
      </Locations.Button>
    )
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