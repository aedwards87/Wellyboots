// Imported dependencies
import React from 'react'
// Imported components
import {
  Container,
  Frame,
  Row,
  Column,
  Title,
  Text,
  Link,
  Image,
  Bulletpoint,
  List,
  ListItem,
  FootPrintsSVG,
} from './PlayWorkPrinciplesStyles'


export default function PlayWorkPrinciples({ children, className, bgColor, ...props }) {
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

PlayWorkPrinciples.Frame = function PlayWorkPrinciplesFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

PlayWorkPrinciples.Row = function PlayWorkPrinciplesRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

PlayWorkPrinciples.Column = function PlayWorkPrinciplesColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

PlayWorkPrinciples.Nav = function PlayWorkPrinciplesNav({ children, className, ...props }) {
  return (<Nav className={className} {...props}>{children}</Nav>)
}

PlayWorkPrinciples.Title = function PlayWorkPrinciplesTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

PlayWorkPrinciples.Text = function PlayWorkPrinciplesText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

PlayWorkPrinciples.Link = function PlayWorkPrinciplesLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

PlayWorkPrinciples.Image = function PlayWorkPrinciplesImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}

PlayWorkPrinciples.List = function PlayWorkPrinciplesList({ children, className, ...props }) {
  return (<List className={className} {...props}> {children} </List>)
}

PlayWorkPrinciples.ListItem = function PlayWorkPrinciplesListItem({ children, className, ...props }) {
  return (<ListItem className={className} {...props}> {children} </ListItem>)
}

PlayWorkPrinciples.Bulletpoint = function PlayWorkPrinciplesBulletpoint({ children, className, ...props }) {
  return (<Bulletpoint className={className} {...props}> {children} </Bulletpoint>)
}

PlayWorkPrinciples.FootPrintsSVG = function PlayWorkPrinciplesFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}
