// Imported Packages
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// Imported Styles
import { GlobalStyles, Typography } from '../../styles/index'
import Layout from './LayoutStyles'

// Imported Components
import Header from '../Header'
import Footer from '../Footer'

//Imported custom hooks
import { useCompanyBrandQuery } from '../../hooks'

const LayoutIndex = ({ children }) => {
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
    <Layout>
      <GlobalStyles brandColors={brandColors.nodes} />
      <Typography />
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
