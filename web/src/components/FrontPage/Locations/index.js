// Imported packages
import React from 'react'

// Imported components
import Locations from './Locations'

const LocationsIndex = () => {
  return (
    <Locations bgColor="yellow">
      <Locations.Frame yPad={11}>
        <Locations.Row rYGap={5}>
          <Locations.Column>
            <Locations.Title heading="h1" lineColor="light">
              Our locations
            </Locations.Title>
          </Locations.Column>
        </Locations.Row>
        <Locations.Row columns={2} rXGap="5vw" rYGap={5}>
          <Locations.Column>
            Hello
          </Locations.Column>
          <Locations.Column>
            World!
          </Locations.Column>
        </Locations.Row>
      </Locations.Frame>
    </Locations>
  )
}

export default LocationsIndex