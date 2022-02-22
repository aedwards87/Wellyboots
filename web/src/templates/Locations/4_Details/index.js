// Imported dependencies
import React from 'react'
// Imported components
import Details from './Details'
// Imported helpers
import { addSpaceToString, changeTimeFormat, determineTextColor, toLowerCaseAndHypen } from '../../../utils/helpers'

const DetailsIndex = ({ data: { location: {
  shortName,
  name,
  address,
  dayAndTime,
  contactDetails,
  geoLocation,
  subBrandColors
} } }) => {
  const colorOne = determineTextColor(subBrandColors[0].title)
  const colorTwo = determineTextColor(subBrandColors[1].title)

  return (
    <Details bgColor={subBrandColors[0].title}>
      <Details.DividerTopSVG bgColor={subBrandColors[0].title} />
      <Details.Frame bPad={10} tPad={10}>

        <Details.Row>
          <Details.Column>
            <Details.Title
              id={toLowerCaseAndHypen(`${shortName || name} details`)}
              heading='h2' 
              lineColor={subBrandColors[1].title} 
              lineColor="light"
              color={colorOne}
              zIndex="1"
            >
              {shortName || name} details
            </Details.Title>
          </Details.Column>
        </Details.Row>

        <Details.Row columns={2} xGap={56} yGap={5}>
          <Details.Column xAlign="stretch">

            <Details.Row columns={2} xGap={6} custom>

              <Details.Column yAlign="start">
                <Details.PhoneSVG
                  colorOne={subBrandColors[1].title}
                  // colorOne={colorTwo}
                  colorTwo={colorOne}
                  colorThree={subBrandColors[0].title}
                />
                <Details.Group>
                  <Details.Text color={colorOne}>
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
                <Details.EmailSVG 
                  colorOne={subBrandColors[1].title}
                  // colorOne={colorTwo}
                  colorTwo={colorOne}
                />
                <Details.Group>
                  <Details.Text color={colorOne}>
                    {contactDetails.emailAddressOne && contactDetails.emailAddressOne} <br />
                    {contactDetails.emailAddressTwo && contactDetails.emailAddressTwo}
                  </Details.Text>
                </Details.Group>
              </Details.Column>

              <Details.Column yAlign="start" xAlign="stretch">
                <Details.SunSVG />
                <Details.ClockSVG 
                  colorOne={colorOne}
                  colorTwo={subBrandColors[1].title}
                  // colorTwo={colorTwo}
                  colorThree={subBrandColors[0].title}
                />
                <Details.Group>
                  <Details.Text color={colorOne}>
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
