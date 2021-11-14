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