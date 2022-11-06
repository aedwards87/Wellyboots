// Imported dependencies
import React, { useCallback } from 'react'
import { InView } from "react-intersection-observer";

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
  ButtonOuterContainer,
  ButtonInnerContainer,
  Button,
  ArrowSVG,
} from './LocationsStyles'
import { LargeScreen, SmallScreen } from '../../../MediaQueries/MediaQueries'

// Imported helpers
import { capitilise } from '../../../../utils/helpers'
import { buttonContainerVariants, columnVariants, titleVariants } from './LocationsAnimations';


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
  return (
    <InView threshold=".2">
      {({ inView, ref }) => {
        return (
        <Column
          className={className}
          innerRef={ref}
          initial="initial"
          animate={inView && "animate"}
          variants={props.custom && columnVariants}
          {...props}
        >
          {children}
        </Column>
      )}}
    </InView>
  )
}



Locations.Card = function LocationsCard({ children, className, data, ...props }) {
  const removeSmoothScroll = useCallback(() => {
    document.querySelector('html').classList.remove('smooth')
  }, [])
  return (
    <Card
      className={className}
      data={data}
      onClick={() => removeSmoothScroll()}
      {...props}
    >
      {children}
    </Card>
  )
}

Locations.Title = function LocationsTitle({ children, className, ...props }) {
  return (
    <InView threshold=".5">
      {({ inView, ref }) =>
        <Title
          className={className}
          innerRef={ref}
          initial="initial"
          animate={inView && "animate"}
          variants={titleVariants}
          {...props}
        >
          {children}
        </Title>
      }
    </InView>
  )
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

Locations.ButtonContainer = function LocationsButtonContainer({ children, className, next, previous, ...props }) {
  return (
    <InView threshold="1">
      {({ inView, ref }) =>
        <ButtonOuterContainer>
          <ButtonInnerContainer
            className={className}
            ref={ref}
            initial="initial"
            animate={inView && "animate"}
            variants={buttonContainerVariants}
            {...props}
          >
            <Button
              model="left"
              name="previous"
              yPad={3}
              xPad={5}
              color="light"
              onClick={() => previous()}
            >
              <ArrowSVG color="dark" direction="left" />
            </Button>
            <Button
              model="right"
              name="next"
              yPad={3}
              xPad={5}
              color="light"
              onClick={() => next()}
            >
              <ArrowSVG color="dark" />
            </Button>
          </ButtonInnerContainer>
        </ButtonOuterContainer>
      }
    </InView>
  )
}

Locations.Slider = function LocationsSlider({ children, className, data, ...props }) {
  // Change number of cards showing at different screen sizes
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 501 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      partialVisibilityGutter: 70
    }
  };
  return (
    <>
      <LargeScreen>
        <Slider
          className={className}
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          arrows={false}
          renderButtonGroupOutside={true}
          {...props}
        >
          {children}
        </Slider>
      </LargeScreen>
      <SmallScreen>
        <Slider
          className={className}
          itemClass="image-item"
          responsive={responsive}
          infinite={true}
          partialVisible
          arrows={false}
          renderButtonGroupOutside={true}
          {...props}
        >
          {children}
        </Slider>
      </SmallScreen>
    </>
  )
}