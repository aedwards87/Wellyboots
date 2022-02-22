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
  ImageCarousel,
  Image,
  ButtonContainer,
  Button,
  Link,
  Nav,
  SideNav,
} from './HeroStyles'
// Imported hooks
import { usePaginate } from '../../../hooks'
import { toLowerCaseAndHypen } from '../../../utils/helpers'
import serializers from '../../../components/Reusable/PortableText/Serializers'


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

Hero.WellybootSVG = function HeroWellybootSVG({ className, ...props }) {
  return (<WellybootSVG className={className} {...props} />)
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

Hero.Nav = function HeroNav({ children, className, ...props }) {
  return (<Nav className={className} {...props}>{children}</Nav>)
}

Hero.PortableText = function HeroPortableText({ children, className, lineColor, ...props }) {
  return (
    <PortableText
      className={className}
      serializers={{
        internalLink: ({ children, reference }) => 
          <Link to={`/${toLowerCaseAndHypen(reference)}`} lineColor={lineColor} fixed>{children}</Link>
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

Hero.ImageCarousel = function HeroImageCarousel({ className, carousel, alt, images, ...props }) {
  const [page, direction, paginate, carouselIndex] = usePaginate(images.nodes /*, timer */)
  const [pageTwo, directionTwo, paginateTwo, carouselIndexTwo, setPage] = usePaginate(images.nodes)
  // const x = carousel === 1 ? carouselIndex : carouselIndexTwo
  // console.log({ x })
  // const x = () => {
  //   paginateTwo(1)
  // }

  useEffect(() => {
    paginateTwo(Math.floor(images.nodes.length / 2))
  }, [])

  return (
    <AnimatePresence>
      <ImageCarousel
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        // variants={carouselVariants}
        onClick={() => {
          paginateTwo(1)
          paginate(1)
        }}
        carousel={carousel}
        {...props}
      >
        <Image
          $carouselImage={1}
          image={images.nodes[carouselIndex].image.asset.gatsbyImageData}
          alt={images.nodes[carouselIndex].image.alt}
        />
        <Image
          $carouselImage={2}
          image={images.nodes[carouselIndexTwo].image.asset.gatsbyImageData}
          alt={images.nodes[carouselIndexTwo].image.alt}
        />
      </ImageCarousel>
    </AnimatePresence>
  )
}

Hero.Image = function HeroImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
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

Hero.SideNav = function HeroSideNav({ children, className, ...props }) {
  return (<SideNav className={className} {...props}> {children} </SideNav>)
}
