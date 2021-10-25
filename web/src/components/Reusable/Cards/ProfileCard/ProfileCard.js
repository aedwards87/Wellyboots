// Imported dependencies
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Imported components
import {
  Container,
  Title,
  Text,
  Image,
  NamePlateContainer,
  Body,
  ImageContainer,
  PortableText,
} from './ProfileCardStyles'
// Imported helpers
import { capitilise } from '../../../../utils/helpers'

// Compound components
export default function ProfileCard({ children, className, bgColor, ...props }) {
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

ProfileCard.Body = function ProfileCardBody({ children, className, ...props }) {
  return (<Body className={className} {...props}>{children}</Body>)
}

ProfileCard.Title = function ProfileCardTitle({ children, className, ...props }) {
  return (<Title className={className} {...props}>{children}</Title>)
}

ProfileCard.Text = function ProfileCardText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}

ProfileCard.PortableText = function ProfileCardPortableText({ children, className, ...props }) {
  return (<PortableText className={className} {...props}>{children}</PortableText>)
}

ProfileCard.ImageContainer = function ProfileCardImageContainer({ children, className, ...props }) {
  return (<ImageContainer className={className} {...props}>{children}</ImageContainer>)
}

ProfileCard.Image = function ProfileCardImage({ children, className, ...props }) {
  return (<Image className={className} {...props}>{children}</Image>)
}

ProfileCard.NamePlateContainer = function ProfileCardNamePlateContainer({ children, className, ...props }) {
  return (<NamePlateContainer className={className} {...props}>{children}</NamePlateContainer>)
}

