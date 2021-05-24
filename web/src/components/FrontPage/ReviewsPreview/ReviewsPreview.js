// Imported packages
import React from 'react'

// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  ImageCarousel,
  Title,
  Text,
} from './ReviewsPreviewStyles'

// Imported helpers
import { capitilise } from '../../../utils/helpers'


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
  return (<Row className={className} {...props}>{children}</Row>)
}

ReviewsPreview.Column = function ReviewsPreviewColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

ReviewsPreview.ImageCarousel = function ReviewsPreviewImageCarousel({ children, className, ...props }) {
  return (<ImageCarousel className={className} {...props}>{children}</ImageCarousel>)
}

ReviewsPreview.Title = function ReviewsPreviewTitle({ children, className, lineColor, ...props }) {
  return (
    <Title
      className={className}
      style={{
        '--lineColor': lineColor && `var(--color${capitilise(lineColor)})`
      }}
      {...props}
    >
      {children}
    </Title>
  )
}

ReviewsPreview.Text = function ReviewsPreviewText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}