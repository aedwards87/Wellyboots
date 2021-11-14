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
                      gatsbyImageData(width: 400)
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
                gatsbyImageData(width: 400)
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