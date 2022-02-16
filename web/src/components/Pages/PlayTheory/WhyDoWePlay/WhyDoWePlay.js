// Imported dependencies
import React from 'react'
// Imported utilitises
import { capitilise } from '../../../../utils/helpers'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Title,
  Text,
  Link,
  ImageContainer,
  Image,
  ListItem,
  List,
  SVGDividerTop,
  SVGDividerBottom,
  FootPrintsSVG,
} from './WhyDoWePlayStyles'


export default function WhyDoWePlay({ children, className, bgColor, ...props }) {
  return (
    <Container
      className={className}
      style={{ '--sectionBgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))` }}
      {...props}
    >
      {children}
    </Container>
  )
}

WhyDoWePlay.Frame = function WhyDoWePlayFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

WhyDoWePlay.Row = function WhyDoWePlayRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

WhyDoWePlay.Column = function WhyDoWePlayColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

WhyDoWePlay.Nav = function WhyDoWePlayNav({ children, className, ...props }) {
  return (<Nav className={className} {...props}>{children}</Nav>)
}

WhyDoWePlay.Title = function WhyDoWePlayTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

WhyDoWePlay.Text = function WhyDoWePlayText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

WhyDoWePlay.Link = function WhyDoWePlayLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

WhyDoWePlay.List = function WhyDoWePlayList({ children, className, ...props }) {
  return (<List className={className} {...props}> {children} </List>)
}

WhyDoWePlay.ListItem = function WhyDoWePlayListItem({ children, className, ...props }) {
  return (<ListItem className={className} {...props}> {children} </ListItem>)
}

WhyDoWePlay.ImageContainer = function WhyDoWePlayImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}>{children}</ImageContainer>)
}

WhyDoWePlay.Image = function WhyDoWePlayImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}

WhyDoWePlay.FootPrintsSVG = function WhyDoWePlayFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}

WhyDoWePlay.SVGDividerTop = function WhyDoWePlaySVGDivider({ children, className, ...props }) {
  return (<SVGDividerTop className={className} {...props}>{children}</SVGDividerTop>)
}

WhyDoWePlay.SVGDividerBottom = function WhyDoWePlaySVGDivider({ children, className, ...props }) {
  return (<SVGDividerBottom className={className} {...props}>{children}</SVGDividerBottom>)
}