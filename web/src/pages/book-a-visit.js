// Imported dependencies
import React from 'react'
// Imported components
import SEO from '../components/seo'
import BookAVisit from '../components/Pages/BookAVisit'
import { ReviewsPreview } from '../components/Pages/FrontPage'

const BookAVisitPage = () => {
  return (
    <>
      <SEO title="Book a visit" />
      <BookAVisit />
      <ReviewsPreview />
    </>
  )
}

export default BookAVisitPage
