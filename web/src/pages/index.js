// Imported dependencies
import React from 'react'
// Imported components
import SEO from '../components/seo'
import { Hero, Locations, AboutUs, ReviewsPreview } from '../components/FrontPage'


const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Locations />
    <AboutUs />
    <ReviewsPreview />
  </>
)

export default IndexPage
