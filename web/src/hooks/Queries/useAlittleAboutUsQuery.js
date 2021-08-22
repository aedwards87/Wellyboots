import { useStaticQuery, graphql } from "gatsby"

export const useALittleAboutUsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query ALittleAboutUs {
        aLittleAboutUs: allSanityAbout {
          nodes {
            accreditations {
              alt
              asset {
                fluid(maxWidth: 200) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            frontPageDescription {
              children {
                text
                _key
                _type
                marks
              }
              _key
              _rawChildren
              _type
              style
              list
            }
          }
        }
      }
    `
  )
  return data
}