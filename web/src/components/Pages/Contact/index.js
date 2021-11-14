// Imported dependencies
import React, { useRef } from 'react'
import { useResizeObserver } from '../../../hooks'
// Imported components
import Form from '../../Reusable/Form/index'
import Contact from './Contact'

// The component
export const ContactIndex = () => {
  const ref = useRef()
  const elementSize = useResizeObserver(ref)
  return (
    <Contact>
      <Contact.Frame bPad={10}>
        <Contact.Row columns={2} xGap='94px' yGap={12}>

          <Contact.Column columnOrder={2} innerRef={ref}>
            <Contact.Row yGap={8}>

              <Contact.Column xAlign="stretch">
                <Contact.Title heading="hero" lineColor="Contact us">Get in touch</Contact.Title>
              </Contact.Column>

              <Contact.Column yGap={8}>
                <Contact.Group>
                  <Contact.Text>
                    Please feel free to contact us about anything, at <strong>Wellyboots Daycare</strong> we are happy to receive any messages and answer any questions.
                  </Contact.Text>
                  <Contact.Text>
                    Alternatively, for other ways to contact us please <Contact.Link to="#company-details" lineColor="Contact us" fixed>click here</Contact.Link>.
                  </Contact.Text>
                </Contact.Group>
                <Form color="Contact us" />
              </Contact.Column>
              
            </Contact.Row>
          </Contact.Column>

          <Contact.Column 
            yGap={3} 
            columnOrder={1} 
            rowOrder={1} 
            yAlign="start" 
            xAlign="center"
          >
            <Contact.Row>
              <Contact.Column elementSize={elementSize[1]}>
                <Contact.Image 
                  name="kid-building-blocks" 
                  // name="kid-splashing-in-puddle" 
                  alt="Girl stacking building blocks"
                  objectFit="contain"
                />
              </Contact.Column>
            </Contact.Row>
          </Contact.Column>

        </Contact.Row>

      </Contact.Frame>
    </Contact>
  )
}

export default ContactIndex