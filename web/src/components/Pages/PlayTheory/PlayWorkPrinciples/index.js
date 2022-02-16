// Imported dependencies
import React from 'react'
import { VisuallyHidden } from '../../../Reusable'
// Imported components
import PlayWorkPrinciples from './PlayWorkPrinciples'

const content = [
  {
    text: "All children and young people need to play. The impulse to play is innate. Play is a biological, psychological and social necessity, and is fundamental to the healthy development and wellbeing of individuals and communities.",
    color: "purple"
  },
  { 
    text: "Play is a process that is freely chosen, personally directed and intrinsically motivated. That is, children and young people determine and control the content and intent of their play, by following their own instincts, ideas and interests, in their own way for their own reasons.",
    color: "blue"
  },
  { 
    text: "The prime focus and essence of playwork is to support and facilitate the play process and this should inform the development of play policy, strategy, training and education.",
    color: "green"
  },
  { 
    text: "For playworkers, the play process takes precedence and playworkers act as advocates for play when engaging with adult led agendas.",
    color: "dark pink"
  },
  { 
    text: "The role of the playworker is to support all children and young people in the creation of a space in which they can play.",
    color: "orange"
  },
  { 
    text: "The Playworkers response to children and young people playing is based on a sound up to date knowledge of the play process, and reflective practice. ",
    color: "pink"
  },
  { 
    text: "Playworkers recognise their own impact on the play space and also the impact of children and young people’s play on the playworker.",
    color: "dark blue"
  },
  { 
    text: "Playworkers choose an intervention style that enables children and young people to extend their play. All playworker intervention must balance risk with the developmental benefit and wellbeing of children.",
    color: "purple"
  },
]

// The component
export const PlayWorkPrinciplesIndex = () => {
  return (
    <PlayWorkPrinciples id="the-playwork-principles">
      <PlayWorkPrinciples.Frame yGap={8} bPad={14}>

        <PlayWorkPrinciples.Row custom xGap={8}>
          <PlayWorkPrinciples.Column column={2} xAlign="center">
            <PlayWorkPrinciples.Title 
              heading="h2" 
              lineColor="green"
              textAlign="center"
            >
              The Playwork Principles
            </PlayWorkPrinciples.Title>
          </PlayWorkPrinciples.Column>
        </PlayWorkPrinciples.Row>

        <PlayWorkPrinciples.Row>
          <PlayWorkPrinciples.Column 
            xAlign="center"
            xItemsAlign="center"
            yGap={6}
          >
            <PlayWorkPrinciples.Text>
              There are <strong>8</strong> principles
            </PlayWorkPrinciples.Text>
            <PlayWorkPrinciples.List>
              {content.map(({text, color}, i) => 
                <PlayWorkPrinciples.ListItem key={i}>
                  <PlayWorkPrinciples.Bulletpoint custom={color}>
                    {i + 1}
                  </PlayWorkPrinciples.Bulletpoint>
                  <PlayWorkPrinciples.Text>
                    {text}
                  </PlayWorkPrinciples.Text>
                </PlayWorkPrinciples.ListItem>
              )}
            </PlayWorkPrinciples.List>
          </PlayWorkPrinciples.Column>
        </PlayWorkPrinciples.Row>

      </PlayWorkPrinciples.Frame>
    </PlayWorkPrinciples>
  )
}

export default PlayWorkPrinciplesIndex