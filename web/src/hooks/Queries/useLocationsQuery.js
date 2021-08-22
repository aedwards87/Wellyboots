import { useStaticQuery, graphql } from "gatsby"

export const useLocationsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query SiteMetaData {
        locations: allSanityLocation(sort: {order: ASC, fields: name}) {
          nodes {
            name
            shortName
            slug {
              current
            }
            subBrandColors {
              title
            }
            subBrandLogo
            type
            mainImage {
              alt
              image {
                asset {
                  fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return data
}