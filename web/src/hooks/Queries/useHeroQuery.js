import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(
    graphql`
      query HeroQuery {
        hero: allSanityFrontPage {
          nodes {
            heading
            primaryCTA
            secondaryCTA
            subHeading
            imageGallery {
              image {
                alt
                asset {
                  fluid(maxWidth: 200) {
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