// Imported dependencies
import React from 'react'
// Imported components
import WhatIsPlay from './WhatIsPlay'


const content = [
  {
    text: "Something children do when adults stop telling them what to do.",
    color: "pink"
  },
  { 
    text: "Play is a process encompassing children’s behaviour, which is freely chosen, personally directed and intrinsically motivated.",
    color: "green"
  },
  { 
    text: "“Freely Chosen” means that the children choose when and which play activity to undertake and as such, it is not part of a set programme and does not have any steps that need to be completed.",
    color: "purple"
  },
  { 
    text: "“Personally Directed” means that children themselves agree the roles or rules of the activity; they decide the outcomes, if there are to be any.",
    color: "dark blue"
  },
  { 
    text: "“Intrinsically Motivated” means that it is done for its own sake, and not for anyexternally provided reward, certificate, or status.",
    color: "orange"
  }
]


// The component
export const WhatIsPlayIndex = () => {
  return (
    <WhatIsPlay>
      <WhatIsPlay.Frame yGap={8}>

        <WhatIsPlay.FootPrintsSVG />

        <WhatIsPlay.Row>
          <WhatIsPlay.Column xAlign="center">
            <WhatIsPlay.Title 
              id="what-is-play"
              heading="h2" 
              lineColor="blue"
            >
              What is play?
            </WhatIsPlay.Title>
          </WhatIsPlay.Column>
        </WhatIsPlay.Row>

        <WhatIsPlay.Row>
          <WhatIsPlay.Column xAlign="center">
            <WhatIsPlay.List>
              {content.map(({text, color}, i) => 
                <WhatIsPlay.ListItem key={i}>
                  <WhatIsPlay.Bulletpoint custom={color}>
                    {i + 1}
                  </WhatIsPlay.Bulletpoint>
                  <WhatIsPlay.Text>
                    {text}
                  </WhatIsPlay.Text>
                </WhatIsPlay.ListItem>
              )}
            </WhatIsPlay.List>
          </WhatIsPlay.Column>
        </WhatIsPlay.Row>

      </WhatIsPlay.Frame>
    </WhatIsPlay>
  )
}

export default WhatIsPlayIndex