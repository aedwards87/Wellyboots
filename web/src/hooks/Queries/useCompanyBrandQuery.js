import { useStaticQuery, graphql } from "gatsby"

export const useCompanyBrandQuery = () => {
  const data = useStaticQuery(
    graphql`
      query CompanyBrandQuery {
        brandColors: allSanityBrandColors {
          nodes {
            title
            color {
              rgb {
                r, g, b
              }
            }
          }
        }   
        brand: allSanityBrand {
          nodes {
            logo {
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