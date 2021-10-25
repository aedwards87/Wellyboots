// Imported dependencies
import React from 'react'
import Form from '../../Reusable/Form/index'
// Imported components
import Contact from './Contact'

// The component
export const ContactIndex = () => {
  return (
    <Contact>
      <Contact.Frame>

        <Contact.Row>
          <Contact.Column>
            <Contact.Title heading="">Contact us</Contact.Title>
          </Contact.Column>
        </Contact.Row>

        <Contact.Row columns={2} xGap='94px'>
          <Contact.Column yGap={3}>
            <Form />
          </Contact.Column>
          <Contact.Column yGap={3}>
            <Contact.Text>Image</Contact.Text>
          </Contact.Column>
        </Contact.Row>

      </Contact.Frame>
    </Contact>
  )
}

export default ContactIndex