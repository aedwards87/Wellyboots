// Imported dependencies
import React from 'react'
// Imported components
import Locations from './Locations'
// IMported hooks
import { useCompanyLocationsQuery } from '../../../hooks'

const LocationsIndex = () => {
  const data = useCompanyLocationsQuery()
  return (
    <Locations id="locations" bgColor="yellow">
      <Locations.SVGDividerTop />
      <Locations.Frame yPad={8} bPad={11} yGap={3}>
        <Locations.Row rGap={5}>
          <Locations.Column>
            <Locations.Title heading="h2" lineColor="light">
              Our locations
            </Locations.Title>
          </Locations.Column>
        </Locations.Row>
        <Locations.Row xGap={11} yGap={5}>
          <Locations.Column xAlign="stretch" custom>
            <Locations.Slider>
              {data.locations.nodes.map(({ name }) =>
                <Locations.Card key={name} name={name} />
              )}
            </Locations.Slider>
          </Locations.Column>
        </Locations.Row>
      </Locations.Frame>
      <Locations.SVGDividerBottom />
    </Locations>
  )
}

export default LocationsIndex