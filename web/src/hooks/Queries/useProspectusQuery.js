import { useStaticQuery, graphql } from "gatsby"

export const useProspectusQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ProspectusQuery {
        sanityProspectus {
          prospectus {
            asset {
              originalFilename
              url
            }
          }
        }
      }
    `
  )
  return data
}