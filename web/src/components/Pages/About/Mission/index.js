// Imported dependencies
import React from 'react'
// Imported components
import Mission from './Mission'

// The component
export const MissionIndex = ({ mission }) => {
  return (
    <Mission>
      <Mission.Frame yPad={6}>

        <Mission.Row columns={2} xGap={8} yGap={6}>
          <Mission.Column columnOrder={2} xAlign="center" yAlign="center">
            <Mission.Row>
              <Mission.Column>
                <Mission.Row yGap={7}>
                  <Mission.Title heading="h2" lineColor="orange">
                    Our mission
                  </Mission.Title>
                  <Mission.PortableText content={mission} />
                </Mission.Row>
              </Mission.Column>
            </Mission.Row>
          </Mission.Column>
          <Mission.Column
            yGap={3}
            rowOrder={1}
            xAlign="center"
            xItemsAlign="center"
            yItemsAlign="center"
          >
            <img src="https://i.imgur.com/hyXO5TZ.png" width="100%" />
          </Mission.Column>
        </Mission.Row>

      </Mission.Frame>
    </Mission>
  )
}

export default MissionIndex