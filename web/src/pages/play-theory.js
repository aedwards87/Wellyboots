import React from 'react'
import SEO from '../components/seo'
import { ReviewsPreview } from '../components/Pages/FrontPage'
import { Hero, WhatIsPlay, WhyDoWePlay, PlayWorkPrinciples } from '../components/Pages/PlayTheory'


const PlayTheoryIndex = () => {
  return (
    <>
      <SEO title="Play theory" />
      <Hero />
      <WhatIsPlay />
      <WhyDoWePlay />
      <PlayWorkPrinciples />
      <ReviewsPreview />
    </>
  )
}

export default PlayTheoryIndex
