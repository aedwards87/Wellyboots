// Imported dependencies
import React from 'react'
// Imported components
import WhyDoWePlay from './WhyDoWePlay'

// The component
export const WhyDoWePlayIndex = () => {
  return (
    <WhyDoWePlay id="why-do-we-play" bgColor="yellow">
      <WhyDoWePlay.SVGDividerTop />
      <WhyDoWePlay.Frame>
        <WhyDoWePlay.Row custom xGap={8}>
          <WhyDoWePlay.Column column={2} xAlign="center">
            <WhyDoWePlay.Title 
              heading="h2" 
              lineColor="light"
              textAlign="center"
              zIndex="1"
            >
              Why do we play?
            </WhyDoWePlay.Title>
          </WhyDoWePlay.Column>
        </WhyDoWePlay.Row>
        <WhyDoWePlay.Row columns={2} yGap={7}>
          <WhyDoWePlay.Column 
            columnOrder={2} 
            // yGap={3}
            xAlign="center"
          >
            <WhyDoWePlay.Text>
              Play develops a number of skills including fine and gross motor skills, sensory knowledge, exploration of different roles, development of language skills and development of social skills, cognitive skills, problem solving and thinking skills.
            </WhyDoWePlay.Text>
            <WhyDoWePlay.Text>
              The play types are all linked and can happen together. The value of play has a key role in the development of children. Many psychologists and educationalists have identified the importance of play in helping children to understand the world around them. Free play encourages the child’s social, physical, intellectual, creative and emotional development (SPICE) and by doing so:
            </WhyDoWePlay.Text>
            <WhyDoWePlay.List>
              <WhyDoWePlay.ListItem>
                Play promotes children’s development, learning, creativity and independence.
              </WhyDoWePlay.ListItem>
              <WhyDoWePlay.ListItem>
                Play keeps children healthy and active and active children become active adults.
              </WhyDoWePlay.ListItem>
              <WhyDoWePlay.ListItem>
                Play fosters social inclusion. It helps children understand the people and places in their lives and learn about their environment and develop their sense of community.
              </WhyDoWePlay.ListItem>
              <WhyDoWePlay.ListItem>  
                Play allows children to find out about themselves, their abilities and interests.
              </WhyDoWePlay.ListItem>
              <WhyDoWePlay.ListItem>
                Play is therapeutic. It helps children to deal with difficult or painful circumstances such as emotional stress or medical treatment.
              </WhyDoWePlay.ListItem>
              <WhyDoWePlay.ListItem>
                Play gives children the chance to let off steam and have fun. 
              </WhyDoWePlay.ListItem>
            </WhyDoWePlay.List>
            <WhyDoWePlay.Text
              style={{ maxWidth: '40ch' }}
            >
              Taken from the New Charter for Children’s Play, Children’s Play Council, 1998.
            </WhyDoWePlay.Text>
          </WhyDoWePlay.Column>
          <WhyDoWePlay.Column 
            columnOrder={1} 
            rowOrder={1}
            xAlign="center"
          >
            <WhyDoWePlay.ImageContainer>
              <WhyDoWePlay.Image src="https://i.imgur.com/hyXO5TZ.png" width="100%" />
            </WhyDoWePlay.ImageContainer>
          </WhyDoWePlay.Column>
        </WhyDoWePlay.Row>
      </WhyDoWePlay.Frame>
      <WhyDoWePlay.SVGDividerBottom />
    </WhyDoWePlay>
  )
}

export default WhyDoWePlayIndex