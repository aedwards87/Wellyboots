// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  LinkContainer,
  Link,
  FootPrintsSVG,
  SVGFootPrints,
  Image,
} from './HeroStyles'
// Imported animations
import { carouselVariants } from './HeroAnimations'
// Imported helpers
import { usePaginate } from '../../../hooks/usePaginate'
import { useRandomNumberGenerator } from '../../../hooks/useRandomNumberGenerator'


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

Hero.ImageCarousel = function HeroImageCarousel({ children, className, src, alt, images, ...props }) {
  const [page, direction, paginate, carouselIndex] = usePaginate(images /*, timer */)
  const [number] = useRandomNumberGenerator(images, page)
  return (
    <AnimatePresence>
      <ImageCarousel
        key={page}
        className={className}
        custom={number}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={carouselVariants}
        onClick={() => paginate(1)}
        {...props}
      >
        <Image
          fluid={images[carouselIndex].image.asset.fluid}
          alt={images[carouselIndex].image.alt}
        />
      </ImageCarousel>
    </AnimatePresence>
  )
}

Hero.SVG = function HeroSVG({ children, className, ...props }) {
  return (<SVG className={className} {...props}>{children}</SVG>)
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

Hero.LinkContainer = function HeroLinkContainer({ children, className, ...props }) {
  return (<LinkContainer className={className} {...props}> {children} </LinkContainer>)
}

Hero.Link = function HeroLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}
