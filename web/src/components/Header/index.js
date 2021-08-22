// Imported packages
import React from 'react'
import PropTypes from "prop-types"

// Imported components
import Header from './Header'
import Nav from './Nav'

const HeaderIndex = ({ siteTitle }) => {
  return (
    <Header>
      <Header.Frame yPad={0}>
        <Nav siteTitle={siteTitle} />
      </Header.Frame>
    </Header>
  )
}

HeaderIndex.propTypes = {
  siteTitle: PropTypes.string,
}

export default HeaderIndex
