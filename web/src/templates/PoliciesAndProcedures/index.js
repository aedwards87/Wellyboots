// usePoliciesAndProceduresQuery
// Imported dependencies
import { graphql } from 'gatsby';
import React from 'react'
// import SEO from '../components/seo'
// Imported components
import PoliciesAndProcedures from '../../components/Pages/PoliciesAndProcedures'
import { ReviewsPreview } from '../../components/Pages/FrontPage'

// The component
const PoliciesAndProceduresIndex = ({ data }) => {
  // console.log({data});
  return (
    <>
      {/* <SEO title="Policies and Procedures - Website policy" /> */}
      <PoliciesAndProcedures data={data} />
      <ReviewsPreview />
    </>
  )
}


// Data query
export const PoliciesAndProceduresTemplateQuery = graphql`
  query PoliciesAndProceduresTemplateQuery($slug: String!) {
    policiesAndProcedures: sanityPoliciesAndProcedures(
      slug: { current: { eq: $slug } } 
    ) {
      title
      _rawDescription
      description {
        _key
        _type
        style
        list
        _rawChildren
        children {
          text
          marks
          _type
          _key
        }
      }
    }
  }
`

export default PoliciesAndProceduresIndex
