// Imported dependencies
import React from 'react'
// Imported components
import Details from './Details'
// Imported helpers
import { addSpaceToString, capitilise, changeTimeFormat } from '../../../utils/helpers'
import { Sun } from '../../../assets/svg'


const DetailsIndex = ({ data: { location: {
  shortName,
  name,
  address,
  dayAndTime,
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
      <Details.Frame bPad={9}>

        <Details.Row>
          <Details.Column>
            <Details.Title lineColor="light" zIndex="1">{shortName || name} details</Details.Title>
          </Details.Column>
        </Details.Row>

        <Details.Row columns={2} xGap={5} yGap={5}>
          <Details.Column xAlign="stretch">

            <Details.Row columns={2} xGap={5} custom>

              <Details.Column yAlign="start">
                <Details.PhoneSVG colorOne="light" colorTwo="dark" />
                <Details.Group>
                  <Details.Text>
                    {contactDetails.telephoneNumber &&
                      <React.Fragment>
                        <span>Direct:</span>
                        <span>{addSpaceToString(contactDetails.telephoneNumber)}</span>
                      </React.Fragment>
                    }
                    <span>Kelly Page:</span>
                    <span>{addSpaceToString(contactDetails.mobileNumber)}</span>
                  </Details.Text>
                </Details.Group>
                <Details.EmailSVG colorOne="light" colorTwo="dark" />
                <Details.Group>
                  <Details.Text>
                    {contactDetails.emailAddressOne && contactDetails.emailAddressOne} <br />
                    {contactDetails.emailAddressTwo && contactDetails.emailAddressTwo}
                  </Details.Text>
                </Details.Group>
              </Details.Column>

              <Details.Column yAlign="start" xAlign="stretch">
                <Details.SunSVG />
                <Details.ClockSVG colorOne="dark" colorTwo="light" />
                <Details.Group>
                  <Details.Text>
                    {dayAndTime.map(dt =>
                      <React.Fragment key={dt.day}>
                        <span>{dt.day}</span>
                        <span>{changeTimeFormat(dt.opensAt)} – {changeTimeFormat(dt.closesAt)}</span>
                      </React.Fragment>
                    )}
                    {(dayAndTime.length === 4) && <><span>Friday</span><span>Closed</span></>}
                    <span>Saturday</span><span>Closed</span>
                    <span>Sunday</span><span>Closed</span>
                  </Details.Text>
                </Details.Group>
              </Details.Column>

            </Details.Row>
          </Details.Column>
          <Details.Column custom>
            <Details.GoogleMap
              address={address}
              center={{ lat: geoLocation.lat, lng: geoLocation.lng }}
              colors={subBrandColors}
            />
          </Details.Column>
        </Details.Row>

      </Details.Frame>
      <Details.DividerBottomSVG bgColor={subBrandColors[0].title} />
    </Details>
  )
}

export default DetailsIndex
