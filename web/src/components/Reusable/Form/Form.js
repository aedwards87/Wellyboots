// Imported dependencies
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Imported components
import {
  Container,
  Field,
  Text,
} from './FormStyles'


export default function Form({ children, className, bgColor, ...props }) {
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


Form.Field = function FormField({ children, Element, type, name, value, label, disabled, className, ...props }) {
  return (
    <Field
      className={className}
      id={name}
      {...props}
    >
      {children || label}
      <Element
        type={type}
        name={name}
        value={value}
        disabled={disabled}
      />
    </Field>
  )
}

Form.Text = function FormText({ children, className, ...props }) {
  return (<Text className={className} {...props}>{children}</Text>)
}
