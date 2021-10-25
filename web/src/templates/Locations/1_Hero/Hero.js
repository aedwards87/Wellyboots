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
} from './HeroStyles'
// Imported hooks
import { usePaginate } from '../../../hooks'
import { camalise } from '../../../utils/helpers'


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
            ? <a href={href} rel="noopener noreferrer">{children}</a>
            : <Link to={`/${camalise(href)}`} lineColor={lineColor} fixed>{children}</Link>
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

Hero.ImageCarousel = function HeroImageCarousel({ children, className, carousel, alt, images, ...props }) {
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
          carouselImage={1}
          fluid={images.nodes[carouselIndex].image.asset.fluid}
          alt={images.nodes[carouselIndex].image.alt}
        />
        <Image
          carouselImage={2}
          fluid={images.nodes[carouselIndexTwo].image.asset.fluid}
          alt={images.nodes[carouselIndexTwo].image.alt}
        />
      </ImageCarousel>
    </AnimatePresence>
  )
}

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
