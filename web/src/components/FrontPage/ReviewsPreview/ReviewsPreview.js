// Imported dependencies
import React from 'react'
import InView from 'react-intersection-observer'
import { AnimatePresence } from 'framer-motion'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Title,
  TextContainer,
  Text,
  QuoteMarkSVG,
  Line,
  ButtonContainer,
  Button,
  ArrowSVG,
  SVGDividerTop,
  SVGDividerBottom,
  SliderAnimation,
  CrownSVG,
  CarSVG,
  GirlSVG,
  HeartSVG,
} from './ReviewsPreviewStyles'
// Imported helpers
import { capitilise } from '../../../utils/helpers'
// Imported animations
import { animateAPI, columnVariants, rowVariants } from './ReviewsPreviewAnimations'
import { buttonContainerVariants } from './ReviewsPreviewAnimations'


export default function ReviewsPreview({ children, className, bgColor, ...props }) {
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

ReviewsPreview.Frame = function ReviewsPreviewFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

ReviewsPreview.Row = function ReviewsPreviewRow({ children, className, ...props }) {
  return (
    <InView threshold="0.05">
      {({ inView, ref }) =>
        <Row
          innerRef={ref}
          className={className}
          initial="initial"
          animate={inView && "animate"}
          variants={rowVariants}
          {...props}
        >
          {children}
        </Row>
      }
    </InView>
  )
}

ReviewsPreview.Column = function ReviewsPreviewColumn({ children, className, ...props }) {
  return (
    <InView threshold=".3">
      {({ inView, ref }) =>
        <Column
          innerRef={ref}
          className={className}
          initial="initial"
          animate={inView && "animate"}
          variants={columnVariants}
          {...props}
        >
          {children}
        </Column>
      }
    </InView>
  )
}

ReviewsPreview.Title = function ReviewsPreviewTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

ReviewsPreview.TextContainer = function ReviewsPreviewTextContainer({ children, className, weight, color, ...props }) {
  return (
    <TextContainer
      className={className}
      style={{
        '--paraFontWeight': `var(--fontWeight${capitilise(weight)})`,
        '--paraFontColor': `var(--color${capitilise(color)})`
      }}
      {...props}
    >
      {children}
    </TextContainer>
  )
}

ReviewsPreview.Text = function ReviewsPreviewText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

ReviewsPreview.QuoteMarkSVG = function ReviewsPreviewQuoteMarkSVG({ children, className, ...props }) {
  return (<QuoteMarkSVG className={className} {...props}>{children}</QuoteMarkSVG>)
}

ReviewsPreview.Line = function ReviewsPreviewLine({ children, className, ...props }) {
  return (<Line className={className} {...props}>{children}</Line>)
}

ReviewsPreview.ButtonContainer = function ReviewsPreviewButtonContainer({ children, className, ...props }) {
  return (
    <InView threshold=".3">
      {({ inView, ref }) =>
        <ButtonContainer
          ref={ref}
          className={className}
          initial="initial"
          animate={inView && "animate"}
          variants={buttonContainerVariants}
          {...props}
        >
          {children}
        </ButtonContainer>
      }
    </InView>
  )
}


ReviewsPreview.Button = function ReviewsPreviewButton({ children, className, ...props }) {
  return (<Button className={className} {...props}>{children}</Button>)
}

ReviewsPreview.ArrowSVG = function ReviewsPreviewArrowSVG({ children, className, ...props }) {
  return (<ArrowSVG className={className} {...props}>{children}</ArrowSVG>)
}

ReviewsPreview.SVGDividerTop = function ReviewsPreviewSVGDivider({ children, className, ...props }) {
  return (<SVGDividerTop className={className} {...props}>{children}</SVGDividerTop>)
}

ReviewsPreview.SVGDividerBottom = function ReviewsPreviewSVGDivider({ children, className, ...props }) {
  return (<SVGDividerBottom className={className} {...props}>{children}</SVGDividerBottom>)
}

ReviewsPreview.CarSVG = function ReviewsPreviewCarSVG({ children, className, ...props }) {
  return (<CarSVG className={className} {...props}>{children}</CarSVG>)
}

ReviewsPreview.CrownSVG = function ReviewsPreviewCrownSVG({ children, className, ...props }) {
  return (<CrownSVG className={className} {...props}>{children}</CrownSVG>)
}

ReviewsPreview.GirlSVG = function ReviewsPreviewGirlSVG({ children, className, ...props }) {
  return (<GirlSVG className={className} {...props}>{children}</GirlSVG>)
}

ReviewsPreview.HeartSVG = function ReviewsPreviewHeartSVG({ children, className, ...props }) {
  return (<HeartSVG className={className} {...props}>{children}</HeartSVG>)
}

ReviewsPreview.SliderAnimation = function ReviewsPreviewSliderAnimation({
  children,
  className,
  direction,
  page,
  paginate,
  ...props
}) {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };
  return (
    <AnimatePresence initial={false} custom={direction}>
      <SliderAnimation
        key={page}
        className={className}
        custom={direction}
        className='grabbing'
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        {...animateAPI}
        {...props}
      >
        {children}
      </SliderAnimation>
    </AnimatePresence>
  )
}
