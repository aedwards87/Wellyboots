// Imported dependencies
import React from 'react'

// Imported components
import Locations from './Locations'

const LocationsIndex = () => {
  return (
    <Locations id="locations" bgColor="yellow">
      <Locations.SVGDividerTop />
      <Locations.Frame yPad={8}>
        <Locations.Row rGap={5}>
          <Locations.Column>
            <Locations.Title heading="h1" lineColor="light">
              Our locations
            </Locations.Title>
          </Locations.Column>
        </Locations.Row>
        <Locations.Row xGap={11} yGap={5}>
          <Locations.Column xAlign="stretch">
            <Locations.Slider />
          </Locations.Column>

        </Locations.Row>
      </Locations.Frame>
      <Locations.SVGDividerBottom />
    </Locations>
  )
}

export default LocationsIndex