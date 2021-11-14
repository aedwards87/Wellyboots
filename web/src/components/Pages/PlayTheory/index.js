// Imported dependencies
import React from 'react'
import Form from '../../Reusable/Form/index'
// Imported components
import PlayTheory from './PlayTheory'

// The component
export const PlayTheoryIndex = () => {
  return (
    <PlayTheory>
      <PlayTheory.Frame>

        <PlayTheory.Row>
          <PlayTheory.Column>
            <PlayTheory.Title heading="hero" lineColor="Play theory">Play theory</PlayTheory.Title>
          </PlayTheory.Column>
        </PlayTheory.Row>

        <PlayTheory.Row columns={2} xGap='94px'>
          <PlayTheory.Column yGap={3}>
            <PlayTheory.Text>Image</PlayTheory.Text>
          </PlayTheory.Column>
        </PlayTheory.Row>

      </PlayTheory.Frame>
    </PlayTheory>
  )
}

export default PlayTheoryIndex