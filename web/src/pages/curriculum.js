import React from 'react'
import SEO from '../components/seo'
import { ReviewsPreview } from '../components/Pages/FrontPage'
import Curriculum from '../components/Pages/Curriculum'

const CurriculumIndex = () => {
  return (
    <>
      <SEO title="Curriculum" />
      <Curriculum />
      <ReviewsPreview />
    </>
  )
}

export default CurriculumIndex
