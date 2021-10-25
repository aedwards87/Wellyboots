// Imported dependencies
import React from 'react'
// Imported components
import Staff from './Staff'

const StaffIndex = ({ data: { location: {
  person,
  subBrandColors
} } }) => {
  const dark = subBrandColors[1].title.includes("Dark")
  return (
    <Staff id="Staff" bgColor={subBrandColors[1].title}>
      <Staff.DividerTopSVG bgColor={subBrandColors[1].title} />
      <Staff.Frame bPad={4} tPad={10}>

        <Staff.Row>
          <Staff.Column>
            <Staff.Title
              lineColor="light"
              zIndex="1"
              color={dark ? "light" : ""}
            >
              Meet our staff
            </Staff.Title>
          </Staff.Column>
        </Staff.Row>

        <Staff.Row>
          <Staff.Columns>
            <Staff.Group>
              <Staff.Text color={dark ? "light" : ""}>
                All our staff have significant experience and hold
                relevant qualifications required for working with
                children and young people, and comply with EYFS
                requirements for registered childcare.
              </Staff.Text>
              <Staff.Text color={dark ? "light" : ""}>
                All the Staff are expected to undertake professional
                development training regularly and are checked through
                the Disclosure and barring service (D.B.S).
              </Staff.Text>
              <Staff.Text color={dark ? "light" : ""}>
                First aid, food hygiene and safe guarding children
                courses are updated as required.
              </Staff.Text>
            </Staff.Group>
            {person.map((p, i) => {
              {/* console.log('pp', p) */ }
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
