// Imported dependencies
import React from 'react'
// Imported components
import SEO from '../components/seo'
import Contact from '../components/Pages/Contact'
import { ReviewsPreview } from '../components/Pages/FrontPage'

const ContactUs = () => {
  return (
    <>
      <SEO title="Contact us" />
      <Contact />
      <ReviewsPreview />
    </>
  )
}

export default ContactUs
