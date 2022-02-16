// Imported dependencies
import React from 'react'
import { VisuallyHidden } from '../../Reusable'
// Imported components
import PoliciesAndProcedures from './PoliciesAndProcedures'
// Imported hooks
import { usePoliciesAndProceduresQuery } from '../../../hooks';
import { SideNav } from '../../Reusable';


// The component
export const PoliciesAndProceduresIndex = ({ data }) => {
  const { title, _rawDescription } = data.policiesAndProcedures
  const { policiesAndProcedures: { nodes: policiesAndProcedures } } = usePoliciesAndProceduresQuery()

  return (
    <PoliciesAndProcedures>
      <PoliciesAndProcedures.Frame yGap={8}>
        <PoliciesAndProcedures.Row yGap={8} columns={2}>

          <PoliciesAndProcedures.Column yAlign="start">
            <SideNav name="Policies" data={policiesAndProcedures} fullscreen />
          </PoliciesAndProcedures.Column>

          <PoliciesAndProcedures.Column yAlign="start" yGap={7}>
            <VisuallyHidden>
              <PoliciesAndProcedures.Title heading="hero">
                Policies and Procedures
              </PoliciesAndProcedures.Title>
            </VisuallyHidden>
            <PoliciesAndProcedures.Title heading="hero" /* TO BE H2 and hero */ lineColor="Purple">
              {title}
            </PoliciesAndProcedures.Title>
            <PoliciesAndProcedures.PortableText content={_rawDescription} />
          </PoliciesAndProcedures.Column>

        </PoliciesAndProcedures.Row>
      </PoliciesAndProcedures.Frame>
    </PoliciesAndProcedures>
  )
}

export default PoliciesAndProceduresIndex
