import { useStaticQuery, graphql } from "gatsby"

export const useAboutUsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query AboutUS {
        aboutUs: allSanityAbout {
          nodes {
            aboutOwner {
              owner {
                firstName
                lastName
                qualifications
                role
                staffPhoto {
                  image {
                    asset {
                      fluid {
                        base64
                      }
                    }
                  }
                }
              }
              ownerDescription {
                _key
                _type
                style
                list
                _rawChildren
              }
            }
            accreditations {
              asset {
                fluid {
                  base64
                }
              }
            }
            ourAim {
              _key
              _type
              style
              list
              _rawChildren
            }
            ourMissionStatement {
              _key
              _type
              style
              list
              _rawChildren
            }
          }
        }
      }
    `
  )
  return data
}