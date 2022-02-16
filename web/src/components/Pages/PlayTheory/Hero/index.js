// Imported dependencies
import React from 'react'
import { VisuallyHidden } from '../../../Reusable'
// Imported components
import Hero from './Hero'

// The component
export const HeroIndex = () => {
  return (
    <Hero>
      <Hero.Frame yGap={6} bPad={1}>

        <Hero.Row custom xGap={8}>
          <Hero.Column column={2} xAlign="center">
            <VisuallyHidden>
              <Hero.Title 
                heading="h1" 
                lineColor="Play theory"
              >
                Play Theory
              </Hero.Title>
            </VisuallyHidden>
            <Hero.Title 
              heading="hero" 
            >
              {/* Play is something that children do when adults stop telling them what to do */}
              <span>Play</span> is something <span><span>children</span>
                <span> </span>
                <span>do</span></span> when <span>
                <span>adults</span>
                <span> </span>
                <span>stop</span>
              </span> telling them <span><span>what</span>
                <span> </span>
                <span>to</span>
                <span> </span>
                <span>do</span>
              </span>
            </Hero.Title>
          </Hero.Column>

          <Hero.Column 
            column={1} 
            yAlign="start" 
            gap={3}
          >
            <Hero.Title 
              heading="h2" 
              color="gray" 
              small
            >
              Jump to
            </Hero.Title>
            <Hero.Nav aria-label="Secondary navigation - Jump to a section on the page">
              <Hero.Link 
                to="/play-theory#what-is-play" 
                lineColor="blue"
                $custom
              >
                What is play?
              </Hero.Link>
              <Hero.Link 
                to="/play-theory#why-do-we-play" 
                lineColor="yellow" 
                $custom
              >
                Why do we play?
              </Hero.Link>
              <Hero.Link 
                to={`/play-theory#the-playwork-principles`} 
                lineColor="green"
                $custom
              >
                The Playwork Principles
              </Hero.Link>
              <Hero.FootPrintsSVG />
            </Hero.Nav>
          </Hero.Column>
        </Hero.Row>

        <Hero.Row className='fullBleed'>
          <Hero.Column xAlign='revert' yGap={3}>
            <Hero.Image 
              name="kids-playing-1695165112" 
              alt="Illustration of kids playing"
              objectFit="cover"
              objectPosition="right"
            />
          </Hero.Column>
        </Hero.Row>

      </Hero.Frame>
    </Hero>
  )
}

export default HeroIndex