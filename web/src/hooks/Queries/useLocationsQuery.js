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
            subBrandSVG {
              alt
              asset {
                gatsbyImageData
              }
            }
            type
            mainImage {
              alt
              image {
                asset {
                  gatsbyImageData(width: 400)
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