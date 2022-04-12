// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  Group,
} from './ContactStyles'

export default function Contact({ children, className, bgColor, ...props }) {
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

Contact.Frame = function ContactFrame({ children, className, ...props }) {
  return (
    <Frame className={className} {...props}>{children}</Frame>
  )
}

Contact.Row = function ContactRow({ children, className, ...props }) {
  return (<Row className={className} {...props}>{children}</Row>)
}

Contact.Column = function ContactColumn({ children, className, ...props }) {
  return (<Column className={className} {...props}>{children}</Column>)
}
Contact.Title = function ContactTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

Contact.Text = function ContactText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

Contact.Link = function ContactLink({ children, className, ...props }) {
  return (<Link className={className} {...props}> {children} </Link>)
}

Contact.Image = function ContactImage({ className, ...props }) {
  let randNumArr = [0]
  // let lastNumber
  let arr = Array(10)
  // // const rand = () => Math.floor(Math.random() * arr.length) + 1
  
  // const getRandNumber = () => {
  //   const rand = Math.floor(Math.random() * arr.length) + 1
  //   randNumArr.map(res => {
  //     console.log(rand == res);
  //     if (rand == res) {
  //       return getRandNumber()
  //     }
  //     return console.log(rand)
  //   })
  // }

  // const handleClick = () => {
  //   const number = getRandNumber()
  //   console.log({number})
  //   console.log(getRandNumber())
  //   lastNumber = number 
  //   randNumArr.push(number)
  // }

  // useEffect(() => {
  //   console.log({randNumArr, lastNumber})
  // }, [randNumArr, lastNumber])
  
  let lastRoll = 0;
  function myFunction() {
    lastRoll = 0
    let thisRoll = lastRoll;
    randNumArr.filter(res => {
      if (thisRoll === res) {
        thisRoll = Math.floor(Math.random() * arr.length) + 1
      }
      return lastRoll = thisRoll;
    })
    console.log(lastRoll);
  }


  return (<Image className={className} onClick={myFunction} {...props} />)
}

Contact.Group = function ContactGroup({ className, ...props }) {
  return (<Group className={className} {...props} />)
}
