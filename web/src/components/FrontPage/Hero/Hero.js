// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
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
// Imported helpers
import { getRandomInt } from '../../../utils/helpers'

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

Hero.ImageCarousel = function HeroImageCarousel({ children, className, src, alt, data = [0], ...props }) {
  const [numberArray, setNumberArray] = useState([0]);
  const [[page, direction], setPage] = useState([0, 0]);
  const carouselIndex = wrap(0, data.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Timer to change images after 4 seconds
  // useEffect(() => {
  //   const Timer = setInterval(() => {
  //     // setIndex(state => (state + 1) % data.length)
  //     paginate(1)
  //   }, 6000)
  //   return () => clearInterval(Timer)
  // })

  useEffect(() => {
    const num = getRandomInt(data.length * 3);
    setNumberArray([num]);
  }, [page]);

  const variants = {
    enter: {
      x: '-100%',
      opacity: 0,
      y: '-50%',
      rotate: '-45deg',
      scale: 1.4,
    },
    center: {
      x: '-63%', /* large screens */
      // x: '-50%',
      opacity: 1,
      y: '-50%', /* large screens */
      // y: '-59.5%',
      scale: 1,
      rotate: `-${numberArray}deg`,
      transition: {
        delay: 1.3,
        type: "spring",
        mass: 3,
        stiffness: 190,
        damping: 40,
      },
    },
    exit: {
      x: 0, /* large screens */
      // x: '-50%',
      opacity: 0,
      transition: {
        delay: 8
      }
    }
  };

  return (
    <AnimatePresence custom={direction}>
      <ImageCarousel
        key={page}
        className={className}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        onClick={() => paginate(1)}
        {...props}
      >
        <motion.img src={data[carouselIndex].src} alt={alt} />
      </ImageCarousel>
    </AnimatePresence>
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
