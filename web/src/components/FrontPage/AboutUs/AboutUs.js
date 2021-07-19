// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  ImageContainer,
  Image,
  Title,
  Text,
  ButtonContainer,
  Button
} from './AboutUsStyles'

// Imported helpers
import { capitilise } from '../../../utils/helpers'


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
  return (<Row className={className} {...props}>{children}</Row>)
}

AboutUs.Column = function AboutUsColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

AboutUs.ImageContainer = function AboutUsImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}>{children}</ImageContainer>)
}

AboutUs.Image = function AboutUsImage({ children, className, ...props }) {
  return (<Image className={className} {...props}>{children}</Image>)
}

AboutUs.Title = function AboutUsTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

AboutUs.Text = function AboutUsText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

AboutUs.ButtonContainer = function AboutUsButtonContainer({ children, className, ...props }) {
  return (<ButtonContainer className={className} {...props}>{children}</ButtonContainer>)
}

AboutUs.Button = function AboutUsButton({ children, className, ...props }) {
  return (<Button className={className} {...props}>{children}</Button>)
}