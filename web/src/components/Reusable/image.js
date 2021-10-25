import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ name = "" }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const nameSearch = image.nodes.filter(n => n.childImageSharp.fluid.originalName.includes(name))

  // if (!image?.nodes[0]?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  if (!name || nameSearch.length > 1 || !nameSearch[0]?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={nameSearch[0].childImageSharp.fluid} />
}

export default Image
