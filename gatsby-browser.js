import React from 'react'

import Layout from 'templates/Layout/Layout'
import ThemeProvider from 'providers/ThemeProvider/ThemeProvider'

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider>
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
)
