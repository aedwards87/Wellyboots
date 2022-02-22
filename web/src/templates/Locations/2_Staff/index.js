// Imported dependencies
import React from 'react'
import { Girl } from '../../../assets/svg'
import { determineTextColor } from '../../../utils/helpers'
// Imported components
import Staff from './Staff'

const StaffIndex = ({ data }) => {
  const { person, subBrandColors } = data.location
  const colorOne = determineTextColor(subBrandColors[0].title)
  const colorTwo = determineTextColor(subBrandColors[1].title)

  return (
    <Staff bgColor={subBrandColors[1].title}>
      <Staff.DividerTopSVG bgColor={subBrandColors[1].title} />
      <Staff.Frame bPad={4} tPad={9}>
      <Staff.GirlSVG />
        <Staff.Row>
          <Staff.Column>
            <Staff.Title
              id="staff"
              heading='h2'
              lineColor='Light'
              color={colorTwo}
              zIndex="1"
            >
              Meet our staff
            </Staff.Title>
          </Staff.Column>
        </Staff.Row>

        <Staff.Row>
          <Staff.Columns>
            <Staff.Group>
              <Staff.Text color={colorTwo}>
                All our staff have significant experience and hold relevant qualifications required for working with children and young people, and comply with EYFS requirements for registered childcare.
              </Staff.Text>
              <Staff.Text color={colorTwo}>
                All the Staff are expected to undertake professional development training regularly and are checked through the Disclosure and barring service (D.B.S).
              </Staff.Text>
              <Staff.Text color={colorTwo}>
                First aid, food hygiene and safe guarding children courses are updated as required.
              </Staff.Text>
            </Staff.Group>
            {person.map((p, i) => {
              return (
                <Staff.Group key={i}>
                  <Staff.ProfileCard person={p} bgColor={subBrandColors[0].title} />
                </Staff.Group>
              )
            })}
          </Staff.Columns>
        </Staff.Row>

      </Staff.Frame>
      <Staff.DividerBottomSVG bgColor={subBrandColors[1].title} />
    </Staff>
  )
}

export default StaffIndex
