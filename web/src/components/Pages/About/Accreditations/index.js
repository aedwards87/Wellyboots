// Imported dependencies
import React from 'react'
// Imported components
import Accreditations from './Accreditations'

// The component
export const AccreditationsIndex = ({ accreditations }) => {
  return (
    <Accreditations>
      <Accreditations.Frame bPad={14}>

        <Accreditations.Row xGap='94px' yGap={6}>
          <Accreditations.Column xAlign="center" yAlign="center">
            <Accreditations.Title heading="h3" color="gray" small>
              Our Accreditations
            </Accreditations.Title>
          </Accreditations.Column>
          <Accreditations.Column xAlign="center">
            <Accreditations.ImageContainer>
              {accreditations.map(image =>
                <Accreditations.Image
                  key={image.alt}
                  image={image.asset.gatsbyImageData}
                  imgStyle={{ objectFit: `contain` }}
                  alt={image.alt}
                  title={image.alt}
                />
              )}
            </Accreditations.ImageContainer>
          </Accreditations.Column>
        </Accreditations.Row>

      </Accreditations.Frame>
    </Accreditations>
  )
}

export default AccreditationsIndex