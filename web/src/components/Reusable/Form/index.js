// Imported dependencies
import React from 'react'
// Imported components
import Form from './Form'

// The component
export const FormIndex = ({ value = "Book a visit" }) => {
  return (
    <Form>
      <Form.Field
        Element="input"
        type="text"
        name="firstName"
        label="First name"
        value=""
      />
      <Form.Field
        Element="input"
        type="text"
        name="lastName"
        label="Last name"
        value=""
      />
      <Form.Field
        Element="input"
        type="email"
        name="email"
        label="Email address"
        value=""
      />
      <Form.Field
        Element="input"
        type="text"
        name="subject"
        label="Subject"
        value={value}
        disabled
      />
      <Form.Field
        Element="input"
        type="submit"
        value="Submit"
      />
    </Form>
  )
}

export default FormIndex