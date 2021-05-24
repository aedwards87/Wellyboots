// Imported packages
import React from 'react'
import PropTypes from "prop-types"

// Imported components
import Header from './HeaderComponents'
import Nav from './Nav/Nav'

const HeaderIndex = ({ siteTitle }) => {
  return (
    <Header>
      <Header.Frame yPad={0}>
        <Nav />
      </Header.Frame>
    </Header>
  )
}

HeaderIndex.propTypes = {
  siteTitle: PropTypes.string,
}

export default HeaderIndex
