// Imported Packages
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// Imported Styles
import { GlobalStyles, Typography } from '../../styles/index'

// Imported Components
import Header from '../Header/Header'
// import Footer from '../footer/footer'

//Imported custom hooks
import { useCompanyBrandQuery } from '../../hooks'

const Layout = ({ children }) => {
  const { brandColors } = useCompanyBrandQuery()
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles brandColors={brandColors.nodes} />
      <Typography />
      <Header siteTitle={site.title} location={location} />
      <main >{children}</main>
      {/* <Footer /> */}
    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
