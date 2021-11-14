/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import Layout from './src/components/Layout/Layout'
import { StoreProvider } from './src/hooks/useStore'

export const wrapRootElement = ({ element }) => {
  const initialState = {
    isNavMenuOpen: false,
  }

  return <StoreProvider initialState={initialState}>{element}</StoreProvider>
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
