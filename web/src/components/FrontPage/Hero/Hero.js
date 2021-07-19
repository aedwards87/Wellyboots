// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  ImageCarousel,
  SVG,
  Title,
  Text,
  ButtonContainer,
  Button,
  SVGFootPrints,
} from './HeroStyles'

export default function Hero({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--sectionBgColor': bgColor
      }}
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

Hero.ImageCarousel = function HeroImageCarousel({ children, className, src, alt, ...props }) {
  return (
    <ImageCarousel className={className} {...props}>
      <img src={src} alt={alt} />
    </ImageCarousel>
  )
}

Hero.SVG = function HeroSVG({ children, className, ...props }) {
  return (<SVG className={className} {...props}>{children}</SVG>)
}

Hero.SVGFootPrints = function HeroSVGFootPrints({ children, className, ...props }) {
  return (<SVGFootPrints className={className} {...props}>{children}</SVGFootPrints>)
}

Hero.Title = function HeroTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Hero.Text = function HeroText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Hero.ButtonContainer = function HeroButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}>{children}</ButtonContainer>)
}

Hero.Button = function HeroButton({ children, className, ...props }) {
  return (
    <Button
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}
