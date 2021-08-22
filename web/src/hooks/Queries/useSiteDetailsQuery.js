import { useStaticQuery, graphql } from "gatsby"

export const useSiteDetailsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query SiteDetails {
        siteDetails: allSanitySiteDetails {
          nodes {
            title
            contactDetails {
              location {
                contactDetails {
                  emailAddressOne
                  emailAddressTwo
                  mobileNumber
                  telephoneNumber
                }
                geoLocation {
                  lat
                  lng
                }
                address {
                  nameOrNumber
                  addressLineOne
                  addressLineTwo
                  townOrCity
                  county
                  postCode
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