// Imported dependencies
import React from 'react'
// Imported components
import Mastermind from './Mastermind'

// The component
export const MastermindIndex = ({ mastermind }) => {
  return (
    <Mastermind bgColor="dark blue">
      <Mastermind.DividerTopSVG bgColor="dark blue" />
      <Mastermind.Frame yPad={9}>

        <Mastermind.Row>
          <Mastermind.Column xAlign="center">
            <Mastermind.Title heading="h2" lineColor="blue" zIndex="1" color="light" textAlign="center">Who’s the mastermind behind Wellyboots</Mastermind.Title>
          </Mastermind.Column>
        </Mastermind.Row>

        <Mastermind.Row xGap='94px'>
          <Mastermind.Column yGap={4} custom xAlign="center" xItemsAlign="center">
            <Mastermind.Image
              fluid={mastermind.owner.staffPhoto.image.asset.fluid}
              alt={mastermind.owner.staffPhoto.alt}
            />
            <Mastermind.Row yGap={7}>
              <Mastermind.Column xAlign="center" xItemsAlign="center">
                <Mastermind.Title heading="h3" color="light" >{mastermind.owner.firstName} {mastermind.owner.lastName}</Mastermind.Title>
                <Mastermind.Text color="light" weight="light">Founder, Owner, Manager (Mastermind)</Mastermind.Text>
              </Mastermind.Column>
              <Mastermind.Column>
                <Mastermind.PortableText content={mastermind.ownerDescription} />
              </Mastermind.Column>
            </Mastermind.Row>
          </Mastermind.Column>
        </Mastermind.Row>

      </Mastermind.Frame>
      <Mastermind.DividerBottomSVG bgColor="dark blue" />
    </Mastermind>
  )
}

export default MastermindIndex