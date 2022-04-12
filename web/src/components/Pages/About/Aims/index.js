// Imported dependencies
import React from 'react'
// Imported components
import Aims from './Aims'

// The component
export const AimsIndex = ({ aims }) => {
  // console.log({aims});
  return (
    <Aims>
      <Aims.Frame tPad={6} bPad={4}>

        <Aims.Row columns={2} xGap='94px' yGap={6}>
          <Aims.Column xAlign="center" yAlign="center">
            <Aims.Row>
              <Aims.Column>
                <Aims.Row yGap={7}>
                  <Aims.Title heading="h2" lineColor="yellow">Our aims</Aims.Title>
                  <Aims.PortableText content={aims} />
                </Aims.Row>
              </Aims.Column>
            </Aims.Row>
          </Aims.Column>
          <Aims.Column
            yGap={3}
            xAlign="center"
            xItemsAlign="center"
            yItemsAlign="center"
          >
            {/* <Aims.ImageContainer> */}
            <img src="https://i.imgur.com/k4AufcC.png" width="100%" />
            {/* </Aims.ImageContainer> */}
          </Aims.Column>
        </Aims.Row>

      </Aims.Frame>
    </Aims>
  )
}

export default AimsIndex