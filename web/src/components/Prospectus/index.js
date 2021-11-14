// Imported dependencies
import React from 'react'
// Imported components
import Prospectus from './Prospectus'
import { useProspectusQuery } from '../../hooks'

const ProspectusIndex = ({ color }) => {
  const { sanityProspectus: { prospectus } } = useProspectusQuery()
  return (
    <Prospectus id="Prospectus">
      <Prospectus.Frame yGap={5}>
        <Prospectus.Row>
          <Prospectus.Column xAlign="center">
            <Prospectus.Title heading='h2'>Download our digital prospectus</Prospectus.Title>
          </Prospectus.Column>
        </Prospectus.Row>
        <Prospectus.Row>
          <Prospectus.Column xAlign="center">
            <Prospectus.ExternalLink
              color={color || "dark green"}
              href={`${prospectus?.asset.url}?dl=${prospectus?.asset.originalFilename}`}
            >Download</Prospectus.ExternalLink>
          </Prospectus.Column>
        </Prospectus.Row>
      </Prospectus.Frame>
    </Prospectus>
  )
}

export default ProspectusIndex
