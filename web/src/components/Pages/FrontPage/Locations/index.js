// Imported dependencies
import React from 'react'
// Imported components
import Locations from './Locations'
// Imported hooks
import { useLocationsQuery } from '../../../../hooks'

const LocationsIndex = () => {
  const data = useLocationsQuery()
  return (
    <Locations id="locations" bgColor="yellow">
      <Locations.SVGDividerTop />
      <Locations.Frame yPad={0} tPad={8} yGap={3}>
        <Locations.Row rGap={5}>
          <Locations.Column>
            <Locations.Title heading="h2" lineColor="light" zIndex="1">
              Our locations
            </Locations.Title>
          </Locations.Column>
        </Locations.Row>
        <Locations.Row xGap={11} yGap={5} custom>
          <Locations.Column xAlign="stretch" custom>
            <Locations.Slider
              customButtonGroup={
                <Locations.ButtonContainer />
              }
            >
              {data.locations.nodes.map((d) =>
                <Locations.Card key={d.name} data={d} />
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