// Imported dependencies
import React from 'react'
// Imported components
import Details from './Details'
// Imported helpers
import { capitilise } from '../../../utils/helpers'

const DetailsIndex = ({ data: { location: {
  shortName,
  name,
  address,
  contactDetails,
  geoLocation,
  subBrandColors
} } }) => {
  return (
    <Details
      id={`${capitilise(shortName || name)}Details`}
      bgColor={subBrandColors[0].title}
    >
      <Details.DividerTopSVG bgColor={subBrandColors[0].title} />
      <Details.Frame>

        <Details.Row>
          <Details.Column>
            <Details.Title lineColor="light" zIndex="1">{shortName || name} details</Details.Title>
          </Details.Column>
        </Details.Row>

        <Details.Row columns={2} xGap="94px" yGap={9}>
          <Details.Column>
            <Details.Text>
              Details content
            </Details.Text>
          </Details.Column>
          <Details.Column>
            <Details.Text>
              Details map
            </Details.Text>
          </Details.Column>
        </Details.Row>

      </Details.Frame>
      <Details.DividerBottomSVG bgColor={subBrandColors[0].title} />
    </Details>
  )
}

export default DetailsIndex
