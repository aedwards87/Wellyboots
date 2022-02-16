import { graphql, Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import { ReviewsPreview } from '../components/Pages/FrontPage'
import PoliciesAndProcedures from '../components/Pages/PoliciesAndProcedures'

const PoliciesAndProceduresIndex = ({ data }) => {
  console.log({data});
  return (
    <>
      <SEO title="Policies and Procedures - Website policy" />
      <PoliciesAndProcedures data={data} />
      <ReviewsPreview />
    </>
  )
}

// Data query
export const PoliciesAndProceduresQuery = graphql`
  query PoliciesAndProceduresQuery {
    policiesAndProcedures: allSanityPoliciesAndProcedures( sort: {order: ASC, fields: title} ) {
      nodes {
        title
        slug {
          current
        }
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
  }
`

export default PoliciesAndProceduresIndex
