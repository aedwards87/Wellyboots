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
  List,
  ListItem,
  Nav,
  Button,
  Span,
  Arrow,
  PortableText,
} from './PoliciesAndProceduresStyles'


export default function PoliciesAndProcedures({ children, className, bgColor, ...props }) {
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

PoliciesAndProcedures.Frame = function PoliciesAndProceduresFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

PoliciesAndProcedures.Row = function PoliciesAndProceduresRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

PoliciesAndProcedures.Column = function PoliciesAndProceduresColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

PoliciesAndProcedures.Title = function PoliciesAndProceduresTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

PoliciesAndProcedures.Text = function PoliciesAndProceduresText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

PoliciesAndProcedures.Link = function PoliciesAndProceduresLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

PoliciesAndProcedures.List = function PoliciesAndProceduresList({ children, className, ...props }) {
  return (<List className={className} {...props}> {children} </List>)
}

PoliciesAndProcedures.ListItem = function PoliciesAndProceduresListItem({ children, className, ...props }) {
  return (<ListItem className={className} {...props}> {children} </ListItem>)
}

PoliciesAndProcedures.Nav = function PoliciesAndProceduresNav({ children, className, innerRef, ...props }) {
      return (<Nav className={className} ref={innerRef} {...props}> {children} </Nav>)
}

PoliciesAndProcedures.Span = function PoliciesAndProceduresSpan({ children, className, ...props }) {
  return (<Span className={className} {...props}> {children} </Span>)
}

PoliciesAndProcedures.Arrow = function PoliciesAndProceduresArrow({ children, className, ...props }) {
  return (<Arrow className={className} {...props}> {children} </Arrow>)
}

PoliciesAndProcedures.Button = function PoliciesAndProceduresButton({ children, className, ...props }) {
  return (<Button className={className} {...props}> {children} </Button>)
}

PoliciesAndProcedures.PortableText = function PoliciesAndProceduresPortableText({ children, className, ...props }) {
  return (
    <PortableText
      serializers={{ cite: ({children}) => <cite>{children}</cite> }}
      className={className} 
      {...props}
    >
      {children}
    </PortableText>
  )
}