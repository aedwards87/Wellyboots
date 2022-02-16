// Imported dependencies
import React from 'react'
import { capitilise } from '../../../utils/helpers'
// Imported components
import {
  Container,
  InnerContainer,
  Frame,
  Title,
  Text,
  Link,
  List,
  ListItem,
  Button,
  Span,
  Arrow,
} from './SideNavStyles'


export default function SideNav({ children, className, bgColor, innerRef, ...props }) {
  return (
    <Container
      className={className}
      ref={innerRef}
      style={{ '--bgColor': bgColor && `rgb(var(--color${capitilise(bgColor)}))` }}
      {...props}
    >
      {children}
    </Container>
  )
}

SideNav.InnerContainer = function SideNavInnerContainer({ children, className, ...props }) {
  return (<InnerContainer className={className} {...props}>{children}</InnerContainer>)
}

SideNav.Frame = function SideNavFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

SideNav.LargeScreen = function SideNavLargeScreen({ children, className, ...props }) {
  return (<LargeScreen className={className} {...props}>{children}</LargeScreen>)
}

SideNav.SmallScreen = function SideNavSmallScreen({ children, className, ...props }) {
  return (<SmallScreen className={className} {...props}>{children}</SmallScreen>)
}

SideNav.Title = function SideNavTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

SideNav.Text = function SideNavText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

SideNav.Link = function SideNavLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

SideNav.List = function SideNavList({ children, className, ...props }) {
  return (<List className={className} {...props}> {children} </List>)
}

SideNav.ListItem = function SideNavListItem({ children, className, ...props }) {
  return (<ListItem className={className} {...props}> {children} </ListItem>)
}

SideNav.Nav = function SideNavNav({ children, className, innerRef, ...props }) {
      return (<Nav className={className} ref={innerRef} {...props}> {children} </Nav>)
}

SideNav.Span = function SideNavSpan({ children, className, ...props }) {
  return (<Span className={className} {...props}> {children} </Span>)
}

SideNav.Arrow = function SideNavArrow({ children, className, ...props }) {
  return (<Arrow className={className} {...props}> {children} </Arrow>)
}

SideNav.Button = function SideNavButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}