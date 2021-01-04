import React from 'react'

import Layout from 'templates/Layout/Layout'

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>
