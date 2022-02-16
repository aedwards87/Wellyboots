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
} from './WhatIsPlayStyles'


export default function WhatIsPlay({ children, className, bgColor, ...props }) {
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

WhatIsPlay.Frame = function WhatIsPlayFrame({ children, className, ...props }) {
  return (<Frame className={className} {...props}>{children}</Frame>)
}

WhatIsPlay.Row = function WhatIsPlayRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

WhatIsPlay.Column = function WhatIsPlayColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}

WhatIsPlay.Nav = function WhatIsPlayNav({ children, className, ...props }) {
  return (<Nav className={className} {...props}>{children}</Nav>)
}

WhatIsPlay.Title = function WhatIsPlayTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

WhatIsPlay.Text = function WhatIsPlayText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

WhatIsPlay.Link = function WhatIsPlayLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

WhatIsPlay.List = function WhatIsPlayList({ children, className, ...props }) {
  return (<List className={className} {...props}> {children} </List>)
}

WhatIsPlay.ListItem = function WhatIsPlayListItem({ children, className, ...props }) {
  return (<ListItem className={className} {...props}> {children} </ListItem>)
}

WhatIsPlay.Bulletpoint = function WhatIsPlayBulletpoint({ children, className, ...props }) {
  return (<Bulletpoint className={className} {...props}> {children} </Bulletpoint>)
}

WhatIsPlay.Image = function WhatIsPlayImage({ className, ...props }) {
  return (<Image className={className} {...props} />)
}

WhatIsPlay.FootPrintsSVG = function WhatIsPlayFootPrintsSVG({ children, className, ...props }) {
  return (<FootPrintsSVG className={className} {...props}>{children}</FootPrintsSVG>)
}
