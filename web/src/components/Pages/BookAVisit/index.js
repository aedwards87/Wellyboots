// Imported dependencies
import React, { useRef } from 'react'
import { useLocationsQuery, useResizeObserver } from '../../../hooks'
// Imported components
import Form from '../../Reusable/Form/index'
import BookAVisit from './BookAVisit'

// The component
export const BookAVisitIndex = () => {
  const ref = useRef()
  const elementSize = useResizeObserver(ref)
  const { locations } = useLocationsQuery()
  const locationNames = locations.nodes.map(name => name.shortName || name.name)
  return (
    <BookAVisit>
      <BookAVisit.Frame bPad={10}>
        <BookAVisit.Row columns={2} xGap='94px' yGap={12}>

          <BookAVisit.Column innerRef={ref} yAlign="start">
            <BookAVisit.Row yGap={8}  >

              <BookAVisit.Column xAlign="stretch">
                <BookAVisit.Title heading="hero" lineColor="Book a visit">
                  Take a tour
                </BookAVisit.Title>
              </BookAVisit.Column>

              <BookAVisit.Column yGap={8}>
                <BookAVisit.Group>
                  <BookAVisit.Text>
                    Please feel free to book a tour us about anything, at <strong>Wellyboots Daycare</strong> we are happy to receive any messages and answer any questions.
                  </BookAVisit.Text>
                  <BookAVisit.Text>
                    Alternatively, for other ways to get in contact with us please&nbsp;
                    <BookAVisit.Link to="#company-details" lineColor="Book a visit" fixed>
                      click here
                    </BookAVisit.Link>.
                  </BookAVisit.Text>
                </BookAVisit.Group>
                <Form 
                  category="Book a visit" 
                  fieldColor="purple"
                  options={locationNames}
                />
              </BookAVisit.Column>
              
            </BookAVisit.Row>
          </BookAVisit.Column>

          <BookAVisit.Column 
            yGap={3} 
            yAlign="start" 
            xAlign="center"
          >
            <BookAVisit.Row>
              <BookAVisit.Column elementSize={elementSize[1]}>
                <BookAVisit.Image 
                  name="kid-building-blocks" 
                  alt="Girl stacking building blocks"
                  objectFit="contain"
                />
              </BookAVisit.Column>
            </BookAVisit.Row>
          </BookAVisit.Column>

        </BookAVisit.Row>

      </BookAVisit.Frame>
    </BookAVisit>
  )
}

export default BookAVisitIndex