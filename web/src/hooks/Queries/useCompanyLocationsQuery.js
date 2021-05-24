import { useStaticQuery, graphql } from "gatsby"

export const useCompanyLocationsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        locations: allSanityLocation(sort: {order: ASC, fields: name}) {
          nodes {
            name
            slug {
              current
            }
            subBrandColors {
              title
            }
            subBrandLogo
          }
        }
      }
    `
  )
  return data
}