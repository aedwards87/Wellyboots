import React from 'react'
import SEO from '../components/seo'
import { ReviewsPreview } from '../components/Pages/FrontPage'
import PlayTheory from '../components/Pages/PlayTheory'

const PlayTheoryIndex = () => {
  return (
    <>
      <SEO title="Play theory" />
      <PlayTheory />
      <ReviewsPreview />
    </>
  )
}

export default PlayTheoryIndex
