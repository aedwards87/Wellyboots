import { useStaticQuery, graphql } from "gatsby"

export const usePoliciesAndProceduresQuery = () => {
  const data = useStaticQuery(
    graphql`
      query PoliciesAndProcedures {
        policiesAndProcedures: allSanityPoliciesAndProcedures(sort: {order: ASC, fields: title}) {
          nodes {
            title
            slug {
              current
            }
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
      }
    `
  )
  return data
}