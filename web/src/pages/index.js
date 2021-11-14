// Imported dependencies
import React from 'react'
// Imported components
import SEO from '../components/seo'
import { 
  Hero, 
  Locations, 
  AboutUs, 
  ReviewsPreview 
} from '../components/Pages/FrontPage'


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
