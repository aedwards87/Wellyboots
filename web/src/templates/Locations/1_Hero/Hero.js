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
  PortableText,
  FootPrintsSVG,
  WellybootSVG,
  ImageContainer,
  // ImageCarousel,
  Image,
  ButtonContainer,
  Button,
  Link,
} from './HeroStyles'


export default function Hero({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': bgColor }}
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

Hero.WellybootSVG = function HeroWellybootSVG({ children, className, subBrandLogo, ...props }) {
  return (<WellybootSVG dangerouslySetInnerHTML={{ __html: subBrandLogo }} className={className} {...props}>{children}</WellybootSVG>)
}

Hero.FootPrintsSVG = function HeroFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

Hero.Title = function HeroTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Hero.Text = function HeroText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Hero.PortableText = function HeroPortableText({ children, className, lineColor, ...props }) {
  return (
    <PortableText
      className={className}
      serializers={{
        link: ({ children, href }) =>
          href.includes('www.')
            ? <a href={href}>{children}</a>
            : <Link to={href} lineColor={lineColor} fixed>{children}</Link>
      }}
      {...props}
    >
      {children}
    </PortableText>
  )
}

Hero.ImageContainer = function HeroImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}> {children} </ImageContainer>)
}

// Hero.ImageCarousel = function HeroImageCarousel({ children, className, ...props }) {
//   return (<ImageCarousel className={className} {...props}> {children} </ImageCarousel>)
// }

Hero.Image = function HeroImage({ children, className, ...props }) {
  return (<Image className={className} {...props}> {children} </Image>)
}

Hero.ButtonContainer = function HeroButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}> {children} </ButtonContainer>)
}

Hero.Button = function HeroButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}

Hero.Link = function HeroLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}
