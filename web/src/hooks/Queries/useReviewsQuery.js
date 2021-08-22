import { useStaticQuery, graphql } from "gatsby"

export const useReviewsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ReviewsQuery {
        allReviews: allSanityFeedback {
          nodes {
            name
            feedback {
              _key
              _rawChildren
              _type
              list
              style
              children {
                _key
                _type
                marks
                text
              }
            }
          }
        }
      }
    `
  )
  return data
}