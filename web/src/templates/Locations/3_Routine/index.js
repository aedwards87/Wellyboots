// Imported dependencies
import React from 'react'
// Imported components
import Routine from './Routine'

const RoutineIndex = ({ data: { location: { dailyRoutine, subBrandColors, type } } }) => {
  return (
    <Routine id="DailyRoutine">
      <Routine.Frame tPad={9}>

        <Routine.Row>
          <Routine.Column>
            <Routine.Title lineColor={subBrandColors[0].title} zIndex="1">Daily routine</Routine.Title>
          </Routine.Column>
        </Routine.Row>

        <Routine.Row columns={2} xGap="94px" yGap={9}>

          <Routine.Column xAlign="stretch" yAlign="center" columnOrder={2}>
            {dailyRoutine.map(routine =>
              <Routine.Table key={routine.time} time={routine.time} routine={routine.title} lineColor={subBrandColors[1].title} />
            )}
            {dailyRoutine.map(routine =>
              <Routine.Table time={routine.time} routine={routine.title} lineColor={subBrandColors[1].title} />
            )}
            {dailyRoutine.map(routine =>
              <Routine.Table time={routine.time} routine={routine.title} lineColor={subBrandColors[1].title} />
            )}
            {dailyRoutine.map(routine =>
              <Routine.Table time={routine.time} routine={routine.title} lineColor={subBrandColors[1].title} />
            )}
            {dailyRoutine.map(routine =>
              <Routine.Table time={routine.time} routine={routine.title} lineColor={subBrandColors[1].title} />
            )}
          </Routine.Column>

          <Routine.Column yAlign="center" rowOrder={1}>
            <Routine.ImageContainer>
              {/* <Routine.Image 
                alt={}
                fluid={}
              /> */}
              <img src="https://i.imgur.com/ZT1wnjc.png" width="100%" />
            </Routine.ImageContainer>
          </Routine.Column>

        </Routine.Row>

      </Routine.Frame>
    </Routine>
  )
}

export default RoutineIndex
