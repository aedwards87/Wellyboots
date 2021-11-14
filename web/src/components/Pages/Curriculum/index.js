// Imported dependencies
import React from 'react'
import Form from '../../Reusable/Form/index'
// Imported components
import Curriculum from './Curriculum'

// The component
export const CurriculumIndex = () => {
  return (
    <Curriculum>
      <Curriculum.Frame>

        <Curriculum.Row>
          <Curriculum.Column>
            <Curriculum.Title heading="hero" lineColor="Curriculum">Curriculum</Curriculum.Title>
          </Curriculum.Column>
        </Curriculum.Row>

        <Curriculum.Row columns={2} xGap='94px'>
          <Curriculum.Column yGap={3}>
            <Curriculum.Text>Image</Curriculum.Text>
          </Curriculum.Column>
        </Curriculum.Row>

      </Curriculum.Frame>
    </Curriculum>
  )
}

export default CurriculumIndex