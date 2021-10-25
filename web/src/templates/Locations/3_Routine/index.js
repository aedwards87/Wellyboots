// Imported dependencies
import React from 'react'
import { changeTimeFormat } from '../../../utils/helpers'
// Imported components
import Routine from './Routine'

const RoutineIndex = ({ data: { location: {
  dailyRoutine,
  lateAfternoonRoutine,
  subBrandColors,
  type,
} } }) => {
  const conditionDaily = dailyRoutine?.length > 0
  const conditionAfternoon = lateAfternoonRoutine?.length > 0
  return (
    <Routine id="DailyRoutine">
      <Routine.Frame tPad={9}>

        <Routine.Row columns={2} xGap="94px" yGap={10}>
          <Routine.Column
            xAlign="stretch"
            xItemsAlign="center"
            yAlign="center"
            conditionDaily={conditionDaily}
            conditionAfternoon={conditionAfternoon}
          >
            <Routine.Row yGap={8}>
              {conditionDaily &&
                <Routine.Column>
                  <Routine.Title lineColor={subBrandColors[0].title} zIndex="1">
                    Daily routine
                  </Routine.Title>
                </Routine.Column>
              }
              <Routine.Column columnOrder={1} >
                {conditionDaily
                  ? <Routine.Table routine={dailyRoutine} lineColor={subBrandColors[1].title} />
                  : <img src="https://i.imgur.com/ZT1wnjc.png" />}
              </Routine.Column>
            </Routine.Row>
          </Routine.Column>

          <Routine.Column
            xAlign="stretch"
            xItemsAlign="center"
            yAlign={conditionAfternoon ? 'start' : 'center'}
            columnOrder={2}
          >
            <Routine.Row yGap={8}>
              {conditionAfternoon &&
                <Routine.Column>
                  <Routine.Title lineColor={subBrandColors[0].title} zIndex="1" custom>
                    Late afternoon routine
                  </Routine.Title>
                </Routine.Column>
              }
              <Routine.Column>
                {conditionAfternoon
                  ? <Routine.Table routine={lateAfternoonRoutine} lineColor={subBrandColors[1].title} />
                  : <img src="https://i.imgur.com/ZT1wnjc.png" />
                }
              </Routine.Column>
            </Routine.Row>
          </Routine.Column>

        </Routine.Row>
      </Routine.Frame>
    </Routine>
  )
}

export default RoutineIndex
