// Imported dependencies
import React from 'react'
import InView from 'react-intersection-observer'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  ImageContainer,
  Image,
  Title,
  PortableText,
  LinkContainer,
  Link
} from './AboutUsStyles'
// Imported helpers
import { capitilise } from '../../../../utils/helpers'
// Imported animations
import { rowVariants, columnVariants, linkContainerVariants } from './AboutUsAnimations'


export default function AboutUs({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{
        '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))`
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

AboutUs.Frame = function AboutUsFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

AboutUs.Row = function AboutUsRow({ children, className, ...props }) {
  return (
    <InView threshold=".3">
      {({ inView, ref }) =>
        <Row
          className={className}
          innerRef={ref}
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

AboutUs.Column = function AboutUsColumn({ children, className, ...props }) {
  return (<Column className={className} variants={columnVariants} {...props}>{children}</Column>)
}

AboutUs.ImageContainer = function AboutUsImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}>{children}</ImageContainer>)
}

AboutUs.Image = function AboutUsImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}

AboutUs.Title = function AboutUsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

AboutUs.PortableText = function AboutUsPortableText({ children, className, ...props }) {
  return (<PortableText className={className} {...props}>{children}</PortableText>)
}

AboutUs.LinkContainer = function AboutUsLinkContainer({ children, className, ...props }) {
  return (
    <InView threshold=".3">
      {({ inView, ref }) =>
        <LinkContainer
          ref={ref}
          className={className}
          initial="initial"
          animate={inView && "animate"}
          variants={linkContainerVariants}
          {...props}
        >
          {children}
        </LinkContainer>
      }
    </InView>
  )
}

AboutUs.Link = function AboutUsLink({ children, className, ...props }) {
  return (
    <Link
      className={className}
      {...props}
    >{children}</Link>
  )
}