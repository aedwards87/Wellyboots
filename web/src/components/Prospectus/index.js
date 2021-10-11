// Imported dependencies
import React from 'react'
// Imported components
import Prospectus from './Prospectus'

const ProspectusIndex = ({ color }) => {
  return (
    <Prospectus id="Prospectus">
      <Prospectus.Frame yGap={3}>
        <Prospectus.Row>
          <Prospectus.Column xAlign="center">
            <Prospectus.Title>Download our digital prospectus</Prospectus.Title>
          </Prospectus.Column>
        </Prospectus.Row>
        <Prospectus.Row>
          <Prospectus.Column xAlign="center">
            <Prospectus.Link model={1} color={color}>Download</Prospectus.Link>
          </Prospectus.Column>
        </Prospectus.Row>
      </Prospectus.Frame>
    </Prospectus>
  )
}

export default ProspectusIndex
